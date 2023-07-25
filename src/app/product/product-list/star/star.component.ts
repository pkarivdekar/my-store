import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges { 

  @Input()
  rating!:number; 
  //! is used when you don't want to initialize the value of the variable
  //rating variable is getting the value from parent component, product-list

  starWidth = 16 * this.rating;

  //this hook method will be called of any change in the input property
  ngOnChanges(changes: SimpleChanges): void {
    // console.log("on changes")
    this.starWidth = 16 * this.rating;
  }
}
