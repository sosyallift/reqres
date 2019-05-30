import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../auth';

@Injectable()
export class RoutingGuardService implements CanActivate {
    /**
     * Constructor
     */
    constructor(private auth: AuthService, private router: Router) {}

    /**
     * Can activate
     */
    canActivate(): boolean {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);

            return false;
        }

        return true;
    }
}
