class ContenedorComponent extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Crear elementos para el encabezado y el cuerpo usando slots
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          /* Estilos para el contenedor */
          :host {
            border: 1px solid #ccc;
            padding: 20px;
            display: block;
            width: 300px;
            text-align: center; /* Centrar texto en el contenedor */
          }
          /* Estilos para el área de encabezado */
          ::slotted([slot="encabezado"]) {
            font-size: 1.5em;
            margin-bottom: 10px;
            color: #ff6600;
            text-align: center; /* Centrar texto en el área del encabezado */
          }
          /* Estilos para el área de contenido */
          ::slotted([slot="cuerpo"]) {
            color: #333;
            text-align: center; /* Centrar texto en el área del cuerpo */
          }
        </style>
        <div>
          <slot name="encabezado"></slot>
          <slot name="cuerpo"></slot>
        </div>
      `;
  
      // Clonar y adjuntar el contenido del template al shadow DOM
      const instance = template.content.cloneNode(true);
      shadow.appendChild(instance);
    }
  }
  
  customElements.define('contenedor-component', ContenedorComponent);
  