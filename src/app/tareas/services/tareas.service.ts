import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea.interface';

@Injectable()
export class TareasService {
  tareas: Array<Tarea> = [
    {
      act: 'Barrer',
      completada: false,
    },
    {
      act: 'Trapear',
      completada: true,
    },
    {
      act: 'Cocinar',
      completada: true,
    },
    {
      act: 'Sacar la basura',
      completada: true,
    },
    {
      act: 'Planchar',
      completada: true,
    },
    {
      act: 'Bailar',
      completada: true,
    },
    {
      act: 'Comer',
      completada: true,
    },
  ];

  deleteTarea() {
    this.tareas.pop();
  }
}
