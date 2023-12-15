class CounterComponent extends HTMLElement {
    constructor() {
        super();

        // Crear un Shadow DOM para el componente
        this.attachShadow({ mode: 'open' });

        // Establecer el estado interno para el contador
        this._counter = 0;

        // Renderizar el componente
        this.render();

        // Agregar estilos al Shadow DOM
        this.addStyles();
    }

    // Método para renderizar el componente
    render() {
        // Crear un contenedor div para el componente
        const container = document.createElement('div');
        container.classList.add('container', 'text-center', 'my-5');

        // Agregar un título centrado usando Bootstrap
        const title = document.createElement('h1');
        title.textContent = 'Counter Component - Anthony Quishpe';

        // Crear elementos HTML para el contador y botones de suma y resta
        const counterElement = document.createElement('p');
        counterElement.textContent = `Contador: ${this._counter}`;

        const increaseButton = document.createElement('button');
        increaseButton.textContent = 'AUMENTAR';
        increaseButton.classList.add('btn', 'btn-primary', 'mx-2', 'my-1'); // Agregar margen vertical
        increaseButton.addEventListener('click', () => {
            this._counter++;
            this.render(); // Volver a renderizar al modificar el contador
        });

        const decreaseButton = document.createElement('button');
        decreaseButton.textContent = 'DISMINUIR';
        decreaseButton.classList.add('btn', 'btn-danger', 'mx-2', 'my-1'); // Agregar margen vertical
        decreaseButton.addEventListener('click', () => {
            this._counter--;
            this.render(); // Volver a renderizar al modificar el contador
        });

        // Limpiar el Shadow DOM antes de agregar elementos
        this.shadowRoot.innerHTML = '';

        // Adjuntar elementos al Shadow DOM
        container.appendChild(title);
        container.appendChild(counterElement);
        container.appendChild(increaseButton);
        container.appendChild(decreaseButton);

        this.shadowRoot.appendChild(container);
    }

    // Método para agregar estilos al componente
    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
        /* Estilos para centrar el componente */
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        /* Estilos para botones con margen vertical */
        .btn {
            margin-top: 8px;
            margin-bottom: 8px;
        }
        `;
        this.shadowRoot.appendChild(style);
    }

    get counter() {
        return this._counter;
    }

    set counter(value) {
        this._counter = value;
        this.render();
    }

    // Método llamado cuando el componente se agrega al DOM
    connectedCallback() {
        this.render();
    }
}

customElements.define('counter-component', CounterComponent);
