class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
const pessoa1 = new Pessoa("Maria", 20);
const pessoa2 = new Pessoa("Carlos", 28);
pessoa1.apresentar();
pessoa2.apresentar();

////////////////////////////////////////////////////////////////////////////////////////

class ContaBancaria {
    constructor(titular, saldoinicial) {
        this.titular = titular;
        this.saldo = saldoinicial;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    mostrarSaldo() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Saldo: R$ ${this.saldo}`);
    }
}

const minhaConta = new ContaBancaria("João", 1000);
minhaConta.depositar(500);
minhaConta.sacar(300);
minhaConta.mostrarSaldo();

//////////////////////////////////////////////////////////////////////////////

class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    adicionarEstoque(qtd) {
        this.quantidade += qtd;
    }

    vender(qtd) {
        if (qtd <= this.quantidade) {
            this.quantidade -= qtd;
        } else {
            console.log("Estoque insuficiente.");
        }
    }

    mostrarProduto() {
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço: R$${this.preco}`);
        console.log(`Quantidade: ${this.quantidade}`);
    }
}
const meuProduto = new Produto("Notebook", 4500, 5);
meuProduto.adicionarEstoque(5);
meuProduto.vender(2);
meuProduto.mostrarProduto();