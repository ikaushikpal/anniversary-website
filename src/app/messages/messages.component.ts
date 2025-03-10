import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Message {
  id: number;
  text: string;
  sender: 'me' | 'her';
  timestamp: Date;
}

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  messages: Message[] = [
    {
      id: 1,
      text: "Do you remember our first date at Asansol?",
      sender: 'me',
      timestamp: new Date('2025-03-10T10:30:00')
    },
    {
      id: 2,
      text: "Yes! I was so nervous at first. We sat at the food court in Galaxy Mall for an hour, all my distress slowly faded away. Then, in that quiet moment, I rested my head on your shoulder, asked if you would ever let me go. Then you held me close and promised that you would never let me go ever.",
      sender: 'her',
      timestamp: new Date('2025-03-10T10:32:00')
    },
    {
      id: 3,
      text: "I'm so grateful for every moment we've shared. Happy Anniversary, my love!",
      sender: 'me',
      timestamp: new Date('2025-03-10T10:40:00')
    },
    {
      id: 4,
      text: "You make me happier than I ever thought possible. Here's to many more years together! ❤️",
      sender: 'her',
      timestamp: new Date('2025-03-10T10:41:00')
    }
  ];

  newMessage: string = 'I love you baby';
  isTyping: boolean = false;
  currentPage = 8; // Adjust as needed based on your pagination
  totalPages = 10; // Adjust as needed based on your total number of pages

  sendMessage() {
    if (this.newMessage.trim() === '') return;

    const newMessage: Message = {
      id: this.messages.length + 1,
      text: this.newMessage,
      sender: 'me',
      timestamp: new Date()
    };

    this.messages.push(newMessage);
    this.newMessage = '';
    this.isTyping = true;

    // Simulate a response from "her"
    setTimeout(() => {
      this.simulateResponse();
    }, 1000);

  }

  simulateResponse() {
    this.isTyping = true;
    const responseText = "That's so sweet! I love you too baby! ❤️";

    setTimeout(() => {
      const responseMessage: Message = {
        id: this.messages.length + 1,
        text: responseText,
        sender: 'her',
        timestamp: new Date()
      };

      this.messages.push(responseMessage);
      this.isTyping = true;
    }, 2000); // Simulate typing delay
  }
}