
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

