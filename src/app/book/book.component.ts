import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  bookForm = new FormGroup({
    title: new FormControl<string>(''),
    author: new FormControl<string>(''),
    favorite: new FormControl<boolean>(false),
    percentComplete: new FormControl<number>(0),
  });




  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.books$ = this._bookService.all();
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

  saveData() {
    const updatedData: Book = {...this.selectedBook, ...this.bookForm.value};
    this._bookService.update(updatedData)
    .pipe(take(1))
    .subscribe(() => {
      this.fetchData();
    });
  }
}
