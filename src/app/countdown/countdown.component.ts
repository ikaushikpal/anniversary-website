import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  isUnlocked: boolean = false;
  showCountdown: boolean = true;

  private targetDate = new Date('March 11, 2025 00:00:00').getTime();
  private countdownInterval: any;
  private fastCountdownInterval: any;
  private fastCountdownComplete: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    const now = new Date().getTime();
    const distance = this.targetDate - now;
    
    if (distance <= 0) {
      this.showCountdown = false;
      this.isUnlocked = true;
    } else {
      // Initialize with visually appealing starting values
      this.days = 365;
      this.hours = 23;
      this.minutes = 59;
      this.seconds = 59;
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId) && !this.isUnlocked) {
      this.startCountdown();
    }
  }

  ngOnDestroy(): void {
    this.clearAllIntervals();
  }

  clearAllIntervals(): void {
    if (this.countdownInterval) clearInterval(this.countdownInterval);
    if (this.fastCountdownInterval) clearInterval(this.fastCountdownInterval);
  }

  startCountdown(): void {
    if (this.showCountdown) {
      // Start the fast countdown animation
      this.startFastCountdown();
      
      // Set a timeout to start the normal countdown after the fast one completes
      setTimeout(() => {
        this.startNormalCountdown();
      }, 3000); // Adjust this value based on how long you want the fast animation to run
    } else {
      this.startNormalCountdown();
    }
  }

  startFastCountdown(): void {
    const now = new Date().getTime();
    const distance = Math.max(0, this.targetDate - now);
    
    const targetDays = Math.floor(distance / (1000 * 60 * 60 * 24));
    const targetHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const targetMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const targetSeconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // How many steps to take for the animation
    const steps = 20;
    let currentStep = 0;
    
    this.fastCountdownInterval = setInterval(() => {
      currentStep++;
      
      // Calculate the progress (0 to 1)
      const progress = currentStep / steps;
      
      // Interpolate between the starting values and the target values
      this.days = Math.round(365 - (365 - targetDays) * progress);
      this.hours = Math.round(23 - (23 - targetHours) * progress);
      this.minutes = Math.round(59 - (59 - targetMinutes) * progress);
      this.seconds = Math.round(59 - (59 - targetSeconds) * progress);
      
      if (currentStep >= steps) {
        clearInterval(this.fastCountdownInterval);
        this.fastCountdownComplete = true;
        
        // Set exact values
        this.days = targetDays;
        this.hours = targetHours;
        this.minutes = targetMinutes;
        this.seconds = targetSeconds;
      }
    }, 150); // 100ms interval for fast animation
  }

  startNormalCountdown(): void {
    // Only start the normal countdown if the fast countdown is complete or not needed
    this.countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = Math.max(0, this.targetDate - now);

      if (distance <= 0) {
        clearInterval(this.countdownInterval);
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.isUnlocked = true;
      } else {
        // Update the countdown values
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      }
    }, 1000); // 1-second interval
  }
}