import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Screenshot {
  src: string;
  alt: string;
  caption: string;
}

interface ProductData {
  name: string;
  tagline: string;
  description: string;
  downloadUrl: string;
  version: string;
  systemReq: string;
  imagePath: string;
  features: Feature[];
  screenshots: Screenshot[];
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  product: ProductData | null = null;

  private products: { [key: string]: ProductData } = {
    todoshido: {
      name: 'ToDoShido',
      tagline: 'A beautiful task manager for macOS',
      description: 'Minimal. Fast. Private. Everything you need to stay organized, nothing you don\'t. Built natively for Mac.',
      downloadUrl: '/ToDoshido-1.0.0.dmg',
      version: 'v1.0.0',
      systemReq: 'macOS 11.0+',
      imagePath: '/todoshido-icon.png',
      features: [
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
      ],
      screenshots: [
        {
          src: '/screenshots/week-overview.png',
          alt: 'ToDoShido Inbox',
          caption: 'Clean inbox view with priority indicators'
        },
        {
          src: '/screenshots/settings.png',
          alt: 'Week Overview',
          caption: 'Weekly timeline showing created and completed tasks'
        },
        {
          src: '/screenshots/archive.png',
          alt: 'Archive',
          caption: 'All completed tasks organized by date'
        },
        {
          src: '/screenshots/inbox.png',
          alt: 'Settings',
          caption: 'Simple settings with global hotkey support'
        }
      ]
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.product = this.products[productId] || null;
    });
  }

  get fileSize(): string {
    return '2.6 MB';
  }
}
