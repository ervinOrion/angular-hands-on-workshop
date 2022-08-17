import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../models/books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input() books: Book[] = [];
  @Output() selected = new EventEmitter();

  selectedBook: Book;


  constructor() { }

  ngOnInit(): void {
  }

  showDetails(book: Book) {
    this.selected.emit(book);
    this.selectedBook = book;
  }



}
