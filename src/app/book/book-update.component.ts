import {Component, OnInit} from '@angular/core';
import {BookService} from './book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-board-user-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  form: any = {
    id: null, bookName: null, bookId: null, bookAuthor: null, bookPublisher: null, bookTopic: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  bookId: any;

  constructor(private bookService: BookService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params.bookId;
    this.getBookDetailById();
  }

  // tslint:disable-next-line:typedef
  getBookDetailById() {
    this.bookService.getBookDetailById(this.bookId).subscribe((res: any) => {

        if (res != null && res.data != null) {
          const resultData = res.data;
          if (resultData) {
            this.form.id = resultData.id;
            this.form.bookId = resultData.bookId;
            this.form.bookName = resultData.bookName;
            this.form.bookAuthor = resultData.bookAuthor;
            this.form.bookPublisher = resultData.bookPublisher;
            this.form.bookTopic = resultData.bookTopic;
          }

          if (res.code !== 200) {
            this.isSignUpFailed = true;
            this.isSuccessful = false;
          }
        }
      },
      (error: any) => {
      });
  }

  saveBook(): void {
    const {id, bookName, bookId, bookAuthor, bookPublisher, bookTopic} = this.form;

    this.bookService.updateBook(id, bookName, bookId, bookAuthor, bookPublisher, bookTopic).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
