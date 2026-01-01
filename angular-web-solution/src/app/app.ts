import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './features/user/components/user-profile/user-profile';
import { ServicePortal } from './shared/components/service-portal/service-portal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfile, ServicePortal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = "Web Dev+"
}
