import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from './service/products.service';
import { Subscription, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {

  constructor(private productService: ProductsService) { }
  
  subscription$!: Subscription;

  //cartCount = 0;
  cartCount$ = this.productService.cartCountSubject$
    .pipe(map(val => val * val));

  ngOnInit(): void {
    // this.productService.cartCountSubject$.subscribe(count => this.cartCount = count);
  }

  ngOnDestroy(): void {
    // this.subscription$.unsubscribe();
  }

  getCartCount() {
    //this.cartCount = this.productService.cartCount;
    // this.productService.cartCountSubject$.subscribe(count => this.cartCount = count);
  }

  title = 'Glitter Store'; 

  //Class-Scope Variable
  primaryTheme = true;

  themeClass = {
    'bg-purple':this.primaryTheme,//true
    'bg-maroon':!this.primaryTheme//false
  } 

  toggleTheme(){
    //Local-Scope Variable 
    //let primaryTheme = false;
    this.primaryTheme = !this.primaryTheme;//false
    this.themeClass = {
      'bg-purple':this.primaryTheme,//false
      'bg-maroon':!this.primaryTheme//true
    }
  }

  mouseMove(){
    console.log('mouse over the button');
  }

  a = 10;

  example1(){
    //let a = 10;
    console.log(this.a);
  }

  example2(){
    console.log(this.a);
  }
}
