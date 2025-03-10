import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-group-4',
  imports: [CommonModule, RouterLink],
  templateUrl: './group-4.component.html',
  styleUrl: './group-4.component.scss'
})
export class Group4Component {
  title: string = 'Your Birthday Celebration 🎂'; // Title for the group
  images: string[] = [
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-4/4-1.PNG',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-4/4-2.jpg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-4/4-3.jpg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-4/4-4.jpg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-4/4-5.jpg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-4/4-6.jpg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-4/4-7.jpg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-4/4-8.jpg',
  ]; // Paths to the images
  text: string = `November 16th—a day we celebrated your birthday, even though it was six days early. I’m sorry I couldn’t make it happen on November 10th, but I wanted to make sure we still had a beautiful celebration together.

You cut the cake, and I brought candles shaped as "10101," symbolizing 21—just like the special age you turned. I gifted you a lovely astronaut light, something as unique and radiant as you. In that moment, as we held each other, emotions took over, and we felt the depth of our bond.

The night was magical, with a beautiful dinner where you looked absolutely stunning. The next day, we visited Mithon Dam, where we enjoyed a peaceful boat ride, clicked endless pictures, laughed together, and created memories that will stay with us forever. Every second with you felt alive, and I wouldn't trade it for anything. ❤️`;
}