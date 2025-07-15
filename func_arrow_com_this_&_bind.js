                // ----- TRATAMENTO DO 'THIS' EM FUNCTION SIMPLES --------//
                // ----- resumo no arquivo -> tratamento_do_this
function pessoa() {
    this.idade = Number(0);

    const id_intervalo = setInterval(() => {
        this.idade++;
        console.log(this.idade);

        if (this.idade === 5){
            clearInterval(id_intervalo);
        };
    }, 1000)
};

new pessoa;

// ----------------------------------------------



function teste() {
    const _this = this;     // aqui o this foi atribuído para não perder sua herança! 
    _this.nome = 'João';    // variável com herança garantida.

    function imperimir() {
        console.log('Nome: ' + _this.nome);
    };
    // retorno correto, retorna o valor final do resultado da função. E não sua execução! 
    return imperimir;  // retorna a função 'imprimir', e não o resultado de sua execução.
};

const atribui_teste = teste();
atribui_teste();
