import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-group3',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './group-3.component.html',
  styleUrls: ['./group-3.component.scss']
})
export class Group3Component {
  title: string = 'Our First Durga puja Pandal Hpping'; // Title for the group
  images: string[] = [
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-3/3-0.jpg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-3/3-1.jpg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-3/3-2.jpg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-3/3-3.jpg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-3/3-4.jpg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-3/3-5.jpg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-3/3-6.jpg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-3/3-7.jpg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-3/3-8.jpg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-3/3-9.jpg'
  ]; // Paths to the images
  text: string = `October 9th—the magic of Durga Puja was in the air, and we set out together for an unforgettable night of pandal hopping at VDO. We explored countless beautifully decorated pandals, soaking in the festive spirit and the joy of being together.

We tried our best to convince you to wear a saree, but even without it, you looked absolutely stunning. Dressed in your beautiful outfit and the kurta you gifted me, we turned heads—our effortless, comfy look even caught your attention as people couldn’t help but stare.

That night was perfect. We clicked pictures, shared delicious food, and rode together through the bustling streets. Every moment felt like a dream, and I know I will never forget this beautiful celebration with you. ❤️`;
}