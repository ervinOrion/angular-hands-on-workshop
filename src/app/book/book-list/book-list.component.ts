import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() books: Book[] = [];
  @Output() selected: EventEmitter<Book> = new EventEmitter();

  selectedBook: Book;

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(book: Book) {
    this.selectedBook = book;
    this.selected.emit(book);
  }

}
