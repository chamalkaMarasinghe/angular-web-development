import { Component, Input } from '@angular/core';
import { RedTextDirective } from '../../directives/red-text.directive';

@Component({
  standalone: true,
  selector: 'app-counter',
  imports: [RedTextDirective],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

  @Input() count: number = 0;

}
