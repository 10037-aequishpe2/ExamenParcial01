// Definimos la clase del componente
class SaludoComponent extends HTMLElement {
    constructor() {
      super();
      // Creamos un shadow root
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Creamos un elemento para el saludo
      const saludo = document.createElement('h1');
      saludo.textContent = '¡Hola, Mundo!';
      saludo.style.fontWeight = 'bold';
  
      // Agregamos el elemento al shadow DOM
      shadow.appendChild(saludo);
    }
  }
  
  // Definimos el nombre del componente para su uso en el HTML
  customElements.define('saludo-component', SaludoComponent);
  