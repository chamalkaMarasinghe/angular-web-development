import { Component } from '@angular/core';
import { UserProfile } from "../user-profile/user-profile";

@Component({
  selector: 'app-user-dashboard',
  imports: [UserProfile],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.css',
})
export class UserDashboard {

}
