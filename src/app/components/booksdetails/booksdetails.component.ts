import { Component, OnInit } from '@angular/core';
import { BookshelfService } from 'src/app/services/bookshelf.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booksdetails',
  templateUrl: './booksdetails.component.html',
  styleUrls: ['./booksdetails.component.scss']
})
export class BooksdetailsComponent implements OnInit {
  currentbook = null;
  message = '';

  constructor(private bookshelfservice : BookshelfService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getbook(this.route.snapshot.paramMap.get('id'));
  }
  getbook(id) {
    this.bookshelfservice.get(id)
      .subscribe(
        data => {
          this.currentbook = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatebook() {
    this.bookshelfservice.update(this.currentbook.id, this.currentbook)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Book was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deletebook() {
    this.bookshelfservice.delete(this.currentbook.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/books']);
        },
        error => {
          console.log(error);
        });
  }
}
