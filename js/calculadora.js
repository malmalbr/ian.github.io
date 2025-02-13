document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões com a classe 'btn'
    const buttons = document.querySelectorAll('.btn');
    // Seleciona o elemento com a classe 'screen'
    const screen = document.querySelector('.screen');
    
    // Inicializa as variáveis para armazenar o estado da calculadora
    let currentInput = ''; // Entrada atual do usuário
    let operator = ''; // Operador selecionado (+, -, *, /)
    let previousInput = ''; // Entrada anterior do usuário
    
    // Adiciona um evento de clique para cada botão
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtém o valor do atributo 'data-value' do botão clicado
            const value = button.getAttribute('data-value');

            // Se o valor for 'C', limpa todas as entradas e a tela
            if (value === 'C') {
                currentInput = '';
                operator = '';
                previousInput = '';
                screen.value = '';
            }
            // Se o valor for '=', realiza o cálculo e exibe o resultado
            else if (value === '=') {
                // Verifica se há um operador e se ambas as entradas estão preenchidas
                if (operator && currentInput !== '' && previousInput !== '') {
                    // Avalia a expressão matemática e atualiza a tela
                    currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                    screen.value = currentInput;
                    // Reseta o operador e a entrada anterior
                    operator = '';
                    previousInput = '';
                }
            }
            // Se o valor for um operador (+, -, *, /)
            else if (['+', '-', '*', '/'].includes(value)) {
                // Se a entrada atual não estiver vazia
                if (currentInput !== '') {
                    // Armazena o operador e a entrada anterior
                    operator = value;
                    previousInput = currentInput;
                    // Reseta a entrada atual
                    currentInput = '';
                }
            }
            // Se o valor for um número, adiciona à entrada atual e atualiza a tela
            else {
                currentInput += value;
                screen.value = currentInput;
            }
        });
    });
});
