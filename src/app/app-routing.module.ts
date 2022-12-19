import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BookComponent } from './book/book.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {BookNewComponent} from './book/book-new.component';
import {CheckoutBookComponent} from './checkout-book/checkout-book.component';
import {CheckoutBookUpdateComponent} from './checkout-book/checkout-book-update.component';
import {CheckoutBookNewComponent} from './checkout-book/checkout-book-new.component';
import {BookUpdateComponent} from './book/book-update.component';
import {CheckoutBookEditComponent} from './checkout-book/checkout-book-edit.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'book', component: BookComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'book/new', component: BookNewComponent },
  { path: 'checkoutBook', component: CheckoutBookComponent },
  { path: 'checkoutBook/new', component: CheckoutBookUpdateComponent},
  { path: 'checkoutBook/:employeeId', component: CheckoutBookNewComponent },
  { path: 'checkoutBook/edit/:checkoutBookId', component: CheckoutBookEditComponent },
  { path: 'book/edit/:bookId', component: BookUpdateComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
