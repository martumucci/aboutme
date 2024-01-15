import { Component } from '@angular/core';
import { LearnMoreComponent } from './learn-more/learn-more.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [LearnMoreComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  open: boolean = false;

  openModal() {
    this.open = true;
  }

  closeModal(value: boolean){
    this.open = value;
  }

}
