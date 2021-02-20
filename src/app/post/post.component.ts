import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'cn-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    @Input()
    public model: Post;

    @Input()
    public fullSize: boolean = false;

    @Output()
    public onRemove: EventEmitter<string> = new EventEmitter<string>();

    public _onRemove(): void {
        this.onRemove.emit(this.model.id);
    }

}

export class Post {
    id: string;
    title: string;
    body: string;
}
