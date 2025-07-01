
                // TRATAMENTO DO 'THIS' EM FUNCTION SIMPLES
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

                // -----------------------------------------------------

