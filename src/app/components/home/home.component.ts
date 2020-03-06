import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // 1-541-754-3010
  usPhoneNumber = '15417543010';

  maxLengthTestString = 'this is dummy text';

  constructor() {}

  ngOnInit(): void {}
}
