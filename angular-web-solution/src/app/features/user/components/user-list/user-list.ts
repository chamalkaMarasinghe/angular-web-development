import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {

  flag: boolean = true;

  updateFlag() {
    this.flag = !this.flag;
  }

}
