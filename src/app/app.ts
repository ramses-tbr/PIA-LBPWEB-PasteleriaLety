import { Component, signal } from '@angular/core';
import { Encabezado } from './components/encabezado/encabezado';
import { PiePagina } from './components/pie-pagina/pie-pagina';
import { Inicio } from './pages/inicio/inicio';
import { Historia } from './pages/historia/historia';
import { Catalogo } from './pages/catalogo/catalogo';
import { Precios } from './pages/precios/precios';
import { Chat } from './pages/chat/chat';

@Component({
  selector: 'app-root',
  imports: [Encabezado, PiePagina, Inicio, Historia, Catalogo, Precios, Chat],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pasteleria-lety-pia');
}
