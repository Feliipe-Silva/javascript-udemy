let dobro = function(a) {
    return 2 * a;
};

dobro = (a) => {
    return 2 * a;
};

dobro = a => 2 * a; // sem necessidade de declara 'return'

console.log(dobro(Math.PI));


// const ola = function () { 
//     return 'Olá'; 
// };

ola = () => 'Olá'   // sintaxe reduzida
ola = _ => 'Olá';   // underline no lugar de parâtros 

console.log(ola());