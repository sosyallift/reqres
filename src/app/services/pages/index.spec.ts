import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

// services
import { PagesService } from './';

describe('PagesService', () => {
    let fakeHttp: HttpClient;
    let pages: PagesService; // testable service

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ]
        });

        fakeHttp = TestBed.get(HttpClient);

        // init service
        pages = new PagesService(fakeHttp);
    });

    it('should be created', () => {
        const service: PagesService = TestBed.get(PagesService);
        expect(service).toBeTruthy();
    });

    it('loadPage should return a correct result', () => {
        const pageName: string = 'test';
        const response = {
            title: 'test',
            content: 'test content'
        };

        // fake http
        spyOn(fakeHttp, 'get').and.returnValue(
            of(response)
        );

        pages.loadPage(pageName).subscribe(data => {
            // http
            expect(fakeHttp.get).toHaveBeenCalledWith(`/assets/pages/${pageName}.json`);
        });
    });
});
