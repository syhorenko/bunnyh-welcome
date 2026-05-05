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
  downloadLabel: string;
  downloadDisabled?: boolean;
  version: string;
  fileSize: string;
  systemReq: string;
  imagePath: string;
  screenshotSubtitle: string;
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
      downloadUrl: 'https://github.com/syhorenko/todoshido/releases/download/1.0.0/ToDoshido-1.0.0.dmg',
      downloadLabel: 'Download for macOS',
      version: 'v1.0.0',
      fileSize: '2.6 MB',
      systemReq: 'macOS 11.0+',
      imagePath: '/todoshido-icon.png',
      screenshotSubtitle: 'A closer look at ToDoShido\'s beautiful interface',
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
    },
    petwheel: {
      name: 'PetWheel',
      tagline: 'Smart activity tracker for your cat\'s running wheel',
      description: 'Connect your ESP32-powered cat wheel via Bluetooth and track every spin. Real-time sessions, distance stats, multi-pet support, and a fun activity wheel — all in one beautiful iOS app.',
      downloadUrl: '#',
      downloadLabel: 'Coming Soon to App Store',
      downloadDisabled: true,
      version: 'v1.0.0',
      fileSize: '8.2 MB',
      systemReq: 'iOS 16.0+',
      imagePath: '/petwheel-icon.png',
      screenshotSubtitle: 'A closer look at PetWheel\'s beautiful interface',
      features: [
        {
          icon: '📡',
          title: 'Bluetooth Connectivity',
          description: 'Pairs instantly with your ESP32 hall-effect sensor. Live rotation data streams straight to your phone over BLE.'
        },
        {
          icon: '📊',
          title: 'Real-time Tracking',
          description: 'Watch rotations and distance update live during each session. Never miss a midnight sprint again.'
        },
        {
          icon: '🐾',
          title: 'Multi-pet Support',
          description: 'Add all your cats, dogs, or small animals. Assign each pet to a wheel and track their activity separately.'
        },
        {
          icon: '🎡',
          title: 'Activity Wheel',
          description: 'Spin the wheel for random activity suggestions — grooming, playtime, treats, and more — to keep your pet happy.'
        },
        {
          icon: '📈',
          title: 'Sync History',
          description: 'Every session is saved locally. Review past runs with rotations, distance, and timestamps — even without a connection.'
        },
        {
          icon: '🔋',
          title: 'Offline First',
          description: 'The ESP32 stores counts in flash memory. Sync when you\'re back in range — data is never lost.'
        }
      ],
      screenshots: [
        {
          src: '/screenshots/petwheel/my-wheels.png',
          alt: 'My Wheels',
          caption: 'All your wheels at a glance — total rotations and distance'
        },
        {
          src: '/screenshots/petwheel/wheel-detail-connected.png',
          alt: 'Wheel Detail — Live Session',
          caption: 'Live session updates in real time as your pet runs'
        },
        {
          src: '/screenshots/petwheel/wheel-detail-disconnected.png',
          alt: 'Wheel Detail — Sync History',
          caption: 'Total stats and full sync history, even when offline'
        },
        {
          src: '/screenshots/petwheel/wheel-history.png',
          alt: 'Wheel History & Settings',
          caption: 'Browse every past session and configure wheel diameter'
        },
        {
          src: '/screenshots/petwheel/add-wheel.png',
          alt: 'Add Wheel',
          caption: 'Scan for your ESP32 CatWheel and pair it in seconds'
        },
        {
          src: '/screenshots/petwheel/activity-wheel.png',
          alt: 'Activity Wheel',
          caption: 'Spin the wheel to pick a random activity for your pet'
        },
        {
          src: '/screenshots/petwheel/my-pets.png',
          alt: 'My Pets',
          caption: 'Manage multiple pets and see their last recorded activity'
        },
        {
          src: '/screenshots/petwheel/add-pet.png',
          alt: 'Add a Pet',
          caption: 'Add any pet — cat, dog, rabbit, hamster, bird and more'
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

}
