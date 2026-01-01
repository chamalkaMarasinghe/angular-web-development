import { Component } from '@angular/core';
import { OrderList } from '../../../features/orders/components/order-list/order-list';
import { RedTextDirective } from '../../directives/red-text.directive';
import { ReportService } from '../../../features/orders/services/report.service';

@Component({
  selector: 'app-service-portal',
  imports: [RedTextDirective, OrderList],
  templateUrl: './service-portal.html',
  styleUrl: './service-portal.css',
  providers: [ReportService]
})
export class ServicePortal {

  constructor(private reportService: ReportService) {}

  invokeService() {
    this.reportService.instantReport("Service invoked successfully")
  }
}
