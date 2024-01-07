import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  host: { class: 'host-class' },
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: string[] = ['C#', '.NET Core', 'Angular', 'SQL', 'Typescript', 'Javascript', 'JQuery', 'GIT'];
}
