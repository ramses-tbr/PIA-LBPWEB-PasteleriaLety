import { Component, computed, signal } from '@angular/core';

interface Hito {
  fecha: string;
  titulo: string;
  descripcion: string;
}

interface DatoRelevante {
  titulo: string;
  descripcion: string;
}

interface Pestana {
  id: string;
  titulo: string;
  texto?: string;
  lista?: string[];
  nota?: string;
}

@Component({
  selector: 'app-historia',
  imports: [],
  templateUrl: './historia.html',
  styleUrl: './historia.css',
})
export class Historia {
  readonly hitos: Hito[] = [
    {
      fecha: 'Finales de los años setenta',
      titulo: 'Inicio de actividades',
      descripcion:
        'Una familia de Monterrey inicia actividades comercializando empanadas de piña y cajeta, pastel de fresa con crema y rollo de cajeta, elaborados con sus propias recetas.',
    },
    {
      fecha: '1987',
      titulo: 'Primera sucursal',
      descripcion:
        'Pastelería Lety se consolida como empresa y abre su primera sucursal en la colonia Nuevo Repueblo, en Monterrey.',
    },
    {
      fecha: '2005',
      titulo: 'Planta de producción',
      descripcion:
        'Se inaugura la planta en San Nicolás de los Garza, pensada para cubrir la demanda existente y las proyecciones a futuro.',
    },
    {
      fecha: '2009',
      titulo: 'Primera sucursal foránea',
      descripcion: 'Pastelería Lety traspasa la región y abre su primera sucursal foránea, en el estado de Coahuila.',
    },
  ];

  readonly datosRelevantes: DatoRelevante[] = [
    {
      titulo: 'Empresa familiar',
      descripcion: 'Es una empresa familiar originaria de Monterrey, Nuevo León.',
    },
    {
      titulo: 'Qué elabora',
      descripcion: 'Se dedica a la elaboración de postres, pasteles y repostería fina.',
    },
    {
      titulo: 'Dónde está',
      descripcion: 'Sus sucursales cubren el área metropolitana de Monterrey y la ciudad de Saltillo.',
    },
    {
      titulo: 'Planta de producción',
      descripcion: 'Desde 2005 cuenta con una planta en San Nicolás de los Garza, Nuevo León.',
    },
  ];

  readonly pestanas: Pestana[] = [
    {
      id: 'mision',
      titulo: 'Misión',
      texto:
        'Ser líderes en la preferencia de la gente, elaborando productos y servicios de máxima calidad, satisfaciendo al 100% el gusto del consumidor, mediante un proceso de mejora continua.',
    },
    {
      id: 'vision',
      titulo: 'Visión',
      texto:
        'Mantenerse como una marca de repostería reconocida por su trayectoria, variedad y calidad, fortaleciendo su presencia y la relación con sus clientes.',
      nota:
        'Redacción propuesta por el equipo para este proyecto académico; no es una declaración oficial de Pastelería Lety.',
    },
    {
      id: 'valores',
      titulo: 'Valores',
      lista: [
        'Calidad: procurar que los productos cumplan con las características esperadas.',
        'Compromiso: atender las necesidades de los clientes.',
        'Tradición: conservar la trayectoria que forma parte de la identidad del negocio.',
        'Servicio: ofrecer una atención cordial y clara.',
        'Mejora continua: buscar mejorar los productos, los procesos y la experiencia del cliente.',
      ],
      nota:
        'Redacción propuesta por el equipo para este proyecto académico; no es una declaración oficial de Pastelería Lety.',
    },
    {
      id: 'objetivos',
      titulo: 'Objetivos',
      lista: [
        'Ofrecer variedad de pasteles y productos de repostería.',
        'Mantener estándares de calidad en la elaboración.',
        'Atender celebraciones y ocasiones especiales.',
        'Facilitar que los clientes conozcan los productos y sus precios.',
        'Fortalecer la atención y la comunicación con los clientes.',
      ],
      nota:
        'Redacción propuesta por el equipo para este proyecto académico; no es una declaración oficial de Pastelería Lety.',
    },
  ];

  readonly pestanaActiva = signal('mision');

  readonly contenidoActivo = computed(
    () => this.pestanas.find((p) => p.id === this.pestanaActiva()) ?? this.pestanas[0],
  );

  seleccionar(id: string): void {
    this.pestanaActiva.set(id);
  }
}
