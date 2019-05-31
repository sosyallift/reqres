import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// responses
import { IPageResponse } from './responses';

@Injectable({
    providedIn: 'root'
})
export class PagesService {
    /**
     * Constructor
     */
    constructor(private http: HttpClient) {}

    /**
     * Load page
     */
    loadPage(pageName: string): Observable<IPageResponse> {
        return this.http.get<IPageResponse>(`/assets/pages/${pageName}.json`);
    }
}
