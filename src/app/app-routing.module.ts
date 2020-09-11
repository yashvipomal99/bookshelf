import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './components/addbook/addbook.component';
import { BookslistComponent } from './components/bookslist/bookslist.component';
import { BooksdetailsComponent } from './components/booksdetails/booksdetails.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path : '', redirectTo: 'login', pathMatch: 'full'},
  { path : 'books', component : BookslistComponent },
  { path : 'add', component : AddbookComponent },
  { path : 'books/:id', component : BooksdetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
