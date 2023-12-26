import { Component } from '@angular/core';
import { NavItem } from '../../interfaces/nav-item';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-nav',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './left-nav.component.html',
  styleUrl: './left-nav.component.scss'
})
export class LeftNavComponent {

  navItems: NavItem[] = [
    { text: 'HOME', link: 'home' },
    { text: 'EXPERIENCE', link: 'experience' },
    { text: 'SKILLS', link: 'skills' },
    { text: 'EDUCATION', link: 'education' },
    { text: 'ABOUT', link: 'about' },
    { text: 'CONTACT', link: 'contact' },
  ]
}
