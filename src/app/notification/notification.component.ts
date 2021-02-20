import {Component, Input, OnInit} from '@angular/core';
import {Notification} from '../models/notification.model';
import {NotificationService} from '../notification.service';

@Component({
    selector: 'cn-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

    constructor(private service: NotificationService) {
    }

    ngOnInit(): void {
    }

    @Input()
    public model: Notification;

    public _deleteNotification(): void {
        this.service.remove(this.model.id);
    }

}
