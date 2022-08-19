import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from '../models/books.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

bookForm = new FormGroup({
  title: new FormControl<string>(''),
  author: new FormControl<string>(''),
  favorite: new FormControl<boolean>(false),
  percentComplete: new FormControl<number>(0)
  });

currentBook: Partial<Book> = null;

  @Input() set book(value: Book) {
    if (!value) {
      return;
    };

    this.setFormData(value);
    this.currentBook = {...value};
  };

  @Output() save = new EventEmitter<Book>;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.bookForm.value);
  }

  resetData() {
    this.setFormData(this.currentBook);

  }

  addNew() {
    const value: Partial<Book> = {
      id: + new Date(),
      title: '',
      author: '',
      favorite: false,
      percentComplete: 0
    }

    this.setFormData(value);
    this.currentBook = {...value};
  }

  saveData() {
    this.save.emit({...this.currentBook, ...this.bookForm.value});
  }


  setFormData(value: any) {
    this.bookForm.setValue({
      title: value.title,
      author: value.author,
      favorite: value.favorite,
      percentComplete: value.percentComplete
    });
  }


}
