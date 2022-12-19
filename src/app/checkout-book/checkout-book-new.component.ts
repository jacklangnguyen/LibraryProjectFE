import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
// import {ToastrService} from 'ngx-toastr';
import {CheckoutBookService} from './checkout-book.service';

@Component({
  selector: 'app-checkout-book-new',
  templateUrl: './checkout-book-new.component.html',
  styleUrls: ['./checkout-book-new.component.css']
})
export class CheckoutBookNewComponent implements OnInit {
  editEmployeeForm: employeeForm = new employeeForm();

  @ViewChild('employeeForm')
  employeeForm!: NgForm;

  isSubmitted = false;
  employeeId: any;

  constructor(private route: ActivatedRoute, private router: Router,
              private checkoutBookService: CheckoutBookService) {
  }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params.employeeId;
    this.getBookDetailById();
  }

  // tslint:disable-next-line:typedef
  getBookDetailById() {
    this.checkoutBookService.getBookDetailById(this.employeeId).subscribe((res: any) => {
        if (res != null && res.data != null) {
          const resultData = res.data;
          if (resultData) {
            // this.editEmployeeForm.Id = resultData.id;
            this.editEmployeeForm.bookId = resultData.bookId;
            this.editEmployeeForm.bookName = resultData.bookName;
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
      this.checkoutBookService.saveEmployee(this.editEmployeeForm).subscribe(async res => {
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
export class employeeForm {
  // Id = 0;
  bookId = '';
  bookName = '';
  userName = '';
  userId = '';
  reserveBook = '';
}
