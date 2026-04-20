import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-tabs',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './product-tabs.component.html',
  styleUrl: './product-tabs.component.scss'
})
export class ProductTabsComponent {
  products = [
    { name: 'ToDoShido', route: '/products/todoshido' },
    { name: 'FocusApp', route: '/products/focusapp', disabled: true },
    { name: 'HabitFlow', route: '/products/habitflow', disabled: true }
  ];
}
