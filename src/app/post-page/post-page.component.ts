import {Component, OnInit} from '@angular/core';
import {Post} from '../post/post.component';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
    selector: 'cn-post-page',
    templateUrl: './post-page.component.html',
    styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

    constructor(private http: HttpClient,
                private activatedRouter: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activatedRouter.params
            .subscribe(data => {
                this.loadPost(data["id"])
                    .subscribe((post: Post) => {
                        this.post = post;
                    })
            })
    }

    public post: Post;

    private loadPost(id: string): Observable<any> {
        return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }

}
