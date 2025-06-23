import { Component, OnInit, OnDestroy } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="app-container" [class.august-mode]="isAugust">
      <div class="content-wrapper">
        
        <!-- Modo No Agosto -->
        <div *ngIf="!isAugust" class="no-august-content">
          <div class="pulse-circle"></div>
          <h1 class="main-title">Ya es agosto</h1>
          <div class="status-container">
            <div class="status-icon">❌</div>
            <p class="status-text">NO ES AGOSTO XD</p>
          </div>
          <div class="date-info">
            <p>Hoy es: <strong>{{ currentDate }}</strong></p>
            <p>Mes actual: <strong>{{ currentMonth }}</strong></p>
          </div>
          <div class="checking-indicator">
            <div class="spinner"></div>
            <p>Comprobando cada segundo...</p>
          </div>
        </div>

        <!-- Modo Agosto -->
        <div *ngIf="isAugust" class="august-content">
          <div class="celebration-header">
            <h1 class="august-title">¡¡¡YA ES AGOSTO!!!</h1>
            <div class="confetti"></div>
          </div>
          
          <div class="nyan-container">
            <div class="rainbow-trail"></div>
            <img 
              src="https://media.tenor.com/images/b2a8da5236dcee62b940ce5b6bf7c6ed/tenor.gif" 
              alt="Nyan Cat" 
              class="nyan-cat"
              (error)="onImageError($event)"
            />
          </div>
          
          <div class="august-info">
            <p class="success-text">🎉 ¡Por fin llegó agosto! 🎉</p>
            <p class="date-text">{{ currentDate }}</p>
          </div>
          
          <div class="party-elements">
            <div class="star star-1">⭐</div>
            <div class="star star-2">🌟</div>
            <div class="star star-3">✨</div>
            <div class="star star-4">💫</div>
          </div>
        </div>
        
      </div>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      background-size: 400% 400%;
      animation: gradientShift 8s ease infinite;
      padding: 1rem;
      overflow: hidden;
      position: relative;
    }

    .app-container.august-mode {
      background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 25%, #fecfef 50%, #ff9a9e 75%, #fecfef 100%);
      background-size: 400% 400%;
      animation: rainbowGradient 3s ease infinite;
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    @keyframes rainbowGradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .content-wrapper {
      text-align: center;
      position: relative;
      z-index: 10;
      max-width: 600px;
      width: 100%;
    }

    /* Modo No Agosto */
    .no-august-content {
      color: white;
      position: relative;
    }

    .pulse-circle {
      position: absolute;
      top: -50px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 100px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0% { transform: translateX(-50%) scale(1); opacity: 1; }
      100% { transform: translateX(-50%) scale(2); opacity: 0; }
    }

    .main-title {
      font-size: clamp(2.5rem, 8vw, 4rem);
      font-weight: 800;
      margin: 2rem 0;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      background: linear-gradient(45deg, #ffffff, #e0e0e0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .status-container {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      padding: 2rem;
      margin: 2rem 0;
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: transform 0.3s ease;
    }

    .status-container:hover {
      transform: translateY(-5px);
    }

    .status-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      animation: bounce 2s infinite;
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-10px); }
      60% { transform: translateY(-5px); }
    }

    .status-text {
      font-size: clamp(1.5rem, 5vw, 2.5rem);
      font-weight: bold;
      margin: 0;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }

    .date-info {
      margin: 2rem 0;
      font-size: 1.1rem;
      line-height: 1.6;
    }

    .date-info strong {
      color: #ffeb3b;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }

    .checking-indicator {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-top: 2rem;
      font-size: 0.9rem;
      opacity: 0.8;
    }

    .spinner {
      width: 20px;
      height: 20px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top: 2px solid white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    /* Modo Agosto */
    .august-content {
      color: white;
      position: relative;
    }

    .celebration-header {
      position: relative;
      margin-bottom: 3rem;
    }

    .august-title {
      font-size: clamp(2rem, 6vw, 3.5rem);
      font-weight: 900;
      text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
      animation: celebrationPulse 0.8s ease-in-out infinite alternate;
      background: linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      background-size: 400% 400%;
      animation: textRainbow 2s ease infinite, celebrationPulse 0.8s ease-in-out infinite alternate;
    }

    @keyframes celebrationPulse {
      0% { transform: scale(1); }
      100% { transform: scale(1.05); }
    }

    @keyframes textRainbow {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .confetti {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 100px;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="10" cy="10" r="2" fill="%23ff6b6b"/><circle cx="30" cy="20" r="2" fill="%2348dbfb"/><circle cx="50" cy="15" r="2" fill="%23feca57"/><circle cx="70" cy="25" r="2" fill="%23ff9ff3"/><circle cx="90" cy="10" r="2" fill="%2355a3ff"/></svg>') repeat;
      animation: confettiFall 3s linear infinite;
      pointer-events: none;
    }

    @keyframes confettiFall {
      0% { transform: translateY(-100px) rotate(0deg); }
      100% { transform: translateY(100px) rotate(360deg); }
    }

    .nyan-container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 3rem 0;
      min-height: 200px;
    }

    .rainbow-trail {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 60%;
      height: 60px;
      background: linear-gradient(90deg, 
        #ff0000 0%, #ff0000 14.28%,
        #ff8c00 14.28%, #ff8c00 28.56%,
        #ffd700 28.56%, #ffd700 42.84%,
        #00ff00 42.84%, #00ff00 57.12%,
        #0080ff 57.12%, #0080ff 71.4%,
        #4b0082 71.4%, #4b0082 85.68%,
        #9400d3 85.68%, #9400d3 100%);
      border-radius: 30px;
      animation: rainbowPulse 1s ease-in-out infinite alternate;
      z-index: 1;
    }

    @keyframes rainbowPulse {
      0% { opacity: 0.7; transform: translateY(-50%) scaleY(1); }
      100% { opacity: 1; transform: translateY(-50%) scaleY(1.2); }
    }

    .nyan-cat {
      width: 120px;
      height: auto;
      position: relative;
      z-index: 2;
      animation: nyanFloat 2s ease-in-out infinite;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    @keyframes nyanFloat {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    .august-info {
      margin: 2rem 0;
    }

    .success-text {
      font-size: clamp(1.2rem, 4vw, 1.8rem);
      font-weight: bold;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .date-text {
      font-size: 1.1rem;
      opacity: 0.9;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }

    .party-elements {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
    }

    .star {
      position: absolute;
      font-size: 2rem;
      animation: starTwinkle 2s ease-in-out infinite;
    }

    .star-1 {
      top: 10%;
      left: 10%;
      animation-delay: 0s;
    }

    .star-2 {
      top: 20%;
      right: 15%;
      animation-delay: 0.5s;
    }

    .star-3 {
      bottom: 30%;
      left: 20%;
      animation-delay: 1s;
    }

    .star-4 {
      bottom: 20%;
      right: 10%;
      animation-delay: 1.5s;
    }

    @keyframes starTwinkle {
      0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
      50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .app-container {
        padding: 0.5rem;
      }

      .status-container {
        padding: 1.5rem;
        margin: 1.5rem 0;
      }

      .nyan-cat {
        width: 100px;
      }

      .rainbow-trail {
        height: 50px;
      }

      .star {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 480px) {
      .nyan-cat {
        width: 80px;
      }

      .rainbow-trail {
        height: 40px;
        width: 50%;
      }

      .star {
        font-size: 1.2rem;
      }
    }
  `]
})
export class App implements OnInit, OnDestroy {
  isAugust = false;
  currentDate = '';
  currentMonth = '';
  private intervalId: any;

  ngOnInit() {
    this.checkIfAugust();
    // Comprobar cada segundo
    this.intervalId = setInterval(() => {
      this.checkIfAugust();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private checkIfAugust() {
    const now = new Date();
    const month = now.getMonth(); // 0-11, donde agosto es 7
    
    this.isAugust = month === 7;
    
    this.currentDate = now.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    this.currentMonth = now.toLocaleDateString('es-ES', { month: 'long' });
  }

  onImageError(event: any) {
    // Fallback si no se puede cargar la imagen
    event.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100"><rect width="200" height="100" fill="%23ff69b4"/><text x="100" y="50" text-anchor="middle" dy=".3em" font-family="Arial" font-size="20" fill="white">🐱‍🌈 NYAN</text></svg>';
  }
}

bootstrapApplication(App);