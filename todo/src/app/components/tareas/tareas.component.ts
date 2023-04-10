import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/Models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {
  listaTAreas: Tarea[] = [];
  nombreTarea = '';
  sinTareas = "No hay tareas por mostrar"
  placehodker = "Ingrese tarea..."

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    console.log(this.nombreTarea)
    //Crear objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    //agreagr el objeto tarea al array
    this.listaTAreas.push(tarea)

    //reset form
    this.nombreTarea = '';
  }

  eliminarTarea(index:number){
    console.log(index)
    this.listaTAreas.splice(index, 1)
  }

  actualizarTarea(index: number, tarea: Tarea): void {
    this.listaTAreas[index].estado = !tarea.estado;
  }

}
