import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';

import {Injectable, NgModule} from '@angular/core';
import {CheckoutBookUpdateComponent} from './checkout-book-update.component';


const routes: Routes = [
  { path: 'new', component: CheckoutBookUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
