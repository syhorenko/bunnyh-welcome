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
      icon: '✨',
      title: 'Elegant Interface',
      description: 'A stunning gradient design that transforms task management into a delightful visual experience'
    },
    {
      icon: '🚀',
      title: 'Native Performance',
      description: 'Built exclusively for macOS with SwiftUI, delivering smooth 60fps animations and instant response'
    },
    {
      icon: '🔐',
      title: 'Privacy Focused',
      description: 'All data stored locally on your Mac. No accounts, no cloud, no tracking - complete privacy guaranteed'
    },
    {
      icon: '📋',
      title: 'Smart Organization',
      description: 'Intuitive task creation and management with categories, priorities, and quick search'
    },
    {
      icon: '🎯',
      title: 'Distraction Free',
      description: 'Clean, minimal interface that lets you focus on what matters most - getting things done'
    },
    {
      icon: '⚙️',
      title: 'Lightweight',
      description: 'Just 2.6 MB download size with zero bloat. Fast to download, faster to use'
    }
  ];
}
