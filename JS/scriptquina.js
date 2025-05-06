// script.js
document.getElementById('sorteioForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const qtdNumeros = parseInt(document.getElementById('quantidadeNumeros').value);

    const qtdJogos = parseInt(document.getElementById('quantidadeJogos').value);
    const resultadoDiv = document.getElementById('resultado');
  
    if (qtdNumeros > 80 || qtdNumeros < 1) {
      alert("Escolha 5 à 15 números dentre os 80 números disponíveis.");
      return;
    }
  
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
  
    while (numeros.length < quantidade) {//cria um loop de repetição que funcionará de acordo com a quantidade de numeros do array
      //for menor que o nuemro da variavel
      const numero = Math.floor(Math.random() * 80);//cria uma variavel numero e dentro dela com o Math.random gera numeros aleatórios
      //e faz * 80 onde gerará numeros de 00 até 80 e o Math.floor é utilizado para arredondar esse numero dividido
  
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
  
    for (let i = 0; i < 25; i++) {//gera os numeros de 0 á 25
      const num = i.toString().padStart(2, '0');//cria uma variavel constante que transforma o i em uma string e garante que se 
      //o numero for menor que 10 deve inserir o 0
      const classe = sorteados.includes(num) ? 'numero sorteado' : 'numero';//verifica se o num foi sorteado dentro do array
      html += `<div class="${classe}">${num}</div>`;//cor diferente para números sorteados
    }
  
    html += '</div>';
    return html;
  }