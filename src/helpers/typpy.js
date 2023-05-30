import tippy from 'tippy.js';

// Configuración global de tippy.js
tippy.setDefaultProps({
    arrow: true, // Muestra una flecha en el tooltip
    placement: 'top', // Posición del tooltip (top, bottom, left, right, etc.)
    duration: 200, // Duración de la animación de entrada/salida del tooltip
    // Otras opciones...
  });
  
  // Configuración individual de tooltips
  tippy('.tooltip-btn', {
    content: 'Este es un tooltip', // Contenido del tooltip
    theme: 'light', // Tema del tooltip (light, dark, etc.)
    delay: [300, 200], // Retardo antes de mostrar/ocultar el tooltip (en milisegundos)
    // Otras opciones...
  });