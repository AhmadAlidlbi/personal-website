import { Component } from '@angular/core';

import { ExperienceCard } from '../../shared/components/experience-card/experience-card';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceCard],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences = [
    {
      role: 'Software Developer',
      company: 'Enterprise & Government-Style Systems',
      period: '2024 — Present',
      details:
        'Building scalable Angular, Flutter, and .NET solutions with strong focus on maintainability, role permissions, reusable components, API integrations, and bilingual user experiences.',
    },
    {
      role: 'Mobile App Developer',
      company: 'Kuwait Markets App',
      period: '2025 — Present',
      details:
        'Delivered and enhanced a production Flutter application with marketplace features, cached market selection, API-driven content, push notification flows, responsive UI, and store deployment readiness.',
    },
    {
      role: 'Frontend Developer',
      company: 'Angular Enterprise Dashboards',
      period: '2024 — Present',
      details:
        'Developing reusable Angular components, dynamic tables, role-based page visibility, Excel exports, responsive layouts, status workflows, and clean SCSS-based user interfaces.',
    },
  ];
}
