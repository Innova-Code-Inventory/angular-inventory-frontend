import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ MatRippleModule ],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {

}
