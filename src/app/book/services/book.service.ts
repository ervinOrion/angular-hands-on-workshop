import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get<Book[]>('http://localhost:3000/books');
  };

  update(book: Book) {
    return this.http.put(`http://localhost:3000/books/${book.id}`, book)
  }
}
