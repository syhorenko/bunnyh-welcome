import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'Y',
      role: 'Lead Developer',
      image: '👩‍💻',
      description: 'Passionate about creating amazing mobile apps.'
    },
    {
      name: 'S',
      role: 'Lead Developer',
      image: '👨‍🎨',
      description: 'Passionate about creating amazing mobile apps.'
    }
  ];

  values = [
    {
      icon: '🎯',
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication.'
    },
    {
      icon: '💎',
      title: 'Quality',
      description: 'We never compromise on quality and always strive for excellence.'
    },
    {
      icon: '🚀',
      title: 'Growth',
      description: 'We are committed to continuous learning and improvement.'
    }
  ];
}
