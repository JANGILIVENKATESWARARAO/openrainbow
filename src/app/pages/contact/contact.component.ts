import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PageHeroComponent } from '../../shared/page-hero/page-hero.component';
import { ContactService } from '../../core/services/contact.service';
import { CONTACT, ENQUIRY_TOPICS } from '../../core/data/site-content';

type Status = 'idle' | 'sending' | 'sent' | 'error';
type ControlName = 'name' | 'email' | 'company' | 'phone' | 'topic' | 'message' | 'consent';

@Component({
  selector: 'or-contact',
  imports: [ReactiveFormsModule, PageHeroComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);

  readonly contact = CONTACT;
  readonly topics = ENQUIRY_TOPICS;
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
