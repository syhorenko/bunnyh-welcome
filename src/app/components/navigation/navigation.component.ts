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
    { label: 'ToDoShido', route: '/products/todoshido', icon: '✅' },
    { label: 'PetWheel', route: '/products/petwheel', icon: '🐾' },
    { label: 'About Us', route: '/about', icon: '👥' },
    { label: 'Contact Us', route: '/contact', icon: '📧' }
  ];
}
