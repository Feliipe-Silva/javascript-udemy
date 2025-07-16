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
// essa função é imprimida por ultimo por causa do 'setInterval()'
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


// ----------------------------------------------
//      COMPARAÇÃO DO GLOBAL COM O THIS



let compara_com_this = function(param) {
    return this === param;
};

console.log("Function tradicional: " + compara_com_this(global));  // mostra que 'this' aponta para obj global. E no browser é window!
console.log("Colocando this para parâmetro: " + compara_com_this(this))  // saida: false
console.log("Comparando this com this: " + (this === this)); // saída: true

    // This tem comportamento diferente em função arrow.
let arrow_compara = param => { return this === param};

console.log("Arrow function: " + arrow_compara(global));
// Arrow function não permite com o bind() altere o 'this'
