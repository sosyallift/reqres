import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

// services
import {  IUserResponse } from '../../../services/users';

@Component({
    selector: 'user-list-component',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
    @Input() users: Array<IUserResponse>;

    /**
     * Constructor
     */
    constructor(private router: Router) { }

    /**
     * Component init
     */
    ngOnInit() {}

    /**
     * Load user page
     */
    loadUserPage(userId: number): void {
        this.router.navigateByUrl(`/user/${userId}`);
    }
}
