import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-group-0',
  imports: [CommonModule, RouterLink],
  templateUrl: './group-0.component.html',
  styleUrl: './group-0.component.scss'
})
export class Group0Component {
  title: string = 'First Screenshot of us ❤️'; // Title for the group
  image: string = 'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/images/group-0/0-0.JPG'; // Path to the image
  text: string = "This is where the magic began—a journey filled with love and unforgettable moments. This website is a tribute to our love story. ❤️"; // Text content
}
