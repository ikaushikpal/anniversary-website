import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountdownComponent } from "./countdown/countdown.component";
import { AudioService } from './services/audio.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'anniversary-website';
  constructor(@Inject(PLATFORM_ID) private platformId: any, private audioService: AudioService) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const events = ['click', 'touchstart', 'keydown'];
      events.forEach(event => {
        document.addEventListener(event, () => {
          this.audioService.playMusic();
        }, { once: true }); // Ensures autoplay starts only once on user interaction
      });
    }
  }
}