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
      eyebrow: 'Angular / Website',
      title: 'Into Art Kuwait Website',
      description:
        'A modern company website for Into Art Kuwait with a clean visual structure, responsive layout, and professional brand-focused presentation.',
      technologies: ['Angular', 'SCSS', 'Responsive Design', 'UI/UX', 'Website'],
      image: 'assets/images/projects/into-art.svg',
      imageAlt: 'Preview of the Into Art Kuwait website project',
      projectUrl: 'https://www.intoartkw.com/',
    },
    {
      eyebrow: 'Angular / Website',
      title: 'Redesign Kuwait Website',
      description:
        'A professional website for Redesign Kuwait focused on modern layout, smooth user experience, responsive sections, and clean visual identity.',
      technologies: ['Angular', 'SCSS', 'Responsive Design', 'UI Design', 'Deployment'],
      image: 'assets/images/projects/redesign-kuwait.svg',
      imageAlt: 'Preview of the Redesign Kuwait website project',
      projectUrl: 'https://www.redesignkw.com/',
    },
    {
      eyebrow: 'Angular + .NET Core',
      title: 'Enterprise Archive System',
      description:
        'A modular archive management system with role-based permissions, dynamic lookup tables, document workflows, reports, and bilingual Arabic/English support.',
      technologies: ['Angular', '.NET 8', 'SQL Server', 'JWT', 'Clean Architecture'],
      image: 'assets/images/projects/archive-system.svg',
      imageAlt: 'Preview of the enterprise archive system project',
      projectUrl: '#',
    },
    {
      eyebrow: 'Flutter Application',
      title: 'Kuwait Markets Mobile App',
      description:
        'A production mobile app for cooperative markets with market switching, product browsing, contact requests, notifications, and API-driven content.',
      technologies: ['Flutter', 'Provider', 'REST API', 'Firebase', 'SharedPreferences'],
      image: 'assets/images/projects/kuwait-markets.svg',
      imageAlt: 'Preview of the Kuwait Markets mobile app project',
      projectUrl: '#',
    },
    {
      eyebrow: 'Angular Dashboard',
      title: 'HR Internal Service Portal',
      description:
        'An employee service portal for HR requests, attendance, leave balances, salary records, announcements, dashboards, and admin management workflows.',
      technologies: ['Angular', 'SCSS', 'ExcelJS', 'Permissions', 'Charts'],
      image: 'assets/images/projects/hr-portal.svg',
      imageAlt: 'Preview of the HR internal service portal project',
      projectUrl: '#',
    },
    {
      eyebrow: 'Flutter + MVVM',
      title: 'Purchase Analytics Feature',
      description:
        'A mobile analytics feature that visualizes purchases by date, branch, and category using API data, filters, and clean Provider-based state management.',
      technologies: ['Flutter', 'Provider', 'Charts', 'MVVM', 'REST API'],
      image: 'assets/images/projects/purchase-analytics.svg',
      imageAlt: 'Preview of the purchase analytics feature project',
      projectUrl: '#',
    },
  ];
}
