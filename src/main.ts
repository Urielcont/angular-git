import { Component, OnInit, OnDestroy } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- No hay partido -->
<div *ngIf="!isMatchDay" class="no-match-content">
  <h1 class="main-title">Hoy no hay fútbol 😞</h1>
  <p class="status-text">Relájate, entrena... ¡el partido viene pronto!</p>
  <p class="date-info">Hoy es <strong>{{ currentDate }}</strong></p>
</div>

<!-- Día de partido -->
<div *ngIf="isMatchDay" class="matchday-content">
  <h1 class="main-title">⚽ ¡Es día de partido! ⚽</h1>
  <img src="https://media.tenor.com/Qyls2Ogp3j8AAAAC/gol-futbol.gif"
       alt="Celebración de gol"
       class="match-gif"
       (error)="onImageError($event)" />
  <p class="status-text">Prepara tu jersey, es {{ currentDay }} de fútbol.</p>
</div>

  `,
  styles: [`
    .app-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #007f5f 0%, #2b9348 100%);
  background-size: 400% 400%;
  animation: fieldWave 10s ease infinite;
  padding: 1rem;
  color: white;
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
}

@keyframes fieldWave {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.main-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
}

.status-text {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

.date-info {
  font-size: 1.1rem;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.match-gif {
  width: 220px;
  height: auto;
  border-radius: 10px;
  margin: 2rem auto;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  animation: goalPulse 1s ease-in-out infinite alternate;
}

@keyframes goalPulse {
  0% { transform: scale(1); }
  100% { transform: scale(1.05); }
}

.matchday-content {
  background: rgba(0, 0, 0, 0.3);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(6px);
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.no-match-content {
  background: rgba(0, 0, 0, 0.25);
  padding: 2rem;
  border-radius: 20px;
  border: 2px dashed rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);
}

@media (max-width: 600px) {
  .match-gif {
    width: 160px;
  }
  .main-title {
    font-size: 2rem;
  }
}

  `]
})
export class App implements OnInit, OnDestroy {
  isMatchDay = false;
  currentDate = '';
  currentDay = '';
  private intervalId: any;

  ngOnInit() {
    this.checkMatchDay();
    this.intervalId = setInterval(() => {
      this.checkMatchDay();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private checkMatchDay() {
    const now = new Date();
    const day = now.getDay(); // domingo = 0, sábado = 6

    this.isMatchDay = day === 0 || day === 6;

    this.currentDate = now.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    this.currentDay = now.toLocaleDateString('es-ES', { weekday: 'long' });
  }

  onImageError(event: any) {
    event.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Soccer_ball_animated.svg/1024px-Soccer_ball_animated.svg.png';
  }
}


bootstrapApplication(App);