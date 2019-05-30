import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'format-date-component',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormatDateComponent implements OnInit {
    @Input() unixTime: number;

    /**
     * Constructor
     */
    constructor() { }

    /**
     * Component init
     */
    ngOnInit() {}

    /**
     * Formatted date
     */
    get formattedDate(): string {
        const newDate = new Date();
        newDate.setTime(this.unixTime * 1000);
        
        return newDate.toUTCString();
    }
}
