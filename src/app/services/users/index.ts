import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';

// responses
import { IUserResponse, IUserListResponse } from './responses';

export { 
    IUserResponse
} from './responses';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    /**
     * Rest base url
     */
    private restBaseUrl: string = 'https://reqres.in/api/';

    /**
     * Fetched user list cache
     */
    private fetchedUserListCache: {[K: string]: Array<IUserResponse>} = {};

    /**
     * Total pages
     */
    private totalPages: number = 0;

    /**
     * Constructor
     */
    constructor(private http: HttpClient) {}

    /**
     * Get total users pages
     */
    getTotalUsersPages(): number {
        return this.totalPages;
    }

    /**
     * Load user
     */
    loadUser(userId: number): Observable<{data: IUserResponse}> {
        return this.http.get<{data: IUserResponse}>(this.restBaseUrl + `users/${userId}`)
    }
 
    /**
     * Load page
     */
    loadUsers(pageNumber: number = 1): Observable<Array<IUserResponse>> {
        // check data in the cache
        if (this.fetchedUserListCache[pageNumber]) {
            return of(this.fetchedUserListCache[pageNumber]);
        }

        return this.fetchUserList(pageNumber);
    }

    /**
     * Fetch user list
     */
    private fetchUserList(pageNumber: number): Observable<Array<IUserResponse>>
    {
        const userList$: Subject<Array<IUserResponse>> = new Subject();

        this.http.get<IUserListResponse>(this.restBaseUrl + `users?page=${pageNumber}`).subscribe(data => {
            // process data
            this.totalPages = data.total_pages;
            this.fetchedUserListCache[pageNumber] = data.data;

            // trigger watchers
            userList$.next(this.fetchedUserListCache[pageNumber]);
        });

        return userList$;
    }
}
