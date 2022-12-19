import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {IBOOK} from '../model/book.model';

import {Router} from '@angular/router';
import {HttpResponse} from '@angular/common/http';
import {ServiceReponse} from '../response/service-reponse';
import {PageReponse} from '../response/page-reponse';
import {CheckoutBookService} from './checkout-book.service';
import {ICHECKOUTBOOK} from '../model/checkout-book.model';

@Component({
  selector: 'app-checkout-book',
  templateUrl: './checkout-book.component.html',
  styleUrls: ['./checkout-book.component.css']
})
export class CheckoutBookComponent implements OnInit {
  content?: string;
  previousPage: any;
  selectedRows = [];
  selectedRow = {};
  page = 1;
  totalItems: any;
  totalPage: any;
  itemsPerPage = 10;
  predicate = 'id';
  reverse: any;
  links: any;
  queryCount: any;
  keyWord = '';
  checkoutBook!: ICHECKOUTBOOK[] ;
  selectedItem!: ICHECKOUTBOOK | any;

  constructor(private checkoutBookService: CheckoutBookService,
              // private parseLinks: JhiParseLinks,
              // private jhiAlertService: JhiAlertService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadAll();

  }

  // tslint:disable-next-line:typedef
  addNew() {

    this.router.navigate(['/checkoutBook/new'], {
      queryParams: {
        // isFirstDeclaration: this.isFirstDeclaration,
        // additionTime: this.additionTime,
        // additionDate: this.additionDate ? this.additionDate.format(DATE_FORMAT) : '',
        // year: this.year,
        // declarationTerm,
        // fromDate: this.fromDate.format(DATE_FORMAT),
        // toDate: this.toDate.format(DATE_FORMAT)
      }
    });
  }

  // tslint:disable-next-line:typedef
  loadAllForSearch() {
    this.page = 1;
    this.loadAll();
  }
  // tslint:disable-next-line:typedef
  selectedItemPerPage() {
    this.loadAll();
  }

  // tslint:disable-next-line:typedef
  trackId(index: number, item: ICHECKOUTBOOK) {
    return item.id;
  }

  newArr(lenght: number): any[] {
    if (lenght > 0) {
      return new Array(lenght);
    } else {
      return new Array(0);
    }
  }

  // tslint:disable-next-line:typedef
  sort() {
    // const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
    const result = [(this.reverse ? '+' : '-') + this.predicate ];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }


  // tslint:disable-next-line:typedef
  loadAll() {
    this.checkoutBookService
      .query({
        page: this.page,
        limit: this.itemsPerPage,
        sort: this.sort(),
        keyWord: this.keyWord
      })
      .subscribe(res => {
        if (res && res.data && res.data.rows) {
          this.checkoutBook = res.data.rows;
          this.totalItems = res.data.count;
          this.totalPage = res.data.totalPage;
        }
      })
    //   .subscribe(
    //     (res: ServiceReponse<PageReponse<IBOOK[]>) => this.paginateBook(res.body, res.headers),
    //     ((res: ServiceReponse<PageReponse<IBOOK[]>)) => this.onError()
    //   )
    ;
  }


  // tslint:disable-next-line:typedef
  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.selectedRows = [];
      this.selectedRow = {};
      this.previousPage = page;
      this.transition();
    }
  }

  // tslint:disable-next-line:typedef
  transition() {
    this.router.navigate(['/tm-01-gtgt'], {
      queryParams: {
        page: this.page,
        limit: this.itemsPerPage,
        sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
      }
    });
    this.loadAll();
  }

  // tslint:disable-next-line:typedef
  checkSelect(book: ICHECKOUTBOOK) {
    // @ts-ignore
    return this.selectedRows.some(n => n.id === book.id);
  }

  // tslint:disable-next-line:typedef
  selectedRowFun(item: ICHECKOUTBOOK) {
    this.selectedItem = item;
  }

  // tslint:disable-next-line:typedef
  delete() {
    if (this.selectedItem && this.selectedItem.id) {
      // call api xoa;
      this.checkoutBookService.deleteCheckoutBook([this.selectedItem.id]).subscribe(res => {
        if (res.code === 200) {
          this.checkoutBook = this.checkoutBook?.filter(e => e.id !== this.selectedItem.id);
          this.selectedItem = null;
        } else {
          console.error(res.message);
        }
      });
      // this.book = this.book?.filter(e => e.id !== this.selectedItem.id);
      // this.selectedItem = null;
      // deleteFunc.subscribe(res =>{
      //   //  xoa ban ghi thanh cong thi clear bien selectedItem;
      //   this.selectedItem = null;
      //   // hien thi thong bao xoa thanh cong
      // },error =>{
      //   // hien thi thong bao xoa loi,
      // })
      //

    }
  }

  // tslint:disable-next-line:typedef variable-name
  doubleClickRow(any?: any){
    this.router.navigate(['/checkoutBook/edit/' + any.id]);
  }

}

export class CheckoutBook {
  // Id = 0;
  bookId = '';
  bookName = '';
  userName = '';
  userId = '';
  reserveBook = '';
}


