import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArrowRight, Download, LucideAngularModule } from 'lucide-angular';

import { CapabilityCard } from '../../shared/components/capability-card/capability-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LucideAngularModule, CapabilityCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly ArrowRight = ArrowRight;
  readonly Download = Download;

  technologies = [
    'Angular',
    'TypeScript',
    'SCSS',
    'Flutter',
    'Dart',
    'ASP.NET Core',
    'C#',
    'EF Core',
    'SQL Server',
    'REST API',
    'JWT',
    'Firebase',
    'Git',
    'Docker',
    'Responsive Design',
  ];

  capabilities = [
    {
      icon: '</>',
      title: 'Frontend Engineering',
      items: ['Angular SPA', 'Reusable Components', 'Responsive Layouts', 'SCSS Architecture'],
    },
    {
      icon: '▣',
      title: 'Mobile Development',
      items: ['Flutter Apps', 'Provider State Management', 'MVVM Structure', 'Store Deployment'],
    },
    {
      icon: 'DB',
      title: 'Backend Integration',
      items: ['ASP.NET Core APIs', 'JWT Authentication', 'SQL Server', 'Entity Framework Core'],
    },
    {
      icon: '⚙',
      title: 'Enterprise Delivery',
      items: ['Clean Architecture', 'Role Permissions', 'Admin Dashboards', 'Bilingual Systems'],
    },
  ];
}
