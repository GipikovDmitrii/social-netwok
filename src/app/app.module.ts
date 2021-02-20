import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostComponent} from './post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {PostPageComponent} from './post-page/post-page.component';
import {NotificationService} from './notification.service';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
    declarations: [
        AppComponent,
        PostListComponent,
        PostComponent,
        PostPageComponent,
        NotificationComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        RouterModule
    ],
    providers: [NotificationService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
