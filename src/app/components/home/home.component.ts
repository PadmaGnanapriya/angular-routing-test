import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public myArry: any[];

  constructor() {
  }

  ngOnInit(): void {
    this.myArry = [
      {name: 'Padma', age: 24, address: 'Yakkalamulla'},
      {name: 'Ovindu', age: 23, address: 'Matara'},
      {name: 'Bemala', age: 23, address: 'Mathara'},
    ];
  }

}
