import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  // template: `<h3>Inline - It is working</h3>`,
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  person = {
    name: 'Ervin',
    surname: 'Suhanko'
  }
  name = "Angular Workshop";
  imageUrl = 'https://www.w3schools.com/images/picture.jpg';

  clicked: boolean;
  fontSizePx = 0;

  arr =[1, 2, 3, 4];

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clicked = !this.clicked;
    this.fontSizePx = 101;
  }

}
