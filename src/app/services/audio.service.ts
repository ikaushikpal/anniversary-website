import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audio: HTMLAudioElement | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.audio = new Audio();
      this.audio.src = 'https://gublu-gubla-anniversary.s3.ap-south-1.amazonaws.com/background.mp3';
      this.audio.load();
      this.audio.loop = true;
    }
  }

  playMusic() {
    if (this.audio && this.audio.paused) {
      this.audio.play().catch(error => console.error('Playback failed', error));
    }
  }

  pauseMusic() {
    if (this.audio) {
      this.audio.pause();
    }
  }

  toggleMusic() {
    if (this.audio) {
      this.audio.paused ? this.playMusic() : this.pauseMusic();
    }
  }
}
