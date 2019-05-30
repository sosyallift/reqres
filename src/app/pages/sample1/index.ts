import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

// services
import { PagesService } from '../../services/pages';

@Component({
    selector: 'sample1-page',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Sample1Page implements OnInit {
    page$: Observable<any>;

    /**
     * Constructor
     */
    constructor(private pagesService: PagesService) { }

    /**
     * On init
     */
    ngOnInit() {
        this.page$ = this.pagesService.loadPage('sample1');
    }
}
