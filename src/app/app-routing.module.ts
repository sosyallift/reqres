import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import pages
import { UsersPage } from './pages/users';
import { UserPage } from './pages/user';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'users' },
    { path: 'users', component: UsersPage },
    { path: 'users/page/:page', component: UsersPage },
    { path: 'user/:id', component: UserPage }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
