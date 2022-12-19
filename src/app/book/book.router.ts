import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';

import {Injectable, NgModule} from '@angular/core';
import {BOOK, IBOOK} from '../model/book.model';

import {BookNewComponent} from './book-new.component';


const routes: Routes = [
  { path: 'new', component: BookNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
