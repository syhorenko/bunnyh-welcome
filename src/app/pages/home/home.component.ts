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
      icon: '✅',
      title: 'Simple Task Management',
      description: 'Create, organize, and complete tasks with an intuitive interface'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Stunning gradient UI with purple, cyan, and pink colors'
    },
    {
      icon: '⚡',
      title: 'Fast & Native',
      description: 'Built with SwiftUI for lightning-fast performance on macOS'
    },
    {
      icon: '💾',
      title: 'Local Storage',
      description: 'Your tasks stay on your Mac with SwiftData persistence'
    }
  ];
}
