import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostListComponent} from './post-list/post-list.component';
import {PostComponent} from './post/post.component';
import {PostPageComponent} from './post-page/post-page.component';

const routes: Routes = [
    {
        path: '', redirectTo: 'post-list', pathMatch: 'full'
    },
    {
        path: 'post-list', component: PostListComponent
    },
    {
        path: 'post/:id', component: PostPageComponent
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
