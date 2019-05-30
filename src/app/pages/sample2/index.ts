import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'sample2-page',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Sample2Page implements OnInit {
    id: string;

    /**
     * Constructor
     */
    constructor(private route: ActivatedRoute) { }

    /**
     * Page init
     */
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id');
        });
    }
}
