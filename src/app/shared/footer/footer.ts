import { Component } from '@angular/core';
import { Github, Linkedin, Mail, Instagram, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Mail = Mail;
  readonly Instagram = Instagram;

  currentYear = new Date().getFullYear();

  socialLinks = [
    {
      label: 'GitHub',
      url: 'https://github.com/your-github',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/your-linkedin',
      icon: Linkedin,
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/your-instagram',
      icon: Instagram,
    },
    {
      label: 'Email',
      url: 'mailto:your-email@example.com',
      icon: Mail,
    },
  ];
}
