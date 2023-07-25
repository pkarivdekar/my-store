import { Injectable } from '@angular/core';
import { Product } from '../product';
import { BehaviorSubject, Observable, Subject, Subscription, catchError, delay, filter, from, interval, map, of, range, throwError, } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  

  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<Product[]> {
    console.log("getProducts called");
    return this.http.get<Product[]>("http://localhost:3000/product")
      .pipe(catchError(this.handleError));
  }

  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>("http://localhost:3000/products/" + id);
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = "Status Code: " + error.status + "Message: " + error.message
    console.log(errorMessage);
    return throwError(() => errorMessage);
  }

  private cartCount = 0;

  cartCountSubject$ = new BehaviorSubject<number>(0);

  //observable
  // values$ = of(1, 2, 3, 4, 5, 'hello', true, [45, 45, 45]);
  // values$ = range(1, 10);

  color = ["red", "blue", "yellow", "green"];
  values$ = from(this.color);

  //custom observable
  myObservable$ = new Observable(
    observer => {
      observer.next(10);
      throw new Error('Some error occured');
      observer.next(20);
      observer.complete(); //observable will stop giving the values to 
      observer.next(30);
    }
  );
  product: any;

  myNumber$ = of(1, 2, 4, 6, 7, 3, 8, 5);
  
  myInterval$ = interval(3000);

  subscription$!: Subscription;

  mySubject$ = new Subject<number>();

  //constructor() {
    // console.log(this.  values$);
    // this.values$.subscribe(val => console.log("Val : " + val));
    // console.log(this.myObservable$);
    // this.myObservable$.subscribe(val => console.log("Sub A:" + val));
    // this.myObservable$.subscribe(val => console.log("Sub B:" + val));

    // this.myObservable$.subscribe({
    //   next: val => console.log("Next:" + val),
    //   complete: () => console.log('Observable Complete'),
    //   error: err => console.log("After Subscription ->" + err)
    // });

    // this.myNumber$.pipe(map(val => val * val))
    //   .subscribe(val => console.log(val));

    // this.myNumber$.pipe(filter(val => val % 2 == 0))
    //   .subscribe(val => console.log(val));
    
    // this.myNumber$.pipe(filter(val => val>5))
    //   .subscribe(val => console.log(val));
    
    // this.myNumber$.pipe(filter(val => val<5))
    //   .subscribe(val => console.log(val));
    
    // this.myNumber$.pipe(filter(val => val % 2 != 0))
    //   .subscribe(val => console.log(val));
    
    // this.myNumber$.pipe(filter(val => val % 2 != 0),
    //   map(val => val * val),
    // delay(3000))
    //   .subscribe(val => console.log(val));
    // this.subscription$ = this.myInterval$.subscribe(val => console.log('A -> ' + val));
    // this.myInterval$.subscribe(val => console.log('B -> ' + val));

    // setTimeout(() => {
    //   this.subscription$.unsubscribe();
    // }, 10000);

  //   this.mySubject$.next(1);
  //   this.mySubject$.subscribe(val => console.log('A ' + val));
  //   this.mySubject$.next(2);
  //   this.mySubject$.subscribe(val => console.log('B ' + val));
  //   this.mySubject$.next(3);
  // }

  increment(): void {
    //this.sample();
    //console.log('increment function called');
    this.cartCount++; //increment the cartCount by 1
    this.cartCountSubject$.next(this.cartCount);
  }

  sample(): void {
    console.log('simple function called');
  }

// products:Product[] = [
//   {
//       id:1,
//       name:"One plus nord",
//       price: 28000.75876,
//       image: "/assets/oneplusnord.jpg",
//       code:"M-001",
//       rating: 3.5,
//       publishedDate: "Mon Jun 19 2023 11:35:22 GMT+0530 (India Standard Time)",
//       description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tenetur explicabo id rem modi corporis reiciendis architecto. Saepe ad itaque quam voluptate optio sapiente eos qui, alias deserunt! Quis, similique."
//     },
//     {
//       id:2,
//       name:"IPhone 13",
//       price: 120000.487584,
//       code:"M-002",
//       rating:4,
//       publishedDate: "Mon Jun 19 2023 11:35:22 GMT+0530 (India Standard Time)",
//       image: "/assets/iphone13.jpg"
//     },
//     {
//       id:3,
//       name:"LG TV",
//       price: 40000.45,
//       image: "/assets/lgtv.jpg",
//       code:"T-001",
//       rating:5,
//       publishedDate: "Mon Jun 19 2023 11:35:22 GMT+0530 (India Standard Time)",
//       description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tenetur explicabo id rem modi corporis reiciendis architecto. Saepe ad itaque quam voluptate optio sapiente eos qui, alias deserunt! Quis, similique."
//     },
//     {
//       id:4,
//       name:"Samsung Washing Machine",
//       price: 27000.4,
//       code:"W-001",
//       rating:3,
//       publishedDate: "Mon Jun 19 2023 11:35:22 GMT+0530 (India Standard Time)",
//       image: "/assets/samsungwashingmachine.jpg"
//     },
//     {
//       id:5,
//       name:"Apple Watch",
//       price: 60000.3646,
//       image: "/assets/applewatch.jpg",
//       code:"WT-001",
//       rating:4.5,
//       publishedDate: "Mon Jun 19 2023 11:35:22 GMT+0530 (India Standard Time)",
//       description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tenetur explicabo id rem modi corporis reiciendis architecto. Saepe ad itaque quam voluptate optio sapiente eos qui, alias deserunt! Quis, similique."
//     },
//     {
//       id:6,
//       name:"Samsung Galaxy S22",
//       price: 108000.3454,
//       image: "/assets/samsunggalaxys22.jpg",
//       code:"M-003",
//       rating:3,
//       publishedDate: "Mon Jun 19 2023 11:35:22 GMT+0530 (India Standard Time)",
//       description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tenetur explicabo id rem modi corporis reiciendis architecto. Saepe ad itaque quam voluptate optio sapiente eos qui, alias deserunt! Quis, similique."
//     }
// ]
  
}



