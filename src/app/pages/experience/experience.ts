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
      role: 'Front-End Developer',
      company: 'IBRGC',
      period: 'July 2025 - Present',
      details:
        'Developed responsive Angular 17+ applications with TypeScript and RxJS, reusable standalone components, lazy loading, Angular Router, reactive forms, REST API integration, services and signals, and bilingual Arabic/English RTL support with ngx-translate and Angular i18n.',
    },
    {
      role: 'Mobile App Developer Intern',
      company: 'DVCOM',
      period: 'January 2025 - March 2025',
      details:
        'Redesigned the Xcally app UI in Figma and implemented responsive React Native Expo screens for iOS and Android in collaboration with the development team.',
    },
    {
      role: 'Web Developer Intern',
      company: 'Workiom',
      period: 'July 2023 - September 2023',
      details:
        'Managed and optimized the company website and multilingual knowledge base in English, Turkish, and Arabic, maintained the CMS, and collaborated with the development team on delivery.',
    },
  ];
}
