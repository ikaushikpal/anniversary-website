import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-group-1',
  imports: [CommonModule, RouterModule],
  templateUrl: './group-1.component.html',
  styleUrl: './group-1.component.scss'
})
export class Group1Component {
  title: string = 'Our First Meet'; // Title for the group
  images: string[] = [
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-1/1-0.jpg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-1/1-1.jpg'
  ]; // Paths to the images
  text: string = `Our first meeting was in Asansol on April 22, 2024—a day that became the beginning of something beautiful. We clicked our first selfie together, capturing a moment that would stay with us forever.

At first, you were a little uncomfortable, but as we sat at the food court in Galaxy Mall for an hour, all your distress slowly faded away. Then, in that quiet moment, you rested your head on my shoulder and, with teary eyes, asked if I would ever let you go.

Right then and there, I held you close and promised—I would never let you go. I love you, baby. ❤️`; // Text content
}
