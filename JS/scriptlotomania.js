// script.js
document.getElementById('sorteioForm').addEventListener('submit', function(e) {
  e.preventDefault();//seleciona o formulário, adiciona para ler o formulário e evita que a pagina recarregua assim que é prenchida

  const qtdNumeros = parseInt(document.getElementById('quantidadeNumeros').value);//const variável constante, nome da varável 
  const qtdJogos = parseInt(document.getElementById('quantidadeJogos').value);
  const resultadoDiv = document.getElementById('resultado');
  //esse codigo cria variáveis constantes e pega o valor delas em string e as passa para numeros inteiros e printa na tela 
  //"quantidadeNumeros" e o valor atual da variável

  if (qtdNumeros > 100 || qtdNumeros < 1) {
    alert("Escolha entre 1 e 100 números.");
    return;
  }
  //se qtdNumetos for maior que 100 e qtdNumeros for menor que 1 então ele emitirá um alerta interropendo a tela com return

  resultadoDiv.innerHTML = "";//zera os jogos anteriores

  for (let j = 0; j < qtdJogos; j++) {//for executa de 0 até a quantidade de jogos estimada pelo usuário
    const jogo = gerarNumerosAleatorios(qtdNumeros);//cria uma variavel constante gerando um array com numeros sorteados
    const titulo = `<h3>Jogo ${j + 1}</h3>`;//usado para printar qual jogo está sendo executado
    const tabela = gerarTabelaComDestacados(jogo);//cria uma tabela com os numeros sorteados
    resultadoDiv.innerHTML += titulo + tabela;//altera o print de qual jogo está sendo executado
  }
});

function gerarNumerosAleatorios(quantidade) {//cria uma função de gerarNumerosAleatorios e a nomeia como quantidade
  const numeros = [];//cria uma variavel constante chamada numeros

  while (numeros.length < quantidade) {//cria um loop de repetição que funcionará enquanto a quantidade de numeros do array
    //for menor que o nuemro da variavel
    const numero = Math.floor(Math.random() * 100);//cria uma variavel numero e dentro dela com o Math.random gera numeros aleatórios
    //e faz * 100 onde gerará numeros de 00 até 99 e o Math.floor é utilizado para arredondar esse numero dividido

    const formatado = numero.toString().padStart(2, '0');//cria uma variavel chamada formatado, torna o valor da variavel 
    //numero para string e depois adiciona o numero 0 antes da string, garantindo que todos os numeros tenham 2 digitos

    if (!numeros.includes(formatado)) {//verifica se o numero formatado ja existe no array numeros
      numeros.push(formatado);//se sim, ele adiciona o numero  formatado ao array
    }
  }

  return numeros.sort();//retorna o resultado do loop e coloca em ordem crescente
}

function gerarTabelaComDestacados(sorteados) {//gera uma tabela com nome "sorteados"
  let html = '<div class="tabela-numeros">';//le um codigo em html puxando a formatação do css

  for (let i = 0; i < 100; i++) {//gera os numeros de 0 á 99
    const num = i.toString().padStart(2, '0');//cria uma variavel constante que transforma o i em uma string e garante que se 
    //o numero for menor que 10 deve inserir o 0
    const classe = sorteados.includes(num) ? 'numero sorteado' : 'numero';//verifica se o num foi sorteado dentro do array
    html += `<div class="${classe}">${num}</div>`;
  }

  html += '</div>';
  return html;
}
