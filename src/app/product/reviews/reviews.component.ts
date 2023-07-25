
import { Component } from '@angular/core';
import { Review } from './review';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviewForm = new Review();

  submitForm(): void {
    console.log(this.reviewForm);
  }

}