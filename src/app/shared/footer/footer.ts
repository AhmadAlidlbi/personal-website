import { Component } from '@angular/core';
import { Github, Linkedin, Instagram, LucideAngularModule } from 'lucide-angular';

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
  readonly Instagram = Instagram;

  currentYear = new Date().getFullYear();

  socialLinks = [
    {
      label: 'GitHub',
      url: 'https://github.com/AhmadAlidlbi',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ahmadalidlbi',
      icon: Linkedin,
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/dev0ex',
      icon: Instagram,
    },
  ];
}
