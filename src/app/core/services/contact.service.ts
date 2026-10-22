import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

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
 *
 * TODO: connect to your real API. For example:
 *   private http = inject(HttpClient);
 *   send(req: ContactRequest) { return this.http.post<void>('/api/contact', req); }
 */
@Injectable({ providedIn: 'root' })
export class ContactService {
  send(_request: ContactRequest): Observable<void> {
    return of(void 0).pipe(delay(900));
  }
}
