## [Link do Projeto Aqui](https://andreailton.github.io/Calculadora-Javascript/)
[Clique Aqui](https://andreailton.github.io/Calculadora-Javascript/)

<img src="https://github.com/AndreAilton/Calculadora-Javascript/blob/main/Calculadora.png?raw=true" alt="Descrição da Imagem" width="400"/>

---

# Calculadora Simples

Este é um projeto de uma calculadora simples desenvolvida em HTML, CSS e JavaScript. A calculadora permite realizar operações básicas como adição, subtração, multiplicação, divisão e cálculos percentuais.

## Visão Geral

Esta calculadora é uma aplicação web que utiliza JavaScript para capturar eventos de botões e atualizar dinamicamente o visor de texto conforme os botões são pressionados. Ela suporta tanto a entrada de teclado quanto o clique em botões para operações matemáticas.

## Funcionalidades

- **Adição de Números**: Botões numéricos adicionam números ao visor.
- **Operações**: Botões de operações (+, -, *, /, %) permitem realizar cálculos.
- **Limpar**: Botão "C" limpa o visor.
- **Resultado**: Botão "=" calcula o resultado da expressão matemática no visor.
- **Tecla Enter**: A tecla Enter também calcula o resultado.

## Uso

1. Clique nos botões numéricos e de operações para construir uma expressão matemática.
2. Utilize o botão "C" para limpar o visor.
3. Pressione "=" ou Enter para calcular o resultado da expressão.

## Conceitos Utilizados

Este projeto utiliza diversos conceitos de JavaScript e desenvolvimento web, detalhados a seguir:

1. **Manipulação do DOM**: O projeto faz uso de métodos como `document.querySelector()` para acessar elementos da página HTML e manipular seus valores dinamicamente.
2. **Eventos de DOM**: Os eventos de clique (com `addEventListener`) são utilizados para capturar as interações do usuário com os botões da calculadora, assim como o evento de teclado para detectar a tecla Enter.
3. **Funções Factory**: A implementação da calculadora utiliza uma função factory (`criaCalculadora()`) para criar uma instância da calculadora, encapsulando a lógica e retornando métodos como um objeto. Esse padrão permite maior flexibilidade e reaproveitamento de código.
4. **Constructor Function**: Além da abordagem com Factory Function, também foi utilizada uma Constructor Function para criar a calculadora. O uso de constructor permite a criação de objetos com base em uma função construtora, utilizando o operador `new`. A vantagem dessa abordagem é a possibilidade de reutilizar a mesma função para criar várias instâncias de objetos, mantendo a consistência da lógica interna.

5. **Comparação entre Factory Function e Constructor Function**:

   - **Factory Function**: É uma função que cria e retorna objetos, sem o uso de `new`. O retorno é explícito, e ela encapsula o estado e comportamento do objeto, permitindo que cada instância tenha seus próprios métodos e propriedades.

   - **Constructor Function**: É uma função especial usada com o operador `new`, que cria um objeto, vincula `this` a esse novo objeto e retorna automaticamente o objeto. Essa abordagem é comum em orientação a objetos em JavaScript, utilizando `this` para referenciar o objeto criado.

   **Diferenças**:
   - **Factory Function** oferece maior flexibilidade, podendo encapsular a lógica de criação e até retornar tipos diferentes de objetos, se necessário.
   - **Constructor Function** é mais tradicional para criar múltiplas instâncias de objetos com a mesma estrutura, seguindo um padrão de programação orientada a objetos.

6. **Tratamento de Erros**: A função `Resultado()` faz uso de `try...catch` para capturar erros na avaliação das expressões matemáticas, evitando que a aplicação quebre caso o usuário insira uma expressão inválida.
7. **Uso de `eval()`**: A função `eval()` é utilizada para calcular o resultado das expressões matemáticas inseridas pelo usuário. No entanto, seu uso deve ser feito com cuidado, pois `eval()` pode executar código arbitrário.
