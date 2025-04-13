import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'] 
})
export class HeroComponent {
  name: string = 'ArwaEmam';
  age: number = 23;
  jobTitle: string = 'Full-Stack Developer';
}

