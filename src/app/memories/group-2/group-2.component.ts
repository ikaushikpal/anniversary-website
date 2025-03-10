import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-group-2',
  imports: [CommonModule, RouterLink],
  templateUrl: './group-2.component.html',
  styleUrl: './group-2.component.scss'
})
export class Group2Component {
  title: string = 'Another Asansol Meet'; // Title for the group
  images: string[] = [
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-2/2-0.jpg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-2/2-1.jpg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-2/2-2.JPG'
  ]; // Paths to the images
  text: string = `On August 17, 2024, we watched our first movie together Stree 2 at Sentram Mall. It was such a special day, filled with laughter and love. After the movie, we had a beautiful dinner together, making memories I’ll cherish forever.  

That day, you surprised me with a photo frame and a shirt—my first-ever gift from a girl. It meant so much to me. I was so caught up in the moment that I forgot to take your shirt from my bag. But the next day, I made sure to send it back to you, along with a cute teddy and the photo frame, because every little thing that connects us is precious. ❤️`; // Text content
}