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
    { label: 'Flutter', icon: 'assets/images/tech-icons.svg#flutter' },
    { label: 'Dart', icon: 'assets/images/tech-icons.svg#dart' },
    { label: 'ASP.NET Core', icon: 'assets/images/tech-icons.svg#aspnet-core' },
    { label: 'C#', icon: 'assets/images/tech-icons.svg#csharp' },
    { label: 'EF Core', icon: 'assets/images/tech-icons.svg#ef-core' },
    { label: 'SQL Server', icon: 'assets/images/tech-icons.svg#sql-server' },
    { label: 'REST API', icon: 'assets/images/tech-icons.svg#rest-api' },
    { label: 'JWT', icon: 'assets/images/tech-icons.svg#jwt' },
    { label: 'Firebase', icon: 'assets/images/tech-icons.svg#firebase' },
    { label: 'Git', icon: 'assets/images/tech-icons.svg#git' },
    { label: 'Docker', icon: 'assets/images/tech-icons.svg#docker' },
    { label: 'Responsive Design', icon: 'assets/images/tech-icons.svg#responsive-design' },
  ];

  capabilities = [
    {
      icon: '</>',
      title: 'Frontend Engineering',
      items: ['Angular SPA', 'Reusable Components', 'Responsive Layouts', 'SCSS Architecture'],
    },
    {
      icon: 'DB',
      title: 'Backend Integration',
      items: ['ASP.NET Core APIs', 'JWT Authentication', 'SQL Server', 'Entity Framework Core'],
    },
  ];
}
