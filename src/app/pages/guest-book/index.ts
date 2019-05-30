import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

// services
import { GuestBookService } from '../../services/guest-book';

@Component({
    selector: 'guest-book-page',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        GuestBookService
    ]
})
export class GuestBookPage implements OnInit {
    messages: Array<any> =[];
    isPageLoading: boolean = true;
    newMessage: string = '';

    /**
     * Constructor
     */
    constructor(
        private guestBookService: GuestBookService, 
        private ref: ChangeDetectorRef) { }

    /**
     * Init
     */
    ngOnInit() {
        // load messages
        this.guestBookService.loadMessages().subscribe(messages => {
            this.messages = messages;
            this.isPageLoading = false;

            this.ref.markForCheck();
        })
    }

    /**
     * On submit
     */
    onSubmit(): void {
        this.messages = [
            ...this.messages, {
                message: this.newMessage,
                time: Math.floor(Date.now() / 1000)
            }
        ];

        this.newMessage = '';
    }
}
