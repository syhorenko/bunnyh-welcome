import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  features = [
    {
      icon: '🚀',
      title: 'Fast & Modern',
      description: 'Built with the latest mobile frameworks for optimal performance'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Modern UI'
    },
    {
      icon: '🔧',
      title: 'Easy to Use',
      description: 'Intuitive interface designed for the best user experience'
    },
    {
      icon: '📱',
      title: 'Mobile Ready',
      description: 'Fully responsive design that adapts to any screen size'
    }
  ];
}
