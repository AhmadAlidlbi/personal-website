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
    { label: 'Angular', icon: 'assets/images/tech-icons.svg#angular' },
    { label: 'TypeScript', icon: 'assets/images/tech-icons.svg#typescript' },
    { label: 'SCSS', icon: 'assets/images/tech-icons.svg#scss' },
    { label: 'C#', icon: 'assets/images/tech-icons.svg#csharp' },
    { label: 'ASP.NET Core', icon: 'assets/images/tech-icons.svg#aspnet-core' },
    { label: 'SQL Server', icon: 'assets/images/tech-icons.svg#sql-server' },
    { label: 'REST API', icon: 'assets/images/tech-icons.svg#rest-api' },
    { label: 'JWT', icon: 'assets/images/tech-icons.svg#jwt' },
    { label: 'EF Core', icon: 'assets/images/tech-icons.svg#ef-core' },
    { label: 'Firebase', icon: 'assets/images/tech-icons.svg#firebase' },
    { label: 'Git', icon: 'assets/images/tech-icons.svg#git' },
    { label: 'Docker', icon: 'assets/images/tech-icons.svg#docker' },
    { label: 'Responsive Design', icon: 'assets/images/tech-icons.svg#responsive-design' },
  ];

  capabilities = [
    {
      icon: '</>',
      title: 'Frontend Development',
      items: ['Dynamic Components', 'Angular Router', 'Reactive Forms', 'Lazy Loading Modules'],
    },
    {
      icon: 'API',
      title: 'API Integration & State',
      items: ['REST APIs', 'HttpClient', 'RxJS', 'Services and Signals'],
    },
    {
      icon: 'DB',
      title: 'Backend Development',
      items: ['ASP.NET', 'REST APIs', 'SQL Server', 'Backend Integration'],
    },
    {
      icon: 'AR',
      title: 'Localized User Interfaces',
      items: ['Arabic/English UI', 'RTL Layouts', 'ngx-translate', 'Angular i18n'],
    },
  ];
}
