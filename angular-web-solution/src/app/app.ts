import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from "./components/reusable/user-profile/user-profile";
import { UserDashboard } from "./components/reusable/user-dashboard/user-dashboard";
import { UserList } from "./components/reusable/user-list/user-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfile, UserList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = "Web Dev+"
}
