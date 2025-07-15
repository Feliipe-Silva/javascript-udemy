
function valores() {
    let nome = "Felipe";
    let idade = 30;

    return {nome, idade};
};


console.log(valores().nome);    // retonando apenas a variável 'nome'
console.log(valores().idade);   // retonando apenas a variável 'idade'
console.log(valores());