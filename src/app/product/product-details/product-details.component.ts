import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { Product } from '../../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ps:ProductsService, private router:Router) { }
  
  id!: number;
  product!: Product;
  productCount!: number;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      //console.log(params.get('id'));
      this.id = Number(params.get('id'));
      this.ps.getProductById(this.id).subscribe(product=> {
        //console.log(product);
        this.product = product;
      })
    })
    this.ps.getProducts().subscribe(products => {
      this.productCount = products.length;
    })
  }

  goBack(): void {
    this.router.navigate(['/products']);
  };

  goPrevious(): void {
    this.id--;
    if (this.id < 1) {
      this.id = this.productCount;
    }
    this.router.navigate(['/products', this.id]);
  };

  goNext(): void {
    this.id++;
    if (this.id > this.productCount) {
      this.id = 1;
    }
    this.router.navigate(['/products', this.id]);
  }

}
