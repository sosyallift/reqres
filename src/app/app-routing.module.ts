import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// services
import { RoutingGuardService } from './services/routing-guard';

// import pages
import { Sample1Page } from './pages/sample1';
import { Sample2Page } from './pages/sample2';
import { GuestBookPage } from './pages/guest-book';
import { LoginPage } from './pages/login';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'sample1' },
    { path: 'sample1', component: Sample1Page },
    { path: 'sample2/:id', component: Sample2Page },
    { path: 'login', component: LoginPage },
    { path: 'guest-book', component: GuestBookPage, canActivate: [RoutingGuardService]  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
