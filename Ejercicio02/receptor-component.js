class ReceptorComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = '<p id="mensajeRecibido"></p>';
    }

    connectedCallback() {
        document.addEventListener('mensajeEnviado', (event) => {
            const mensajeRecibidoElement = this.shadowRoot.getElementById('mensajeRecibido');
            if (mensajeRecibidoElement) {
                mensajeRecibidoElement.textContent = `Mensaje recibido: ${event.detail}`;
            }
        });
    }
}

customElements.define('receptor-component', ReceptorComponent);
