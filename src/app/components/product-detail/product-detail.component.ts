import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  products: Product[] = [];
  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {
    this.route.params.subscribe((params) => {
      this.productService.getProducts().subscribe((res) => {
        this.products = res;
        this.product = this.filterProduct(params['id']);
      });
    });
  }

  filterProduct(id: string): Product {
    return this.products.filter((product) => product.id === parseInt(id))[0];
  }

  ngOnInit(): void {}
}
