                // ----- TRATAMENTO DO 'setIterval' & 'setTimeout' EM FUNCTION ARROW --------//
                // ----- resumo no arquivo -> setInterval()_&_setTimeout()
let contagem = 0;

const meuIntervalo = setInterval(() => {
    contagem++;
    console.log(`Contando: ${contagem}`);

    if (contagem === 5) {
        clearInterval(meuIntervalo); // Para o intervalo quando a contagem chega a 5
        console.log("Parou de contar!");
    }
}, 1000); // 1000 milissegundos = 1 segundo




console.log("Vai começar...");

setTimeout(() => {
    console.log('\n' +"Olá! Eu apareço só depois de 3 segundos.");
}, 3000); // 3000 milissegundos = 3 segundos
