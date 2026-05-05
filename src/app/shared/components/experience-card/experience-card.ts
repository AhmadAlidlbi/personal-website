import { Component, input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.scss',
})
export class ExperienceCard {
  role = input.required<string>();
  company = input.required<string>();
  period = input.required<string>();
  details = input.required<string>();
}
