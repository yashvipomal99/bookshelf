import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  review = {
    rating : '',
    description : ''
  };
  submitted = false;

  constructor(private reviewservice : ReviewService) { }

  ngOnInit(): void {
  }

  savereview() {
    const data = {
      rating : this.review.rating,
      description : this.review.description
    };

    this.reviewservice.create(data)
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
