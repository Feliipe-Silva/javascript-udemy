                // ----- TRATAMENTO EM FUNCTION FACTORY  (função fábrica) --------//
                // ----- resumo no arquivo -> Função_fabrica (func_factory)

                // Function factory Simples (função fábrica)
function criaPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
};

const pessoa1 = criaPessoa();
console.log(pessoa1.nome);
console.log('\n');


function criar_novo_produto(nome, valor) {
    return {
        nome,
        valor
    }
};

let bolacha = criar_novo_produto('Biscoito', '2,45');

console.log(`Produto: ${bolacha.nome} de valor: R$:${bolacha.valor}`);
console.log('\n');



                // Function factory Simples

function CriarUsuario(nome, nivel) {
    return {
        // 1. Propriedades de Dados
        id: Math.random(),
        nome: nome,
        nivel: nivel,
        ativo: true,

        // 2. Array de Dados
        permissoes: ['leitura', 'escrita'],

        // 3. Objeto Aninhado
        detalhes: {
            ultimoLogin: new Date().toLocaleDateString(),
            sessaoAtiva: false
        },

        // 4. Método (Função)
        desativar() {
            this.ativo = false;
            console.log(`Usuário ${this.nome} desativado.`);
        }
    }
};

const novoUsuario = CriarUsuario('Alexandre', 'Admin');

console.log(novoUsuario.permissoes); 
novoUsuario.desativar();             
console.log(novoUsuario.ativo);