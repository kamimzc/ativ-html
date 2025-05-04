let jogos = [];
let numerosSorteados = new Set();

// Gera e exibe os 100 números (de 00 a 99, embaralhados)
function gerarNumeros() {
  const container = document.getElementById("numeros");
  container.innerHTML = "";
  const numeros = Array.from({ length: 100 }, (_, i) => i);
  numeros.sort(() => Math.random() - 0.5); // embaralha

  numeros.forEach(num => {
    const span = document.createElement("span");
    span.classList.add("numero");
    span.textContent = num.toString().padStart(2, '0');
    span.onclick = () => selecionarNumero(span);
    container.appendChild(span);
  });
}

// Seleciona até 50 números
function selecionarNumero(elemento) {
  if (elemento.classList.contains("selecionado")) {
    elemento.classList.remove("selecionado");
  } else {
    const selecionados = document.querySelectorAll(".numero.selecionado");
    if (selecionados.length < 50) {
      elemento.classList.add("selecionado");
    } else {
      alert("Você já selecionou 50 números!");
    }
  }
}

// Adiciona os 50 números selecionados como um jogo
function adicionarJogo() {
  const selecionados = [...document.querySelectorAll(".numero.selecionado")];
  if (selecionados.length !== 50) {
    alert("Você deve selecionar 50 números.");
    return;
  }

  const jogo = selecionados.map(el => el.textContent);
  jogos.push(jogo);

  alert(`Jogo ${jogos.length} salvo com sucesso!`);
  gerarNumeros(); // reinicia a tabela para novo jogo
}

// Sorteia 20 números de 00 a 99 e destaca nos jogos
function sortear() {
  numerosSorteados = new Set();
  while (numerosSorteados.size < 20) {
    numerosSorteados.add(Math.floor(Math.random() * 100).toString().padStart(2, '0'));
  }

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.textContent = [...numerosSorteados].sort().join(", ");

  // Marcar os números sorteados nos jogos
  const numeros = document.querySelectorAll(".numero");
  numeros.forEach(el => {
    const num = el.textContent;
    if (numerosSorteados.has(num)) {
      el.classList.add("sorteado");
    }
  });
}

gerarNumeros(); // inicial
