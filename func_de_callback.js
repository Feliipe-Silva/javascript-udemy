                // ----- TRATAMENTO DE FUNÇÃO 'CALLBACK' --------//
                // ----- resumo no arquivo -> Funçãos_de_callback


//      array.forEach((elemento, índice, array)
let carros = ['Palio', 'Gol', 'Onix'];

function intera( elemento, indice ) {
    console.log(`${indice +1} - ${elemento}`);
};

carros.forEach(intera);
console.log('\n');
// 1. Primeiro Parâmetro: O valor do elemento atual do array.
// 1. Segundo Parâmetro: O índice (posição) do elemento atual.
// 3. Terceiro Parâmetro (Opcional): Uma referência ao array completo que está sendo iterado.

//----------------------------------------------

const produtos = [
    { id: 1, nome: 'Açucar', estoque: 100, valor: 2.00 },
    { id: 2, nome: 'Álcool 70', estoque: 50, valor: 9.95 },
    { id: 3, nome: 'Luvas descartáveis', estoque: 1000, valor: 2.50 },
];

function imprimirProduto (produto, index) {
    console.log( index + ' - ' + produto.nome );
};

produtos.forEach(imprimirProduto);
console.log('\n');

//----------------------------------------------

const numeros = [10, 20, 30];

numeros.forEach((elementoAtual, indice, arrayCompleto) => {
    console.log(`Índice: ${indice}, Elemento: ${elementoAtual}, Array Completo: ${arrayCompleto === numeros}`);
});

// Saída: Índice: 0, Elemento: 10, Array Completo: true (3x).

//----------------------------------------------
//----------------- *map()* ----------------------


const prod = [
    { id: 1, nome: 'Caneta' },
    { id: 2, nome: 'Caderno' }
];

const nomesEmMaiusculas = prod.map((elementoAtual, indice, arrayCompleto) => {
    console.log(`\n Transformando o item na posição ${indice}: ${elementoAtual.nome}`);
    return elementoAtual.nome.toUpperCase(); // Retorna o nome em maiúsculas
});

console.log('Array de nomes em maiúsculas:', nomesEmMaiusculas);
// Transformando o item na posição 0: Caneta
// Transformando o item na posição 1: Caderno
// Array de nomes em maiúsculas: [ 'CANETA', 'CADERNO' ]


//----------------------------------------------
//----------------- *filter()* ----------------------


const idades = [15, 22, 18, 30, 10];

const maioresDeIdade = idades.filter((elementoAtual, indice, arrayCompleto) => {
    console.log(`\nfilter - Verificando ${elementoAtual} na posição ${indice}`);
    return elementoAtual >= 18; // Retorna true ou false
});

console.log('Maiores de idade:', maioresDeIdade);
// filter - Verificando 15 na posição 0
// filter - Verificando 22 na posição 1
// filter - Verificando 18 na posição 2
// filter - Verificando 30 na posição 3
// filter - Verificando 10 na posição 4
// Maiores de idade: [ 22, 18, 30 ]



//----------------------------------------------
//----------------- *reduce()* ----------------------

const precos = [10.50, 20.00, 5.25];

const total = precos.reduce((acumulador, elementoAtual, indice, arrayCompleto) => {
    console.log(`\nreduce - Acumulador: ${acumulador}, Item atual: ${elementoAtual}, Índice: ${indice}`);
    return acumulador + elementoAtual; // Soma o elemento atual ao acumulador
}, 0); // <-- O '0' aqui é o valor inicial do acumulador

console.log('Valor total:', total.toFixed(2));
// Saída:
// reduce - Acumulador: 0, Item atual: 10.5, Índice: 0
// reduce - Acumulador: 10.5, Item atual: 20, Índice: 1
// reduce - Acumulador: 30.5, Item atual: 5.25, Índice: 2
// Valor total: 35.75

//----------------------------------------------

function somar(acumulador, numeroAtual) {
    return acumulador + numeroAtual;
};

const _numeros = [1, 2, 3, 4];
const soma = _numeros.reduce(somar, 0);
console.log("Resultado: " + soma)
// Resultado: 10