import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatButtonModule],
  templateUrl: './nav-menu.component.html',
})
export class NavMenuComponent {

}
