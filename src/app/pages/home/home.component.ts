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
      title: 'Beautiful & Minimal',
      description: 'A clean interface with stunning gradients. Task management that feels effortless and looks gorgeous.'
    },
    {
      icon: '⚡',
      title: 'Native macOS',
      description: 'Built with SwiftUI for native performance. Smooth, fast, and perfectly integrated with your Mac.'
    },
    {
      icon: '🔒',
      title: 'Private by Default',
      description: 'Your tasks stay on your Mac. No cloud sync, no accounts, no analytics. Just you and your to-dos.'
    },
    {
      icon: '🎯',
      title: 'Zero Clutter',
      description: 'No unnecessary features. No distractions. Just what you need to get things done efficiently.'
    }
  ];
}
