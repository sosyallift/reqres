import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// responses
import { IMessageResponse } from './responses';

@Injectable({
    providedIn: 'root'
})
export class GuestBookService {
    /**
     * Constructor
     */
    constructor(private http: HttpClient) {}

    /**
     * Load messages
     */
    loadMessages(): Observable<Array<IMessageResponse>> {
        return this.http.get<Array<IMessageResponse>>(`/assets/pages/guest-book.json`);
    }
}
