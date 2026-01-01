import { Component } from '@angular/core';
import { UserProfile } from '../../../user/components/user-profile/user-profile';
import { ServicePortal } from '../../../../shared/components/service-portal/service-portal';

@Component({
  selector: 'app-home-page',
  imports: [UserProfile, ServicePortal],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage {

}
