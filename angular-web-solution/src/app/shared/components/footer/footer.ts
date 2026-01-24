import { ChangeDetectorRef, Component, OnInit, signal, WritableSignal } from '@angular/core';
import { Counter } from "../counter/counter";

@Component({
  selector: 'app-footer',
  imports: [Counter],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit {

  // countVal: number = 3;
  countVal: WritableSignal<number> = signal(3);

  ngOnInit(): void {
    setInterval(() => {
      this.countVal.update(val => val + 1)
    }, 500)
  }

}
