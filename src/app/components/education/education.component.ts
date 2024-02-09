import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgIf],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  hideTrainings: boolean = true;

  showTrainings() {
    this.hideTrainings = false;
  }
}
