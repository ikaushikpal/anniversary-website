import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-group-7',
  imports: [CommonModule, RouterLink],
  templateUrl: './group-7.component.html',
  styleUrl: './group-7.component.scss'
})
export class Group7Component {
  title: string = 'Water Park Visit 🏝️🍹⛱️🌞 🌊'; // Title for the group
  images: string[] = [
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-7/6-5.jpeg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-7/6-2.jpeg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-7/6-3.jpeg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-7/6-4.jpeg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-7/6-1.jpeg',
  ]; // Paths to the images
  text: string = `March 8th—we finally made it to Water Park Durgapur One after so many plans, cancellations, and replanning. But in the end, we made it happen, and that’s all that mattered.

To our surprise, the entire water park was empty—literally no one else was there. But since you had traveled all the way just to be here, we decided to make the most of it. And we did! The boat ride was my absolute favorite. We played, we laughed, we hugged, and we created memories that felt like a dream.

This time, I made sure to take care of you completely—I fed you breakfast, lunch, and dinner with my own hands. It wasn’t just a day out; it was a day of pure love and quality time—one I’ll never forget. ❤️`;
}
