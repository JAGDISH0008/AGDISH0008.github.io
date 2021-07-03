import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  year = (new Date()).getFullYear();
  month = (new Date()).getMonth();
  day = (new Date()).getDay();
  age = 0;

  constructor() {
    this.calAge();
    console.log(this.age);

  }
  calAge() {
    this.age = (this.year - 1997) +
      ((this.month - 5) > 0 ? 1 : 0)
  }

  ngOnInit(): void {
  }

}
