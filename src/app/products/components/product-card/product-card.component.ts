import { Component, Input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';


interface Product {
  name: string,
  description: string,
  price: number,
  image: string
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ MatRippleModule ],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  
  @Input({ required: true }) 
  product!: Product;


}
