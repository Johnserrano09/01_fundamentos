import { Routes } from '@angular/router';
import { HomePage } from './features/module/homePage/homePage';
import { PerfilPage } from './features/perfilPage/perfilPage';
import { ProyectosPage } from './features/proyectos-page/proyectos-page';
import { ProyectosDosPage } from './features/proyectos-dos-page/proyectos-dos-page';

export const routes: Routes = [
  {
    path: "",
    component: HomePage,
    title : 'Contador'
  },
  {
    path: 'perfil',
    component: PerfilPage,
    title : 'Perfil'
  },
  {
    path: 'proyectos-page',
    component: ProyectosPage,
    title : 'Proyectos'
  },
  {
    path: 'proyectos-dos-page',
    component: ProyectosDosPage,
    title : 'Proyectos Dos Page'
  }
];
