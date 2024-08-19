import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-page',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './header-page.component.html',
})
export class HeaderPageComponent {
  @Input({ required: true }) title: string = "";
  @Input({ required: true }) description: string = "";
  @Input({ required: true }) btnTitle: string = "";
  @Input({ required: true }) pathname: string = "";
}
