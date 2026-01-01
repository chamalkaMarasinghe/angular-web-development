import { Component } from '@angular/core';
import { RedTextDirective } from "../../../directives/red-text.directive";

@Component({
  selector: 'app-service-portal',
  imports: [RedTextDirective],
  templateUrl: './service-portal.html',
  styleUrl: './service-portal.css',
})
export class ServicePortal {

}
