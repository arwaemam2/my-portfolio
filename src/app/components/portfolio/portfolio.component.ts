import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects = [
    { title: 'Project 1', description: 'Description for project 1', image: 'assets/project1.jpg', link: '#' },
    { title: 'Project 2', description: 'Description for project 2', image: 'assets/project2.jpg', link: '#' },
    { title: 'Project 3', description: 'Description for project 3', image: 'assets/project3.jpg', link: '#' }
  ];
}
