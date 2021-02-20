import {Component, OnInit} from '@angular/core';
import {Post} from '../post/post.component';
import {HttpClient} from '@angular/common/http';
import {NotificationService} from '../notification.service';

@Component({
    selector: 'cn-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

    constructor(private http: HttpClient,
                private service: NotificationService) {
    }

    ngOnInit(): void {
        this.loadPostList();
    }

    public postList: Post[] = [];

    public _onCreate(): void {
        this.postList.unshift(new Post())
    }

    public _onRemove(postId: string): void {
        this.http.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .subscribe(_ => {
                this.service.add(postId, "remove");
                const index: number = this.postList.findIndex(post => post.id === postId);
                if (index !== -1) {
                    this.postList.splice(index, 1);
                }
            });
    }

    private loadPostList(): void {
        this.http.get('https://jsonplaceholder.typicode.com/posts')
            .subscribe((data: Post[]) => {
                this.postList = data;
            }, error => {
                console.error(error);
            }, () => {
                console.log('Complete!');
            });
    }

}
