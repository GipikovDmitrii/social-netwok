import {Component, OnInit, ViewChild} from '@angular/core';
import {Post} from '../post/post.component';
import {HttpClient} from '@angular/common/http';
import {NotificationService} from '../notification.service';
import {PostDialogViewComponent} from '../post-dialog-view/post-dialog-view.component';
import {MatDialog} from '@angular/material/dialog';
import {AuthService} from '../auth.service';

@Component({
    selector: 'cn-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

    constructor(private http: HttpClient,
                private service: NotificationService,
                public dialog: MatDialog,
                public authService: AuthService) {
    }

    ngOnInit(): void {
        this.loadPostList();
    }

    @ViewChild("dialogViewComponent")
    public dialogViewComponent: PostDialogViewComponent;

    public postList: Post[] = [];

    public displayedColumns: string[] = ['id', 'title', 'body', 'action'];

    public _onCreate(): void {
        this.postList.unshift(new Post())
    }

    public _openDialog(postId: string): void {
        this.dialog.open(PostDialogViewComponent, {data: {id: postId}});
    }

    public _onRemove(postId: string): void {
        this.http.delete(`http://localhost:3000/post/${postId}`)
            .subscribe(_ => {
                this.service.add(postId, "remove");
                const index: number = this.postList.findIndex(post => post.id === postId);
                if (index !== -1) {
                    this.postList.splice(index, 1);
                }
            });
    }

    private loadPostList(): void {
        this.http.get('http://localhost:3000/posts')
            .subscribe((data: Post[]) => {
                this.postList = data;
            }, error => {
                console.error(error);
            }, () => {
                console.log('Complete!');
            });
    }

}
