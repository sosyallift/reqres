import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRootComponent } from './root';
import { AppRoutingModule } from './app-routing.module';

// services
import { PagesService } from './services/pages';
import { AuthService } from './services/auth';
import { RoutingGuardService } from './services/routing-guard';

// pages
import { Sample1Page } from './pages/sample1';
import { Sample2Page } from './pages/sample2';
import { GuestBookPage } from './pages/guest-book';
import { LoginPage } from './pages/login';

// pipes
import { UrlifyPipe } from './shared/pipes/urlify';

// shared components
import { FormatDateComponent } from './shared/components/format-date';

// shared directives
import { AutoSizeDirective } from './shared/directives/auto-size';

export function tokenGetter() {
    return localStorage.getItem('token');
}

@NgModule({
    declarations: [
        AppRootComponent,
        Sample1Page,
        Sample2Page,
        GuestBookPage,
        LoginPage,
        UrlifyPipe,
        FormatDateComponent,
        AutoSizeDirective
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                headerName: 'jwt'
            }
        })
    ],
    providers: [
        PagesService,
        AuthService,
        RoutingGuardService
    ],
    bootstrap: [AppRootComponent]
})
export class AppModule { }
