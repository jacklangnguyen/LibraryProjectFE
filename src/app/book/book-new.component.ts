import { Component, OnInit } from '@angular/core';
import {BookService} from './book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-board-user-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {
  form: any = {
    bookName: null, bookId: null, bookAuthor: null, bookPublisher: null, bookTopic: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  saveBook(): void {
    const { bookName, bookId, bookAuthor, bookPublisher, bookTopic } = this.form;

    this.bookService.saveBook(bookName, bookId, bookAuthor, bookPublisher, bookTopic).subscribe(
      data => {
        if (data.code === 200) {
          setTimeout(() => {
            this.router.navigate(['/book']);
          }, 500);
          // console.log(data);
          // this.isSuccessful = true;
          // this.isSignUpFailed = false;
        } else {
          this.errorMessage = data.code;
          this.isSignUpFailed = true;
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
