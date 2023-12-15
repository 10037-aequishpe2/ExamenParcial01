class EmisorComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style>
    /* Estilos para el contenedor */
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%; /* Ajusta la altura según necesites */
    }

    /* Estilos para el botón */
    #emisorBtn {
      background-color: blue;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
  <div class="container">
    <button id="emisorBtn">Enviar Mensaje</button>
  </div>
      `;

    this.shadowRoot.getElementById('emisorBtn').addEventListener('click', () => {
      const mensaje = '¡Hola Mensaje enviado desde Emisor!';
      const evento = new CustomEvent('mensajeEnviado', { bubbles: true, composed: true, detail: mensaje });
      this.dispatchEvent(evento);
    });
  }
}

customElements.define('emisor-component', EmisorComponent);