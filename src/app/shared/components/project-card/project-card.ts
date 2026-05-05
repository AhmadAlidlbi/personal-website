import { Component, input } from '@angular/core';
import { ExternalLink, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  readonly ExternalLink = ExternalLink;

  eyebrow = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
  technologies = input.required<string[]>();
  projectUrl = input<string>('#');
}
