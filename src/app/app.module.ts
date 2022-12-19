import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BookComponent } from './book/book.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import {NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {BookNewComponent} from './book/book-new.component';
import {CheckoutBookComponent} from './checkout-book/checkout-book.component';
import {CheckoutBookUpdateComponent} from './checkout-book/checkout-book-update.component';
import {CheckoutBookNewComponent} from './checkout-book/checkout-book-new.component';
import {BookUpdateComponent} from './book/book-update.component';
import {CheckoutBookEditComponent} from './checkout-book/checkout-book-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BookComponent,
    BookNewComponent,
    CheckoutBookComponent,
    CheckoutBookUpdateComponent,
    CheckoutBookNewComponent,
    BookUpdateComponent,
    CheckoutBookEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbPaginationModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
