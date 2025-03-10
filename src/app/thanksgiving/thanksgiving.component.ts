import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanksgiving',
  imports: [],
  templateUrl: './thanksgiving.component.html',
  styleUrl: './thanksgiving.component.scss'
})
export class ThanksgivingComponent {
  constructor(private router: Router) {}

  // Function to navigate back to the home page
  replay() {
    this.router.navigate(['/']);
  }
}