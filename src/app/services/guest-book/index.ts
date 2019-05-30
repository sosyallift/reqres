import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    loadMessages(): Observable<any> {
        return this.http.get(`/assets/pages/guest-book.json`);
    }
}
