import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostListComponent} from './post-list/post-list.component';
import {PostComponent} from './post/post.component';
import {PostPageComponent} from './post-page/post-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {AdminGuard} from './admin.guard';
import {AdminPageComponent} from './admin-page/admin-page.component';

const routes: Routes = [
    {
        path: '', redirectTo: 'auth', pathMatch: 'full'
    },
    {
        path: 'post-list', component: PostListComponent
    },
    {
        path: 'post/:id', component: PostPageComponent
    },
    {
        path: 'auth', component: LoginPageComponent
    },
    {
        path: 'admin-page', component: AdminPageComponent, canActivate: [AdminGuard]
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {
}
