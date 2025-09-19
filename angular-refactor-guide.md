# Complete Angular Refactor Guide

## Step 6: Core Services with Signals

### 6.1 Create App State Service
```typescript
// src/app/core/services/app-state.service.ts
import { Injectable, signal, computed } from '@angular/core';

export interface AppState {
  isLoading: boolean;
  theme: 'light' | 'dark';
  user: any;
}

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  // Signals for reactive state management
  private _state = signal<AppState>({
    isLoading: false,
    theme: 'dark',
    user: null
  });

  // Computed signals for derived state
  readonly state = this._state.asReadonly();
  readonly isLoading = computed(() => this._state().isLoading);
  readonly theme = computed(() => this._state().theme);
  readonly user = computed(() => this._state().user);

  // Actions to update state
  setLoading(loading: boolean): void {
    this._state.update(state => ({ ...state, isLoading: loading }));
  }

  setTheme(theme: 'light' | 'dark'): void {
    this._state.update(state => ({ ...state, theme }));
  }

  setUser(user: any): void {
    this._state.update(state => ({ ...state, user }));
  }
}
```

### 6.2 Create Welcome Service
```typescript
// src/app/features/welcome/services/welcome.service.ts
import { Injectable, signal, computed } from '@angular/core';

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WelcomeData {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  private _welcomeData = signal<WelcomeData>({
    title: 'Welcome to S&Y',
    subtitle: 'Your journey begins here',
    description: "We're excited to have you with us. This is the start of something amazing.",
    features: [
      {
        id: '1',
        icon: '✨',
        title: 'Innovation',
        description: 'Cutting-edge solutions for modern challenges'
      },
      {
        id: '2',
        icon: '🤝',
        title: 'Partnership',
        description: 'Building lasting relationships with our clients'
      },
      {
        id: '3',
        icon: '🚀',
        title: 'Growth',
        description: 'Empowering your success every step of the way'
      }
    ]
  });

  readonly welcomeData = this._welcomeData.asReadonly();
  readonly features = computed(() => this._welcomeData().features);
  readonly heroData = computed(() => ({
    title: this._welcomeData().title,
    subtitle: this._welcomeData().subtitle,
    description: this._welcomeData().description
  }));

  updateWelcomeData(data: Partial<WelcomeData>): void {
    this._welcomeData.update(current => ({ ...current, ...data }));
  }
}
```

## Step 7: Modern Components

### 7.1 Header Component
```typescript
// src/app/layout/header/header.component.ts
import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
    <mat-toolbar class="header-toolbar">
      <div class="logo">
        <h1>S&Y</h1>
      </div>
      <span class="spacer"></span>
      <button mat-icon-button (click)="toggleTheme()">
        <mat-icon>{{ themeIcon() }}</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: [`
    .header-toolbar {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .logo h1 {
      font-size: 2rem;
      font-weight: 600;
      color: #ffffff;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      letter-spacing: 0.1em;
      margin: 0;
    }
    
    .spacer {
      flex: 1 1 auto;
    }
  `]
})
export class HeaderComponent {
  private _isDarkTheme = signal(true);
  
  readonly themeIcon = computed(() => 
    this._isDarkTheme() ? 'light_mode' : 'dark_mode'
  );

  toggleTheme(): void {
    this._isDarkTheme.update(current => !current);
  }
}
```

### 7.2 Hero Component
```typescript
// src/app/features/welcome/components/hero/hero.component.ts
import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <section class="hero">
      <h2 class="hero-title">{{ heroData().title }}</h2>
      <p class="hero-subtitle">{{ heroData().subtitle }}</p>
      <div class="hero-description">
        <p>{{ heroData().description }}</p>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      text-align: center;
      margin-bottom: 4rem;
      max-width: 800px;
    }
    
    .hero-title {
      font-size: 3.5rem;
      font-weight: 300;
      color: #ffffff;
      margin-bottom: 1rem;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .hero-subtitle {
      font-size: 1.5rem;
      font-weight: 400;
      color: #e8f4f8;
      margin-bottom: 2rem;
      opacity: 0.9;
    }
    
    .hero-description {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      padding: 2rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .hero-description p {
      font-size: 1.1rem;
      color: #ffffff;
      opacity: 0.9;
      line-height: 1.8;
      margin: 0;
    }
    
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }
      
      .hero-subtitle {
        font-size: 1.2rem;
      }
      
      .hero-description {
        padding: 1.5rem;
      }
    }
  `]
})
export class HeroComponent {
  heroData = input.required<{ title: string; subtitle: string; description: string }>();
}
```

### 7.3 Features Component
```typescript
// src/app/features/welcome/components/features/features.component.ts
import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Feature } from '../../services/welcome.service';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <section class="features">
      <div 
        class="feature-card" 
        *ngFor="let feature of features()"
        [attr.data-feature-id]="feature.id"
      >
        <div class="feature-icon">{{ feature.icon }}</div>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </section>
  `,
  styles: [`
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      width: 100%;
      max-width: 1000px;
    }
    
    .feature-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      padding: 2.5rem 2rem;
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }
    
    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1.5rem;
      display: block;
    }
    
    .feature-card h3 {
      font-size: 1.5rem;
      font-weight: 500;
      color: #ffffff;
      margin-bottom: 1rem;
    }
    
    .feature-card p {
      color: #e8f4f8;
      opacity: 0.9;
      line-height: 1.6;
      margin: 0;
    }
    
    @media (max-width: 768px) {
      .features {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      
      .feature-card {
        padding: 2rem 1.5rem;
      }
    }
  `]
})
export class FeaturesComponent {
  features = input.required<Feature[]>();
}
```

### 7.4 Footer Component
```typescript
// src/app/layout/footer/footer.component.ts
import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  template: `
    <footer class="footer">
      <p>&copy; {{ currentYear() }} S&Y. All rights reserved.</p>
    </footer>
  `,
  styles: [`
    .footer {
      text-align: center;
      padding: 2rem 0;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: auto;
    }
    
    .footer p {
      color: #e8f4f8;
      opacity: 0.8;
      font-size: 0.9rem;
      margin: 0;
    }
  `]
})
export class FooterComponent {
  readonly currentYear = computed(() => new Date().getFullYear());
}
```

## Step 8: Main App Component

### 8.1 App Component with Signals
```typescript
// src/app/app.component.ts
import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeroComponent } from './features/welcome/components/hero/hero.component';
import { FeaturesComponent } from './features/welcome/components/features/features.component';
import { WelcomeService } from './features/welcome/services/welcome.service';
import { AppStateService } from './core/services/app-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    FeaturesComponent
  ],
  template: `
    <div class="container" [class.loading]="isLoading()">
      <app-header></app-header>
      
      <main class="main-content">
        <app-hero [heroData]="heroData()"></app-hero>
        <app-features [features]="features()"></app-features>
      </main>
      
      <app-footer></app-footer>
    </div>
    
    <router-outlet></router-outlet>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    .main-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2rem 0;
    }
    
    .loading {
      opacity: 0.7;
      pointer-events: none;
    }
    
    @media (max-width: 768px) {
      .container {
        padding: 0 15px;
      }
    }
  `]
})
export class AppComponent {
  private welcomeService = inject(WelcomeService);
  private appStateService = inject(AppStateService);
  
  readonly isLoading = this.appStateService.isLoading;
  readonly heroData = this.welcomeService.heroData;
  readonly features = this.welcomeService.features;
}
```

## Step 9: Global Styles

### 9.1 Global Styles with CSS Variables
```scss
// src/styles.scss
@import '~@angular/material/theming';
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

// CSS Variables for theming
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-primary: #2c3e50;
  --text-secondary: #e8f4f8;
  --background-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
}

// Reset and base styles
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: var(--text-primary);
  background: var(--background-gradient);
  min-height: 100vh;
}

// Angular Material theme customization
@include mat-core();

$custom-primary: mat-palette($mat-blue);
$custom-accent: mat-palette($mat-purple);
$custom-theme: mat-light-theme($custom-primary, $custom-accent);

@include angular-material-theme($custom-theme);
```

## Step 10: Routing Configuration

### 10.1 App Routing
```typescript
// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/welcome/components/welcome-page/welcome-page.component')
      .then(m => m.WelcomePageComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component')
      .then(m => m.AboutComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
```

## Step 11: Build and Deployment

### 11.1 Build Configuration
```json
// angular.json (excerpt)
{
  "projects": {
    "bunnyh-welcome-angular": {
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/bunnyh-welcome-angular",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss"
            ],
            "scripts": []
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
              "outputHashing": "all"
            }
          }
        }
      }
    }
  }
}
```

### 11.2 Deployment Scripts
```json
// package.json scripts
{
  "scripts": {
    "build": "ng build",
    "build:prod": "ng build --configuration production",
    "serve": "ng serve",
    "test": "ng test",
    "lint": "ng lint",
    "deploy": "ng build --configuration production && npm run upload"
  }
}
```

## Step 12: Testing Setup

### 12.1 Component Testing Example
```typescript
// src/app/features/welcome/components/hero/hero.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    
    // Set required input
    component.heroData = {
      title: 'Test Title',
      subtitle: 'Test Subtitle',
      description: 'Test Description'
    };
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display hero data', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.hero-title').textContent).toContain('Test Title');
    expect(compiled.querySelector('.hero-subtitle').textContent).toContain('Test Subtitle');
  });
});
```

## Step 13: Final Commands

### 13.1 Complete Setup Commands
```bash
# After creating the Angular project
cd bunnyh-welcome-angular

# Install dependencies
npm install

# Generate components (if using Angular CLI)
ng generate component features/welcome/components/hero --standalone
ng generate component features/welcome/components/features --standalone
ng generate component layout/header --standalone
ng generate component layout/footer --standalone

# Generate services
ng generate service features/welcome/services/welcome
ng generate service core/services/app-state

# Run development server
ng serve

# Build for production
ng build --configuration production
```

## Benefits of This Architecture

1. **Signals**: Reactive state management with better performance
2. **Standalone Components**: No NgModules needed, tree-shakable
3. **Modern TypeScript**: Full type safety and better IDE support
4. **Modular Structure**: Easy to maintain and scale
5. **Angular Material**: Professional UI components
6. **Lazy Loading**: Better performance with route-based code splitting
7. **Testing**: Built-in testing support with Jest/Karma
8. **Build Optimization**: Production builds with tree-shaking and minification

This architecture provides a solid foundation for future expansion while maintaining the beautiful design of your current welcome page.
