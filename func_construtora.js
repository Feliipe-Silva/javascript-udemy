                // ----- TRATAMENTO DE FUNÇÃO CONSTRUTORAS --------//
                // ----- resumo no arquivo -> função_construtoras

function Carro( velocidadeMaxima = 200, delta = 5 ) {
    let velocidadeAtual = 0;

    this.acelerar = () => {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima;
        };
    }

    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    };
};

const uno = new Carro; 
uno.acelerar();
uno.acelerar();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual()); 



// -------------------- FUNÇÃO CONSTRUTORA - FORNECIDO

// (É uma convenção nomeá-la com a primeira letra maiúscula)
function Carros(marca, modelo, ano) {
    // 'this' é a nova instância de Carro que está sendo criada.
    // Usamos 'this' para adicionar as propriedades a essa nova instância.
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;

    // Métodos também podem ser adicionados ao construtor
    this.descrever = function() {
        console.log(`\nEste carro é um ${this.marca} ${this.modelo} de ${this.ano}.`);
    };
}

// Criando novas instâncias de Carro usando a palavra-chave 'new'
const meuCarro = new Carros('Honda', 'Civic', 2022);
const seuCarro = new Carros('Ford', 'Focus', 2018);

meuCarro.descrever(); // Saída: Este carro é um Honda Civic de 2022.
console.log(seuCarro.marca + '\n'); // Saída: Ford



// -------------------- FUNÇÃO CONSTRUTORA/PROTOTYPE - FORNECIDO

function Moto(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

// Adicionando um método ao prototype
// Agora, todas as instâncias de 'Moto' compartilham o mesmo método 'ligar'
Moto.prototype.ligar = function() {
    console.log(`A ${this.marca} ${this.modelo} está ligada.`);
};

const minhaMoto = new Moto('Yamaha', 'XTZ 250');
minhaMoto.ligar(); // Saída: A Yamaha XTZ 250 está ligada.
