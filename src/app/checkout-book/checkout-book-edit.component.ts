import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
// import {ToastrService} from 'ngx-toastr';
import {CheckoutBookService} from './checkout-book.service';

@Component({
  selector: 'app-checkout-book-new',
  templateUrl: './checkout-book-edit.component.html',
  styleUrls: ['./checkout-book-edit.component.css']
})
export class CheckoutBookEditComponent implements OnInit {
  editCheckoutBookForm: checkoutBookForm = new checkoutBookForm();

  @ViewChild('employeeForm')
  employeeForm!: NgForm;

  isSubmitted = false;
  checkoutBookId: any;

  constructor(private route: ActivatedRoute, private router: Router,
              private checkoutBookService: CheckoutBookService) {
  }

  ngOnInit(): void {
    this.checkoutBookId = this.route.snapshot.params.checkoutBookId;
    this.getCheckoutBookDetailById();
  }

  // tslint:disable-next-line:typedef
  getCheckoutBookDetailById() {
    // @ts-ignore
    this.checkoutBookService.getCheckoutBookDetailById(this.checkoutBookId).subscribe((res: any) => {
        if (res != null && res.data != null) {
          const resultData = res.data;
          if (resultData) {
            this.editCheckoutBookForm.id = resultData.id;
            this.editCheckoutBookForm.bookId = resultData.bookId;
            this.editCheckoutBookForm.bookName = resultData.bookName;
            this.editCheckoutBookForm.userId = resultData.userId;
            this.editCheckoutBookForm.userName = resultData.userName;
          }
        }
      },
      (error: any) => {
      });
  }

  // tslint:disable-next-line:typedef
  EditEmployee(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.checkoutBookService.updateEmployee(this.editCheckoutBookForm).subscribe(async res => {
          if (res != null && res.data != null) {
            const resultData = res.data;
            if (resultData != null && res.code === 200) {
              // if (resultData != null && resultData.isSuccess) {
              // this.toastr.success(resultData.message);
              setTimeout(() => {
                this.router.navigate(['/checkoutBook']);
              }, 500);
              // }
            }
          }
        },
        async error => {
          // this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/Home']);
          }, 500);
        });
    }
  }
}

// tslint:disable-next-line:class-name
export class checkoutBookForm {
  id = 0;
  bookId = '';
  bookName = '';
  userName = '';
  userId = '';
  reserveBook = '';
}
