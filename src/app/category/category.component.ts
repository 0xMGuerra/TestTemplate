import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  tiposDeSort = ['Precio ascendente', 'Precio descendente', "Mas valorados", "Título A-Z", "Título Z-A"];
  tipoDeSortSeleccionado="Precio ascendente"
}
