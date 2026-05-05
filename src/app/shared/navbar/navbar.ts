import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  BriefcaseBusiness,
  FolderKanban,
  Home,
  LucideAngularModule,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  readonly Menu = Menu;
  readonly X = X;
  readonly Sun = Sun;
  readonly Moon = Moon;
  readonly Home = Home;
  readonly FolderKanban = FolderKanban;
  readonly BriefcaseBusiness = BriefcaseBusiness;
  readonly Mail = Mail;

  isSidebarOpen = signal(false);
  isDarkMode = signal(false);

  navLinks = [
    {
      label: 'Home',
      route: '/',
      icon: Home,
      exact: true,
    },
    {
      label: 'Projects',
      route: '/projects',
      icon: FolderKanban,
      exact: false,
    },
    {
      label: 'Experience',
      route: '/experience',
      icon: BriefcaseBusiness,
      exact: false,
    },
    {
      label: 'Contact',
      route: '/contact',
      icon: Mail,
      exact: false,
    },
  ];

  constructor() {
    const savedTheme = localStorage.getItem('portfolio-theme');

    if (savedTheme === 'dark') {
      this.isDarkMode.set(true);
      document.body.classList.add('dark-mode');
    }
  }

  @HostListener('window:keydown.escape')
  onEscapePress(): void {
    this.closeSidebar();
  }

  toggleSidebar(): void {
    this.isSidebarOpen.update((value) => {
      const nextValue = !value;
      this.updateBodyScroll(nextValue);
      return nextValue;
    });
  }

  closeSidebar(): void {
    this.isSidebarOpen.set(false);
    this.updateBodyScroll(false);
  }

  toggleTheme(): void {
    this.isDarkMode.update((value) => !value);

    if (this.isDarkMode()) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('portfolio-theme', 'dark');
      return;
    }

    document.body.classList.remove('dark-mode');
    localStorage.setItem('portfolio-theme', 'light');
  }

  private updateBodyScroll(isLocked: boolean): void {
    document.body.classList.toggle('sidebar-open', isLocked);
  }
}
