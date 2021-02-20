import {Injectable} from '@angular/core';
import {Notification} from './models/notification.model';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor() {
    }

    public notifications: Notification[] = [];

    public add(postId: string, action: string): void {
        if (action === 'remove') {
            const notification: Notification = new Notification();
            notification.message = `The post with ${postId} has been removed!`;
            notification.id = postId;
            this.notifications.push(notification);
        }
    }

    public remove(id: string): void {
        const index: number = this.notifications.findIndex(post => post.id === id);
        if (index !== -1) {
            this.notifications.splice(index, 1);
        }
    }

}

