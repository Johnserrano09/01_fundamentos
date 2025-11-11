import { Component, inject } from '@angular/core';
import { ProyectosService } from './services/proyectos-service';
import { ListadoProyectos } from "../proyectos-page/components/listado-proyectos/listado-proyectos";
import { AddComponent } from '../proyectos-page/components/add-proyecto/add-component/add-proyecto';

@Component({
  selector: 'app-proyectos-dos-page',
  imports: [ListadoProyectos, AddComponent],
  templateUrl: './proyectos-dos-page.html',
})
export class ProyectosDosPage {

  ProyectosService = inject(ProyectosService);
  

}
