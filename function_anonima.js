(function() {
    console.log("Executado imediatamente!");
})();   

//--------------------------------------------


const soma = function(a, b) {   //Recebi (x, y), e repassa para (a, b)
    return a + b;
};

const imprimir_resultado = function(x, y, operacao = soma) {  // soma agora é 'operacao'
    return operacao(x, y);
};

console.log("Resultado da função (soma): " + imprimir_resultado(2, 10));

console.log("Resultado da função anônima, chamado dentro de outra: " + imprimir_resultado(10, 2, function(j, k) {
    return j - k;
} ));   //Função chamada, com outra função entre parênteses da função principal.

console.log("Função arrow: " + imprimir_resultado(5, 2, (l, m) => l - m));
// //Função_Arrow declarada entre parênteses da função principal.
