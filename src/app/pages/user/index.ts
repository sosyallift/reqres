import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// services
import { UsersService, IUserResponse } from '../../services/users';

@Component({
    selector: 'user-page',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPage implements OnInit {
    userId: number;
    isPageLoading: boolean = true;
    user: {data: IUserResponse};

    /**
     * Constructor
     */
    constructor(
        private route: ActivatedRoute,
        private users: UsersService, 
        private ref: ChangeDetectorRef) { }

    /**
     * On init
     */
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.userId = parseInt(params.get('id'));

            // load initial data
            this.users.loadUser( this.userId).subscribe(data => {
                this.user = data;

                this.isPageLoading = false;
                this.ref.markForCheck();
            });
        });
    }
}
