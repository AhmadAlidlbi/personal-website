import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Github, Linkedin, Mail, MapPin, Send, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, LucideAngularModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly Mail = Mail;
  readonly MapPin = MapPin;
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Send = Send;

  contactInfo = [
    {
      label: 'Email',
      value: 'your-email@example.com',
      href: 'mailto:your-email@example.com',
      icon: Mail,
    },
    {
      label: 'Location',
      value: 'Kuwait',
      href: '',
      icon: MapPin,
    },
    {
      label: 'GitHub',
      value: 'github.com/your-github',
      href: 'https://github.com/your-github',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/your-linkedin',
      href: 'https://www.linkedin.com/in/your-linkedin',
      icon: Linkedin,
    },
  ];

  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  onSubmit(): void {
    console.log('Contact form submitted:', this.formData);

    alert('Contact form UI is ready. Web3Forms integration will be added later.');

    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }
}
