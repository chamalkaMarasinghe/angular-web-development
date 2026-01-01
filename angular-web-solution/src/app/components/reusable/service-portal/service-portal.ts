import { Component } from '@angular/core';
import { RedTextDirective } from "../../../directives/red-text.directive";
import { ReportService } from '../../../services/report.service';
import { OrderList } from "../../order/order-list/order-list";

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
