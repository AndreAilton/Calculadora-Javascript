function Calculadora() {
    this.display = document.querySelector('.display')

    this.inicia = function(){
        this.capturabotao();
        this.capturaEnter();
    }

    this.Adicionar = (valor) => {
        this.display.value += valor.innerText;
    }

    this.Apagar = () => {
        this.display.value = ''
    }

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
          if (e.keyCode === 13) {
            this.Resultado();
          }
        });
      };
    

    this.Resultado = () => {
        try {
            this.display.value = eval(this.display.value)
        } catch (error) {
            this.display.value = ''
        }
        
    }

    this.capturabotao = () => document.addEventListener('click',e =>{
        const elemento = e.target;
        if(elemento.classList.contains('btn-number')) this.Adicionar(elemento)
        if(elemento.classList.contains('btn-operation')) this.Adicionar(elemento)
        if(elemento.classList.contains('btn-clear')) this.Apagar()
        if(elemento.classList.contains('btn-result')) this.Resultado()
    }
    )
}
const calculadora = new Calculadora();
calculadora.inicia();

