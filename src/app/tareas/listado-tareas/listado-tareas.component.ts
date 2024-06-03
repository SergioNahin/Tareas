import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrl: './listado-tareas.component.css'
})
export class ListadoTareasComponent {
  tareas: Array<string>= [
'Barrer','Trapear','Cocinar','Sacar la basura','Planchar', 'Bailar', 'Comer'
  ];
}