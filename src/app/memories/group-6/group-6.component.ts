import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-group-6',
  imports: [CommonModule, RouterLink],
  templateUrl: './group-6.component.html',
  styleUrl: './group-6.component.scss'
})
export class Group6Component {
  title: string = 'After 99 Days 🥺'; // Title for the group
  images: string[] = [
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-6/5-1.jpg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-6/5-2.JPG',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-6/5-3.jpg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-6/5-4.jpg'
  ]; // Paths to the images
  text: string = `February 23rd—after 99 long days, we finally met again. These 99 days weren’t easy; they were filled with challenges, ups and downs, and moments that tested us. The road was tough, but in the end, we found our way back to each other—stronger, better, and even more in love.

We spent the day making new memories—watching Chavva, visiting a beautiful theme restaurant, and trying something new together: ramen. I gave you souvenirs from my past trip, and seeing your face light up with happiness made everything worth it.

As the day came to an end, we shared our thoughts, expressed our feelings, and with a warm goodbye, we parted ways. Even though the day ended, the love we shared only grew deeper. ❤️`
}
