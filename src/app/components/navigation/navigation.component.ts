import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  menuItems = [
    { label: 'Home', route: '/', icon: '🏠' },
    { label: 'About Us', route: '/about', icon: '👥' },
    { label: 'Contact Us', route: '/contact', icon: '📧' }
  ];
}
