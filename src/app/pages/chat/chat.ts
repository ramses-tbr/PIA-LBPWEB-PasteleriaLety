import { Component, effect, signal } from '@angular/core';

interface Mensaje {
  texto: string;
  autor: 'usuario' | 'bot';
  hora: string;
}

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {
  // Signals: el proyecto es zoneless (Angular 21), así la pantalla se actualiza sola
  mensajes = signal<Mensaje[]>([
    {
      texto: '¡Hola! Bienvenido a Pastelería Lety 🍰 ¿En qué te puedo ayudar?',
      autor: 'bot',
      hora: this.horaActual(),
    },
  ]);
  nuevoMensaje = signal('');
  escribiendo = signal(false);

  // Respuestas por palabra clave. Ajusten el contenido a su negocio.
  private respuestas = [
    { palabras: ['hola', 'buenas', 'buen día', 'buenos'], respuesta: '¡Hola! ¿Quieres conocer nuestros pasteles o los precios?' },
    { palabras: ['precio', 'costo', 'cuánto', 'cuanto'], respuesta: 'Puedes ver todos los precios en la sección "Precios" del menú.' },
    { palabras: ['catálogo', 'catalogo', 'pastel', 'pasteles', 'postre', 'sabor', 'sabores'], respuesta: 'En el "Catálogo" encuentras todos nuestros pasteles y postres.' },
    { palabras: ['pedido', 'encargo', 'ordenar', 'pedir'], respuesta: 'Para hacer un pedido dinos qué pastel quieres y para qué fecha. Recomendamos pedir con 2 días de anticipación.' },
    { palabras: ['entrega', 'domicilio', 'envío', 'envio'], respuesta: 'Sí contamos con entrega a domicilio dentro de la zona. ¡Pregunta por la cobertura!' },
    { palabras: ['horario', 'abren', 'cierran', 'abierto'], respuesta: 'Atendemos de lunes a sábado de 9:00 a 19:00 hrs.' },
    { palabras: ['gracias'], respuesta: '¡Con gusto! Aquí estamos para endulzar tu día 🍓' },
  ];

  private respuestaPorDefecto =
    'Gracias por tu mensaje. En un momento una persona de Pastelería Lety te responderá.';

  constructor() {
    // Cada vez que cambian los mensajes, baja el scroll al último
    effect(() => {
      this.mensajes();
      this.escribiendo();
      setTimeout(() => {
        const caja = document.querySelector('.chat-mensajes');
        if (caja) caja.scrollTop = caja.scrollHeight;
      });
    });
  }

  actualizar(evento: Event): void {
    this.nuevoMensaje.set((evento.target as HTMLInputElement).value);
  }

  enviar(): void {
    const texto = this.nuevoMensaje().trim();
    if (!texto) return; // no se envían mensajes vacíos

    this.mensajes.update((lista) => [
      ...lista,
      { texto, autor: 'usuario', hora: this.horaActual() },
    ]);
    this.nuevoMensaje.set('');
    this.escribiendo.set(true);

    // Simula que el negocio tarda un momento en responder
    setTimeout(() => {
      this.mensajes.update((lista) => [
        ...lista,
        { texto: this.buscarRespuesta(texto), autor: 'bot', hora: this.horaActual() },
      ]);
      this.escribiendo.set(false);
    }, 1000);
  }

  private buscarRespuesta(texto: string): string {
    const t = texto.toLowerCase();
    const encontrada = this.respuestas.find((r) => r.palabras.some((p) => t.includes(p)));
    return encontrada ? encontrada.respuesta : this.respuestaPorDefecto;
  }

  limpiar(): void {
    this.mensajes.set([
      {
        texto: 'Conversación reiniciada. ¿En qué te puedo ayudar?',
        autor: 'bot',
        hora: this.horaActual(),
      },
    ]);
  }

  private horaActual(): string {
    return new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
  }
}
