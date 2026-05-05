import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Experience } from './pages/experience/experience';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home | Ahmad Alidlbi',
  },
  {
    path: 'projects',
    component: Projects,
    title: 'Projects | Ahmad Alidlbi',
  },
  {
    path: 'experience',
    component: Experience,
    title: 'Experience | Ahmad Alidlbi',
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact | Ahmad Alidlbi',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
