import { Component, OnInit } from '@angular/core';
import { BookshelfService } from 'src/app/services/bookshelf.service'

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {
  book = {
    bookname : '',
    authorname : '',
    publicationname : '',
    publicationdate :'',
    synopsis :'',
    isbn : '',
    avgreview : '',
    totalreviews : ''
  };
  submitted = false;

  constructor(private bookshelfservice : BookshelfService) { }


  ngOnInit(): void {
  }

  savebook() {
    const data = {
      bookname : this.book.bookname,
      authorname : this.book.authorname,
      publicationname : this.book.publicationname,
      publicationdate : this.book.publicationdate,
      synopsis : this.book.synopsis,
      isbn : this.book.isbn,
      avgreview : this.book.avgreview,
      totalreviews : this.book.totalreviews
    };

    this.bookshelfservice.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

}
