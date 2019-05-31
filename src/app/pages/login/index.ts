import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

// services
import { AuthService } from '../../services/auth';

@Component({
    selector: 'login-page',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPage implements OnInit {
    login: string;
    password: string;
    isPageLoading: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private auth: AuthService, 
        private ref: ChangeDetectorRef,
        private router: Router) { }

    /**
     * Page init
     */
    ngOnInit() {}

    /**
     * On submit
     */
    onSubmit(): void {
        this.isPageLoading = true;

        this.auth.login(this.login, this.password).subscribe(data => {
            this.isPageLoading = false;
            this.ref.markForCheck();

            if (data.status == 'ok') {
                this.auth.setToken(data.token);
                this.router.navigate(['guest-book']);

                return;
            }

            alert('auth error');
        });
    }
}
