function criaCalculadora() {
    const display = document.querySelector('.display');

    function inicia() {
        capturabotao();
        capturaEnter();
    }

    function Adicionar(valor) {
        display.value += valor.innerText;
    }

    function Apagar() {
        display.value = '';
    }

    function capturaEnter() {
        document.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                Resultado();
            }
        });
    }

    function Resultado() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = '';
        }
    }

    function capturabotao() {
        document.addEventListener('click', e => {
            const elemento = e.target;
            if (elemento.classList.contains('btn-number')) Adicionar(elemento);
            if (elemento.classList.contains('btn-operation')) Adicionar(elemento);
            if (elemento.classList.contains('btn-clear')) Apagar();
            if (elemento.classList.contains('btn-result')) Resultado();
        });
    }

    // Retorna os métodos como um objeto
    return {
        inicia,
        Adicionar,
        Apagar,
        capturaEnter,
        Resultado,
        capturabotao
    };
}

// Criação de uma instância da calculadora com a Factory Function
const calculadora = criaCalculadora();
calculadora.inicia();
