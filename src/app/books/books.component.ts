import { Component, OnInit } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { Book } from './models/books.model';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books$: Observable<Book[]>;
  books: Book[] = [];
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
    const index = this.books.findIndex(item => item.id === book?.id);
    if (index > -1) {
      this.books[index] = book;
    } else {
      this.books.push(book);
    }

    this.bookService.update(book)
    .subscribe(() => {
      if (!this.bookService.useLocal) {
        return;
      }

      this.fetchCourses();
    });
  }

  fetchCourses() {
    this.books$ = this.bookService.all().pipe(
      map((result: any) => {
        this.books = result;
        return this.bookService.useLocal && !this.books.length ? from(this.books) : result;
      })
    );
  }

}
