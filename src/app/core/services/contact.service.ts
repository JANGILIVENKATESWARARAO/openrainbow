import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ContactRequest {
  name: string;
  email: string;
  company: string;
  phone: string;
  topic: string;
  message: string;
}

/**
 * Sends contact form enquiries.
 * Posts to environment.contactApi when it is set; otherwise uses a short mock delay.
 */
@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  send(request: ContactRequest): Observable<unknown> {
    if (environment.contactApi) {
      return this.http.post(environment.contactApi, request);
    }
    return of(null).pipe(delay(900));
  }
}
