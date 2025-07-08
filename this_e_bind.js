
                // ----- TRATAMENTO DO 'THIS' EM FUNCTION SIMPLES --------//
                // ----- resumo no arquivo -> tratamento_do_this
const pessoa = {
    saudacao: "Bom dia",
    falar() {
        console.log(this.saudacao + "\n");
    }
};
pessoa.falar();

const pessoaFalar = pessoa.falar.bind(pessoa);  // a função bind() trás o 'this' com herança do escopo, onde foi definida.
pessoaFalar();


const pessoa01 = {
    nome: 'Maria',
    dizerOla: function() {
        console.log(`Olá, ${this.nome}!`);
    }
};

const funcaoSeparada = pessoa01.dizerOla;   // não consegue trazer o 'this' com a 'herança' do escopo.
funcaoSeparada();   //  undefined. 'a função bind() resolveria esse problema!'

pessoa01.dizerOla(); // chamada direta do objeto pontando para a função.


                // ----- TRATAMENTO DO 'THIS' EM ARROW FUNCTION --------//

console.log('\n// ----- TRATAMENTO DO ' + 'THIS' + ' EM ARROW FUNCTION --------//');

const exemplo01 = {
    nome: 'Felipe',
    exem_filho01: function() { // 'this' aqui é 'exemplo01' apontado para o índice 'nome'
        console.log(`Função tradicional (exem_filho01): ${this.nome}`);

        // Define a arrow function DENTRO da função tradicional
        const exem_filho02arrow = () => {
            console.log(`Arrow Function (exem_filho02arrow): ${this.nome}`);
        };
        exem_filho02arrow();
    }
};

exemplo01.exem_filho01();
// Arrow Function (exem_filho02arrow): Felipe



const objPrincipal = {
    nome: "Objeto Pai",
    metodoPrincipal: function() { // this aqui é 'objPrincipal'
        console.log("this em metodoPrincipal:", this.nome);

        const metodoAninhadoArrow = () => {
            // this aqui APONTA para 'objPrincipal' (herdou de metodoPrincipal)
            console.log("this em metodoAninhadoArrow:", this.nome);
        };
        metodoAninhadoArrow();
    }
};

console.log("\n--- Método de Objeto com Arrow Aninhada ---");
objPrincipal.metodoPrincipal();
// Saída:
// this em metodoPrincipal: Objeto Pai
// this em metodoAninhadoArrow: Objeto Pai




                // ----- TRATAMENTO DO 'BIND()' --------//


function somar(a, b, c) {
    return a + b + c;
};

// Criando uma nova função 'somarComDez'
// O primeiro argumento de bind é para 'this' (aqui não precisamos, então 'null')
// Os argumentos seguintes são para a função original (aqui, '10')
const somarComDez = somar.bind(null, 10);

console.log('\n' + somarComDez(5, 2)); // É como chamar somar(10, 5, 2)
// Saída: 17



function logar(tipo, mensagem) {
    console.log('\n' + `[${tipo.toUpperCase()}]: ${mensagem}`);
};

// Criando funções de log mais específicas
const logErro = logar.bind(null, 'erro');   // Fixa 'tipo' como 'ERRO'
const logInfo = logar.bind(null, 'info');   // Fixa 'tipo' como 'INFO'
const logAviso = logar.bind(null, 'aviso');     // Fixa 'tipo' como 'AVISO'

logErro('Usuário não autenticado.');   // Saída: [ERRO]: Usuário não autenticado.
logInfo('Dados carregados com sucesso.');   // Saída: [INFO]: Dados carregados com sucesso.
logAviso('Conexão instável.');        // Saída: [AVISO]: Conexão instável.



const calculadora = {
    historico: [],
    adicionarAoHistorico: function(operacao, resultado) {
    this.historico.push(`${operacao}: ${resultado}`);
    console.log(`Histórico: ${this.historico.join(', ')}`);
    },

    multiplicar: function(a, b) {
    const resultado = a * b;
    // Aqui usamos 'bind' para fixar 'this' à 'calculadora'
    // E para pré-definir a 'operacao' como 'Multiplicação'
    this.adicionarAoHistorico.bind(this, 'Multiplicação')(resultado);
    return resultado;
    }
};

calculadora.multiplicar(5, 3);
// Saída:
// Histórico: Multiplicação: 15