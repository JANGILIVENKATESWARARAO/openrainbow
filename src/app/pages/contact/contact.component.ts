import { Component, OnInit, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { ContactService } from '../../core/services/contact.service';
import { CONTACT, ENQUIRY_TOPICS } from '../../core/data/site-content';
import { pagesIn } from '../../core/data/detail-pages';

type Status = 'idle' | 'sending' | 'sent' | 'error';
type ControlName = 'name' | 'email' | 'company' | 'phone' | 'topic' | 'message' | 'consent';

@Component({
  selector: 'or-contact',
  imports: [ReactiveFormsModule, PageHeroComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);

  /** Optional ?topic= query parameter, e.g. from a service page. */
  readonly topic = input<string>();

  readonly contact = CONTACT;
  readonly topicGroups = [
    { label: 'General', options: ENQUIRY_TOPICS },
    { label: 'Services', options: pagesIn('services').map((p) => p.title) },
    { label: 'Solutions', options: pagesIn('solutions').map((p) => p.title) },
  ];
  readonly status = signal<Status>('idle');

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email]],
    company: ['', [Validators.maxLength(120)]],
    phone: ['', [Validators.pattern(/^[+()\d\s-]{7,20}$/)]],
    topic: [ENQUIRY_TOPICS[0]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]],
    consent: [false, [Validators.requiredTrue]],
  });

  ngOnInit(): void {
    const topic = this.topic();
    if (topic && this.topicGroups.some((g) => g.options.includes(topic))) {
      this.form.controls.topic.setValue(topic);
    }
  }

  showError(name: ControlName): boolean {
    const control = this.form.controls[name];
    return control.invalid && (control.touched || control.dirty);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('sending');
    const { consent: _consent, ...request } = this.form.getRawValue();
    this.contactService.send(request).subscribe({
      next: () => {
        this.status.set('sent');
        this.form.reset();
      },
      error: () => this.status.set('error'),
    });
  }

  sendAnother(): void {
    this.status.set('idle');
  }
}
