import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './models/books.model';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books$: Observable<Book[]>;
  selectedBook: Book;

  constructor(private bookService: BooksService) {
    this.fetchCourses();
  }

  ngOnInit(): void {
  }

  onSelection(book: Book) {
    this.selectedBook = book;
  }

  onSave(book: Book) {
    this.bookService.update(book)
    .subscribe(() => this.fetchCourses());
  }

  fetchCourses() {
    this.books$ = this.bookService.all();
  }

}
