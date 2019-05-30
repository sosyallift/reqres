import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    loadPage(pageName: string): Observable<any> {
        return this.http.get(`/assets/pages/${pageName}.json`);
    }
}
