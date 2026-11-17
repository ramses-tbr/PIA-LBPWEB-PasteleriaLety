
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  imports: [CommonModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {

  // Categoría seleccionada
  categoriaSeleccionada = 'Todos';

  // Lista de pasteles
  pasteles = [
    {
      nombre: 'Pastel de Chocolate',
      descripcion: 'Delicioso pastel de chocolate con cubierta cremosa.',
      categoria: 'Chocolate',
      imagen: './../../../../img/pastelChocolate.jpg'
    },
    {
      nombre: 'Pastel de Fresas con Crema',
      descripcion: 'Suave pastel acompañado de fresas frescas y crema.',
      categoria: 'Frutas',
      imagen: './../../../../img/pastelFresasCrema.jpg'
    },
    {
      nombre: 'Pastel de Tres Leches',
      descripcion: 'Tradicional pastel esponjoso bañado en tres leches.',
      categoria: ['Chocolate', 'Especiales'],
      imagen: './../../../../img/pastelTresLeches.jpg'
    },
    {
      nombre: 'Pastel de Zanahoria',
      descripcion: 'Pastel de zanahoria con cubierta de queso crema.',
      categoria: 'Especiales',
      imagen: './../../../../img/pastelZanahoria.jpg'
    }
  ];

  // Filtrar pasteles por categoría
  filtrarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }

  categoriaTexto(categoria: string | string[]): string {
    return Array.isArray(categoria) ? categoria.join(' / ') : categoria;
  }

  // Mostrar pasteles según el filtro
  get pastelesFiltrados() {
  if (this.categoriaSeleccionada === 'Todos') {
    return this.pasteles;
  }

  return this.pasteles.filter(
    pastel => Array.isArray(pastel.categoria)
      ? pastel.categoria.includes(this.categoriaSeleccionada)
      : pastel.categoria === this.categoriaSeleccionada
  );

  Array = Array;
}

}
