import { Component } from '@angular/core';

// Estructura de cada tarjeta destacada en Inicio
interface Destacado {
  icono: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  // Datos del negocio que se muestran en la pantalla principal
  nombreNegocio = 'Pastelería Lety';
  tipoNegocio = 'Pastelería regiomontana';
  productoPrincipal = 'Pasteles y repostería fina';
  eslogan = 'Pasteles, Lety Cachitos y repostería para tus celebraciones';

  // Tarjetas de "Lo que encontrarás"
  destacados: Destacado[] = [
    {
      icono: '🎂',
      titulo: 'Pasteles para cada ocasión',
      descripcion:
        'Nevados, tres leches, Selva Negra, Milky Way® y más. También puedes llevar tu idea para un pastel personalizado.',
    },
    {
      icono: '🍰',
      titulo: 'Lety Cachitos',
      descripcion:
        'Pasteles individuales para dos personas en sabores como Carlos V, Zebra y Tentación de Fresa, con opciones sin azúcar.',
    },
    {
      icono: '🥧',
      titulo: 'Repostería',
      descripcion: 'Empanadas de cajeta, hojarascas, pays y rollos para acompañar cualquier momento.',
    },
  ];

  // Interactividad: dato curioso que cambia al presionar el botón
  datos: string[] = [
    'Pastelería Lety es una empresa familiar originaria de Monterrey.',
    'Sus primeros productos fueron empanadas de piña y cajeta y el pastel de fresa con crema.',
    'Los Lety Cachitos son pasteles individuales pensados para dos personas.',
    'Puedes armar tu propio Lety Cachito y terminarlo con chocolate, cajeta o lechera.',
    'Tiene pasteles endulzados con Splenda® y Lety Cachitos sin azúcar.',
  ];
  indiceDato = 0;

  cambiarDato(): void {
    // Avanza al siguiente dato y regresa al primero al llegar al final
    this.indiceDato = (this.indiceDato + 1) % this.datos.length;
  }
}
