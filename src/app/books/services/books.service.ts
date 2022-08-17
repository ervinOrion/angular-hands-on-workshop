import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/books.model';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  model = 'books';

  constructor(private http: HttpClient) {
  }

  all(): Observable<Book[]> {
    return this.http.get<Book[]>(this.getUrl());
  }

  find(id: number) {
    return this.http.get(this.getUrlWithID(id));
  }

  create(book: Book) {
    return this.http.post(this.getUrl(), book);
  }

  update(book: Book) {
    return this.http.put(this.getUrlWithID(book.id), book);
  }

  delete(id: number) {
    return this.http.delete(this.getUrlWithID(id));
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id: number) {
    return `${this.getUrl()}/${id}`;
  }
}
