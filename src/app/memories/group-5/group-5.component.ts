import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-group-5',
  imports: [CommonModule, RouterLink],
  templateUrl: './group-5.component.html',
  styleUrl: './group-5.component.scss'
})
export class Group5Component {
  title: string = 'Our Valentine’s Week 💕💕'; // Title for the group
  images: string[] = [
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-5/0.JPG',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-5/2.JPG',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-5/3.PNG',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-5/1.jpg',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-5/4.JPG',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-5/6.PNG',
    'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-5/5.jpg',
  ]; // Paths to the images
  text: string = `This was our Valentine’s Week—though virtual, we made it as special as we could. We exchanged gifts for Teddy Day and Chocolate Day, sharing little moments of love despite the distance. We even unwrapped and ate chocolates together over a video call, making it feel like we were right there with each other.

On February 14th, we took it a step further—I ordered biryani for you, and you did the same for me. We sat on a video call, enjoying our meals together, laughing, smiling, and cherishing every second.

Even miles apart, we lived Valentine’s Week together, proving that love isn’t about distance—it’s about the moments we create. ❤️`
}
