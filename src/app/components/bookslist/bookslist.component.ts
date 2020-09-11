import { Component, OnInit } from '@angular/core';
import { BookshelfService } from 'src/app/services/bookshelf.service'

@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.scss']
})
export class BookslistComponent implements OnInit {
  books : any;
  currentbook = null;
  currentIndex = -1;
  bookname : '';

  constructor(private bookshelfservice : BookshelfService) { }

  ngOnInit(): void {
    this.retrievebooks();
  }

  retrievebooks() {
    this.bookshelfservice.getAll()
      .subscribe(
        data => {
          this.books = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrievebooks();
    this.currentbook = null;
    this.currentIndex = -1;
  }

  setActivebook(book, index) {
    this.currentbook = book;
    this.currentIndex = index;
  }

  searchbook() {
    this.bookshelfservice.findBybookname(this.bookname)
      .subscribe(
        data => {
          this.books = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
