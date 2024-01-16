import { Component } from '@angular/core';
import { LeftNavComponent } from '../left-nav/left-nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LeftNavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
