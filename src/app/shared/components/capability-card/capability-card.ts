import { Component, input } from '@angular/core';

@Component({
  selector: 'app-capability-card',
  standalone: true,
  imports: [],
  templateUrl: './capability-card.html',
  styleUrl: './capability-card.scss',
})
export class CapabilityCard {
  icon = input.required<string>();
  title = input.required<string>();
  items = input.required<string[]>();
}
