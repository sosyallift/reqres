import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    /**
     * Constructor
     */
    constructor(
        private jwtHelper: JwtHelperService, 
        private http: HttpClient) {}

    /**
     * Is authenticated
     */
    isAuthenticated(): boolean {
        return !this.jwtHelper.isTokenExpired(localStorage.getItem('token'));
    }

    /**
     * Login
     */
    login(userName: string, password: string): Observable<any> {
        return this.http.get(`/assets/pages/login.json`);
    }

    /**
     * Set token
     */
    setToken(token: string): void {
        localStorage.setItem('token', token);
    }

    /**
     * Logout
     */
    logout(): void {
        localStorage.removeItem('token');
    }
}
