import { v4 as uuidv4 } from 'uuid';
import { TaskState } from '../state/tasks/tasks-state.interface';

export const tasksMock: TaskState = {
  TODO: [
    {
      uuid: uuidv4(),
      title: 'Autenticación de usuarios',
      description:
        'Crear sistema de autenticación y autorización para usuarios utilizando JWT.',
      subTasks: [
        {
          uuid: uuidv4(),
          description: 'Crear componentes de login y registro',
          isFinished: true,
        },
        {
          uuid: uuidv4(),
          description: 'Servicio de autenticación en el backend',
          isFinished: false,
        },
        {
          uuid: uuidv4(),
          description: 'Validar formularios de login y registro',
          isFinished: false,
        },
      ],
    },
    {
      uuid: uuidv4(),
      title: 'Landing page',
      description:
        'Crear la página de inicio con las siguientes funcionalidades:',
      subTasks: [
        {
          uuid: uuidv4(),
          description: 'Mostrar información sobre la empresa',
          isFinished: true,
        },
        {
          uuid: uuidv4(),
          description: 'Presentar características clave del producto',
          isFinished: false,
        },
        {
          uuid: uuidv4(),
          description: 'Incorporar testimonios de clientes',
          isFinished: false,
        },
      ],
    },
  ],
  DOING: [
    {
      uuid: uuidv4(),
      title: 'Optimizar rendimiento de la aplicación',
      description:
        'Identificar y solucionar cuellos de botella para mejorar la velocidad y la eficiencia.',
      subTasks: [
        {
          uuid: uuidv4(),
          description:
            'Realizar análisis de rendimiento con herramientas de profiling',
          isFinished: false,
        },
        {
          uuid: uuidv4(),
          description: 'Optimizar consultas a la base de datos',
          isFinished: false,
        },
        {
          uuid: uuidv4(),
          description: 'Reducir carga inicial de recursos',
          isFinished: false,
        },
      ],
    },
  ],
  DONE: [
    {
      uuid: uuidv4(),
      title: 'Sistema de notificaciones por e-mail',
      description:
        'Configurar y desarrollar sistema para enviar notificaciones de eventos importantes por correo electrónico.',
      subTasks: [
        {
          uuid: uuidv4(),
          description: 'Integrar servicio de envío de correos electrónicos',
          isFinished: true,
        },
        {
          uuid: uuidv4(),
          description: 'Crear plantillas de correos electrónicos',
          isFinished: true,
        },
      ],
    },
    {
      uuid: uuidv4(),
      title: 'Realizar pruebas de integración y QA',
      description:
        'Ejecutar pruebas exhaustivas para garantizar la calidad y estabilidad de la aplicación.',
      subTasks: [
        {
          uuid: uuidv4(),
          description:
            'Crear casos de prueba para las funcionalidades principales',
          isFinished: true,
        },
        {
          uuid: uuidv4(),
          description: 'Automatizar pruebas de regresión',
          isFinished: true,
        },
      ],
    },
  ],
};
