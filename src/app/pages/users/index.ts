import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// services
import { UsersService, IUserResponse } from '../../services/users';

@Component({
    selector: 'users-page',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersPage implements OnInit {
    currentPage: number = 1;
    isPageLoading: boolean = true;
    userList: Array<IUserResponse> = [];

    /**
     * Constructor
     */
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private users: UsersService, 
        private ref: ChangeDetectorRef) { }

    /**
     * On init
     */
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.currentPage = params.get('page') ? parseInt(params.get('page'))  :  1;

            // load initial data
            this.users.loadUsers(this.currentPage).subscribe(data => {
                this.userList = data;
                this.isPageLoading = false;
                this.ref.markForCheck();
            });
        });
    }

    /**
     * Load user page
     */
    loadUserPage(userId: number): void {
        this.router.navigateByUrl(`/user/${userId}`);
    }

    /**
     * Get pages
     */
    getPages(): Array<number> {
        return  Array(this.users.getTotalUsersPages()).fill(0).map((x,i) => i + 1);
    }
}
