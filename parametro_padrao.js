//  estrategia para gerar valor padrão [1]
function soma1(a, b, c) {
    a = a || 1;
    b = b || 1; 
    c = c || 1;
    return a + b + c;
};

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0));

//  estrategia para gerar valor padrão [1]
function soma2(a, b, c) {
    a = a !== undefined ? a : 1;  //Se você passar 0, null, false, eles serão considerados valores válidos.
    b = b in arguments ? b : 1;  // b in arguments, verifica se a propriedade em b, senão recebi 1;
    c = isNaN(c) ? 1 : c;  // Se c for NaN, usa 1. Caso contrário, usa o valor de c.
    return a + b + c;
};

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));

//  estrategia para gerar valor padrão ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
};

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0));