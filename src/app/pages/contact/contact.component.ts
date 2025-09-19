import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitMessage = '';

  contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      details: 'hello@bunnyh.com',
      description: 'Send us an email anytime'
    }
  ];

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
      this.submitMessage = 'Please fill in all required fields.';
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    // Method 1: Using mailto link (opens default email client)
    this.sendEmailViaMailto();
    
    // Method 2: Using EmailJS (uncomment to use)
    // this.sendEmailViaEmailJS();
    
    // Method 3: Using backend API (uncomment to use)
    // this.sendEmailViaAPI();
  }

  // Method 1: mailto - Opens user's default email client
  private sendEmailViaMailto() {
    const subject = this.contactForm.subject || 'Contact Form Submission';
    const body = `Name: ${this.contactForm.name}\nEmail: ${this.contactForm.email}\n\nMessage:\n${this.contactForm.message}`;
    
    const mailtoLink = `mailto:hello@bunnyh.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink, '_blank');
    
    this.isSubmitting = false;
    this.submitMessage = 'Your email client should open with a pre-filled message. Please send it to complete your inquiry.';
    this.resetForm();
  }

  // Method 2: EmailJS - Sends email directly from frontend
  private sendEmailViaEmailJS() {
    // You'll need to install EmailJS: npm install @emailjs/browser
    // And set up an EmailJS account at https://www.emailjs.com/
    
    const emailData = {
      to_email: 'hello@bunnyh.com',
      from_name: this.contactForm.name,
      from_email: this.contactForm.email,
      subject: this.contactForm.subject || 'Contact Form Submission',
      message: this.contactForm.message
    };

    // Example EmailJS implementation (requires setup):
    /*
    import emailjs from '@emailjs/browser';
    
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailData, 'YOUR_PUBLIC_KEY')
      .then(() => {
        this.isSubmitting = false;
        this.submitMessage = 'Thank you for your message! We\'ll get back to you soon.';
        this.resetForm();
      })
      .catch((error) => {
        this.isSubmitting = false;
        this.submitMessage = 'Sorry, there was an error sending your message. Please try again.';
        console.error('EmailJS error:', error);
      });
    */
  }

  // Method 3: Backend API - Sends email via your backend
  private sendEmailViaAPI() {
    const emailData = {
      to: 'hello@bunnyh.com',
      from: this.contactForm.email,
      name: this.contactForm.name,
      subject: this.contactForm.subject || 'Contact Form Submission',
      message: this.contactForm.message
    };

    // Example API call (you'll need to create a backend endpoint):
    /*
    this.http.post('/api/send-email', emailData).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.submitMessage = 'Thank you for your message! We\'ll get back to you soon.';
        this.resetForm();
      },
      error: (error) => {
        this.isSubmitting = false;
        this.submitMessage = 'Sorry, there was an error sending your message. Please try again.';
        console.error('API error:', error);
      }
    });
    */
  }

  private resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
