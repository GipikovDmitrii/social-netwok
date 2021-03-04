import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../post/post.component';

@Component({
    selector: 'cn-post-page',
    templateUrl: './post-page.component.html',
    styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit, OnChanges {

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {

    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.id.currentValue) {
            this.loadPost();
        }
    }

    @Input()
    public id: string;

    public post: Observable<Post>;

    private loadPost(): void {
        this.post = <Observable<Post>>this.http.get(`http://localhost:3000/post/${this.id}`);
    }

}
