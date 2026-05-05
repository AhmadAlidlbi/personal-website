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
      eyebrow: 'Angular + .NET Core',
      title: 'Enterprise Archive System',
      description:
        'A modular archive management system with role-based permissions, dynamic lookup tables, document workflows, reports, and bilingual Arabic/English support.',
      technologies: ['Angular', '.NET 8', 'SQL Server', 'JWT', 'Clean Architecture'],
      projectUrl: '#',
    },
    {
      eyebrow: 'Flutter Application',
      title: 'Kuwait Markets Mobile App',
      description:
        'A production mobile app for cooperative markets with market switching, product browsing, contact requests, notifications, and API-driven content.',
      technologies: ['Flutter', 'Provider', 'REST API', 'Firebase', 'SharedPreferences'],
      projectUrl: '#',
    },
    {
      eyebrow: 'Angular Dashboard',
      title: 'HR Internal Service Portal',
      description:
        'An employee service portal for HR requests, attendance, leave balances, salary records, announcements, dashboards, and admin management workflows.',
      technologies: ['Angular', 'SCSS', 'ExcelJS', 'Permissions', 'Charts'],
      projectUrl: '#',
    },
    {
      eyebrow: 'Angular + API Integration',
      title: 'Gas Maintenance Orders System',
      description:
        'A responsive admin system for managing service orders, filtering by market and area, tracking order status, and supporting role-based actions.',
      technologies: ['Angular', 'Material Table', 'REST API', 'Status Workflow', 'Responsive UI'],
      projectUrl: '#',
    },
    {
      eyebrow: 'Flutter + MVVM',
      title: 'Purchase Analytics Feature',
      description:
        'A mobile analytics feature that visualizes purchases by date, branch, and category using API data, filters, and clean Provider-based state management.',
      technologies: ['Flutter', 'Provider', 'Charts', 'MVVM', 'REST API'],
      projectUrl: '#',
    },
    {
      eyebrow: 'Angular Reusable Components',
      title: 'Dynamic Lookup Management',
      description:
        'A reusable lookup management module for handling multiple categories with consistent CRUD flows, tables, dialogs, filtering, and permissions.',
      technologies: ['Angular', 'Reusable Components', 'CRUD', 'SCSS', 'Permissions'],
      projectUrl: '#',
    },
  ];
}
