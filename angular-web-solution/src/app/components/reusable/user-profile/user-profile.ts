import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    imports: [FormsModule],
    selector: 'app-user-profile',
    templateUrl: './user-profile.html',

})
export class UserProfile {
    id: number = 32;
    name: string = 'John Doe';
    value = 0;

    getUserName() {
        return this.name;
    }

    onUpdateValue(event: any) {
        this.name = event.target.value
    }

}
