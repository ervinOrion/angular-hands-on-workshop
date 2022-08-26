import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Book } from './models/book.model';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books$: Observable<Book[]>;
  selectedBook: Book = null;

  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.books$ = this._bookService.all();
  }

  onSelection(book: Book) {
    this.selectedBook = book;
  }


  onSave(book: Book) {
    this._bookService.update(book)
    .pipe(take(1))
    .subscribe(() => {
      this.fetchData();
    });
  }
}
