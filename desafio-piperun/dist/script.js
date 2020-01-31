var produtos = [
  {
    nome: "Maçã",
    quantidade: 25
  },
  {
    nome: "Banana",
    quantidade: 12
  },
  {
    nome: "Cenoura",
    quantidade: 13
  }
];

var lista = document.getElementById("lista-nao-ordenada");

function atualizaLista() {
  for (var i=0; i < produtos.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = produtos[i].nome;
    lista.append(li);
  }
}

function adicionaItem(nome_do_produto, quantidade) {
  // Essa é uma feature do ES6 que usa o operador Spread e a técnica de Desestruturação, quais outras poderiam ser aplicadas no código inteiro?
  produtos = [
    ...produtos,
    { 
      nome: nome_do_produto
    }
  ];
  atualizaLista();
}

atualizaLista();