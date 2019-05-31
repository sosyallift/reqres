import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

// services
import {  IUserResponse } from '../../../services/users';

@Component({
    selector: 'user-component',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
    @Input() user: IUserResponse;

    /**
     * Constructor
     */
    constructor() { }

    /**
     * Component init
     */
    ngOnInit() {}
}
