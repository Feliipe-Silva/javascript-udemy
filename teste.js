const array = [10, 50, 100, 150];

function interar(elemento, indice) {
    console.log("posição " + indice + ": elemento: " + elemento);
};

array.forEach(interar);


// -------------------- MAP()

console.log('\n')

const dia = [
    { id: 1, nome: 'segunda' },
    { id: 2, nome: 'terça' },
    { id: 3, nome: 'quarta' }
];

function sub(elemento, indice, completo) {
    return 'posição '+ elemento.id + ": elemento: " + elemento.nome.toUpperCase();
};

let res = dia.map(sub);
console.log(res);


// -------------------- FILTER()

console.log('\n');

const array_filter = [10.2, 7.0, 2.1, 100.5, 19.1];

function filtro( numeros ) {
    return (numeros > 10);
};
// const num = array_filter.filter( (filtro => filtro > 10) );

const num = array_filter.filter( filtro );
console.log(num);

// const redutor = array.reduce(((acumulador, elemento => acumulador + elemento)));

// console.log(redutor);


//-----------------------------------------function construction
console.log('\n');

const produto = [];

function Novo_produto(nome, valor, descricao) {
    this.nome = nome;
    this.valor = valor;
    this.descricao = descricao;

};

let fone = new Novo_produto('Fone', 65, 'Fone gamer');
produto.push(fone);
// console.log(produto[0]);

let mouse = new Novo_produto('Mouse gamer', 40, 'Mouser Ultra Sensível');
produto.push(mouse);
// console.log(produto);

// Filter para interar sobre todos os produto com valor manor que 60
let valorMenorque60 = produto.filter((produto) => produto.valor <= 60);

console.log(`Fitrando valor menor que (60 reais). Produto: ${valorMenorque60[0].descricao} - R$:${valorMenorque60[0].valor}`);



// ----------------------------------TESTE ADICIONANDO VALORES! 

const arrayValores = [];

function PushValores( num ) {   //function construction 
    this.num = num;
    console.log(`\n Valor adicionado com sucesso!`);
};

let dez = 10;
let novoValor = new PushValores( dez );

arrayValores.push(novoValor);
console.log(arrayValores[0].num
);



// ----------------------------------TESTE Classes!

