import { Component } from '@angular/core';

import { ProjectCard } from '../../shared/components/project-card/project-card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    {
      eyebrow: 'Website / Frontend',
      title: 'INTO ART Kuwait Website',
      description:
        'Professional public website with a responsive layout and brand-focused presentation.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Responsive Design', 'Localization'],
      image: 'assets/images/projects/intoart-website.png',
      imageAlt: 'Preview of the Into Art Kuwait website project',
      projectUrl: 'https://www.intoartkw.com/',
    },
    {
      eyebrow: 'Website / Frontend',
      title: 'Redesign Kuwait Website',
      description:
        'Professional website focused on modern sections, responsive experience, and clean visual identity.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Responsive Design', 'Localization'],
      image: 'assets/images/projects/redesignkw-website.png',
      imageAlt: 'Preview of the Redesign Kuwait website project',
      projectUrl: 'https://www.redesignkw.com/',
    },
    {
      eyebrow: 'Angular Enterprise System',
      title: 'Archive System - IBRGC',
      description:
        'Bilingual archive management system with reusable dynamic components, CRUD flows, permissions, reports, and API integration.',
      technologies: [
        'Angular',
        'TypeScript',
        'SCSS',
        'REST API Integration',
        'JWT Authentication',
        'Reports',
        'Dynamic Components',
      ],
      image: 'assets/images/projects/archive-system.png',
      imageAlt: 'Preview of the archive management frontend project',
      projectUrl: '#',
    },
    {
      eyebrow: 'Full-Stack Mobile App',
      title: 'Balance',
      description:
        'Graduation project built as a task management mobile app with an Express.js backend, MongoDB, and a React Native Expo frontend.',
      technologies: ['React Native Expo', 'Express.js', 'MongoDB', 'REST API', 'JavaScript', 'CSS'],
      image: 'assets/images/projects/balance-app.png',
      imageAlt: 'Preview of the Balance mobile app project',
      projectUrl: 'https://github.com/AhmadAlidlbi/Balance',
    },
    {
      eyebrow: 'Mobile UI Implementation',
      title: 'DVCOM Xcally App',
      description:
        'Redesigned the Xcally app UI in Figma and implemented responsive React Native Expo screens for iOS and Android.',
      technologies: ['React Native Expo', 'Figma', 'Mobile UI', 'iOS', 'Android'],
      image: 'assets/images/projects/xcally-app.png',
      imageAlt: 'Preview of the DVCOM Xcally app UI project',
      projectUrl: '#',
    },
  ];
}
