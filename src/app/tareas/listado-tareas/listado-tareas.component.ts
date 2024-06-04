import { Component } from '@angular/core';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrl: './listado-tareas.component.css',
})
export class ListadoTareasComponent {
  constructor(private tareasService:TareasService){}

  get tareas(){
    return this.tareasService.tareas;
  }
}
