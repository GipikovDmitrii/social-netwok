import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostComponent} from './post/post.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {PostPageComponent} from './post-page/post-page.component';
import {NotificationService} from './notification.service';
import {NotificationComponent} from './notification/notification.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {PostDialogViewComponent} from './post-dialog-view/post-dialog-view.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import {Overlay} from '@angular/cdk/overlay';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import { AdminPageComponent } from './admin-page/admin-page.component';
import {AuthInterceptor} from './auth.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        PostListComponent,
        PostComponent,
        PostPageComponent,
        NotificationComponent,
        PostDialogViewComponent,
        LoginPageComponent,
        AdminPageComponent
    ],
    imports: [
        MatInputModule,
        MatTableModule,
        MatButtonModule,
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        RouterModule,
        MatDialogModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        ReactiveFormsModule,

    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        NotificationService,
        MatDialog,
        Overlay,
        {provide: MAT_DIALOG_DATA, useValue: {id: 1}}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
