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

  page = 1;
  count = 0;
  pageSize = 5;
  

  constructor(private bookshelfservice : BookshelfService) { }

  ngOnInit(): void {
    this.retrievebooks();
  }
  getRequestParams(searchTitle, page, pageSize) {
    
    let params = {};

    if (searchTitle) {
      params[`bookname`] = searchTitle;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  retrievebooks() {
    const params = this.getRequestParams(this.bookname, this.page, this.pageSize);

    this.bookshelfservice.showAll(params)
      .subscribe(
        response => {
          const { books, totalItems } = response;
          this.books = books;
          this.count = totalItems;
          console.log(response);
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

  handlePageChange(event) {
    this.page = event;
    this.retrievebooks();
  }

}
