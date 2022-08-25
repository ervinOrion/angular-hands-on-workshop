import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from './models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  data: Book[] = [
      {
        id: 1,
        title: "Angular Projects",
        author: "Aristeidis Bampakos",
        percentComplete: 26,
        purchaseLink: "https://www.amzn.com/1800205260",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/41ozUFXCXOS._SX404_BO1,204,203,200_.jpg",
        favorite: true
      },
      {
        id: 2,
        title: "Angular Cookbook",
        author: "Muhammad Ahsan Ayaz",
        percentComplete: 26,
        purchaseLink: "https://www.amzn.com/1838989439",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/411QTHyJ12L._SX404_BO1,204,203,200_.jpg",
        favorite: true
      },
      {
        id: 3,
        title: "Learning Angular",
        author: "Aristeidis Bampakos",
        purchaseLink: "https://www.amazon.com/dp/1839210664",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/41tbeEEyfUL._SX404_BO1,204,203,200_.jpg",
        favorite: false,
        percentComplete: 26
      },
      {
        id: 4,
        title: "JavaScript: The Definitive Guide",
        author: "David Flanagan",
        percentComplete: 26,
        purchaseLink: "https://www.amazon.com/gp/product/1491952024",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX375_BO1,204,203,200_.jpg",
        favorite: false
      },
      {
        id: 5,
        title: "Eloquent JavaScript, 3rd Edition",
        author: "Marijn Haverbeke",
        percentComplete: 26,
        purchaseLink: "https://www.amazon.com/gp/product/1593279507",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg",
        favorite: true
      }
    ]

  selectedBook: Book = null;

  bookForm = new FormGroup({
    title: new FormControl<string>(''),
    author: new FormControl<string>(''),
    favorite: new FormControl<boolean>(false),
    percentComplete: new FormControl<number>(0),
  });




  constructor() { }

  ngOnInit(): void {
  }

  showDetails(book: Book) {
    this.selectedBook = book;
    this.setFormData(book);
  }

  setFormData(book: Book) {
    this.bookForm.setValue({
      title: book.title,
      author: book.author,
      favorite: book.favorite,
      percentComplete: book.percentComplete
    })
  }

}
