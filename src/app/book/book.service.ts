import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {createRequestOption} from '../util/request-util';

const API_BOOK_URL = 'http://localhost:8080/book';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {
  }

  query(req?: any): Observable<any> {
    const options = createRequestOption(req);
    return this.http.get(API_BOOK_URL + '/getList', {params: options, observe: 'body'});
  }


  saveBook(bookName: string, bookId: string, bookAuthor: string, bookPublisher: string, bookTopic: string): Observable<any> {
    return this.http.post(API_BOOK_URL + '/add', {
      bookName, bookId, bookAuthor, bookPublisher, bookTopic
    }, httpOptions);
  }
  updateBook(id: string, bookName: string, bookId: string, bookAuthor: string, bookPublisher: string, bookTopic: string): Observable<any> {
    return this.http.put(API_BOOK_URL + '/update', {
      id, bookName, bookId, bookAuthor, bookPublisher, bookTopic
    }, httpOptions);
  }

  public getBookDetailById(model: any): Observable<any> {
    return this.http.get(API_BOOK_URL + '?bookId=' + model);
  }

  // @ts-ignore
  delete(ids: any[]): Observable<any> {
    return this.http.post<any>(API_BOOK_URL + '/delete', {ids} , httpOptions);
  }
}
