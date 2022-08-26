import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  @Input() set book(value: Book) {
    if (!value) {
      return;
    }

    this.setFormData(value);
    this.selectedBook = value;
  };
  @Output() save: EventEmitter<Book> = new EventEmitter();

  selectedBook: Book;

  bookForm = new FormGroup({
    title: new FormControl<string>(''),
    author: new FormControl<string>(''),
    favorite: new FormControl<boolean>(false),
    percentComplete: new FormControl<number>(0),
  });

  constructor() { }

  ngOnInit(): void {
  }


  setFormData(book: Book) {
    this.bookForm.setValue({
      title: book.title,
      author: book.author,
      favorite: book.favorite,
      percentComplete: book.percentComplete
    });
  }


  saveData() {
    this.save.emit({...this.selectedBook, ...this.bookForm.value});
  }

}
