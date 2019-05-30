import { Component } from '@angular/core';
import { Router } from '@angular/router';

// services
import { AuthService } from '../services/auth';

@Component({
    selector: 'app-root',
    templateUrl: './index.html',
    styleUrls: ['./index.scss']
})
export class AppRootComponent {
    /**
     * Constructor
     */
    constructor(
        private router: Router,
        private auth: AuthService) {}

    /**
     * Is logged
     */
    get isLogged(): boolean {
        return this.auth.isAuthenticated();
    }

    /**
     * Logout
     */
    logout(): void {
        this.auth.logout();
        this.router.navigate(['login']);
    }
}
