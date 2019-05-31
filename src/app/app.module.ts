import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRootComponent } from './root';
import { AppRoutingModule } from './app-routing.module';

// pages
import { UsersPage } from './pages/users';
import { UserPage } from './pages/user';

@NgModule({
    declarations: [
        AppRootComponent,
        UsersPage,
        UserPage
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
    ],
    bootstrap: [AppRootComponent]
})
export class AppModule { }
