// Seletores dos elementos
const nomeProd = document.getElementById("nomeProd");
const valorProd = document.getElementById("valorProd");
const codigoProd = document.getElementById("codigoProd");
const tipoProd = document.getElementById("tipoProd");
const dataProd = document.getElementById("dataProd");

const btnAdicionar = document.getElementById("adicionarProd");
const btnRemover = document.getElementById("removerProd");
const btnDesconto = document.getElementById("aplicaDesconto");

const valorTotalEl = document.getElementById("valorTotal");
const valorFinalEl = document.getElementById("valorFinal");
const lista = document.getElementById("lista_prod");

let produtos = [];
let desconto = 0;

// Mostrar/ocultar validade conforme tipo
tipoProd.addEventListener("change", () => {
  if (tipoProd.value === "alimentacao" || tipoProd.value === "limpeza") {
    dataProd.style.display = "block";
  } else {
    dataProd.style.display = "none";
    dataProd.value = "";
  }
});

// Atualiza valores total e final
function atualizarValores() {
  const total = produtos.reduce((acc, p) => acc + p.valor, 0);
  const final = total - (total * desconto / 100);

  valorTotalEl.textContent = `Valor Total: R$ ${total.toFixed(2)}`;
  valorFinalEl.textContent = `Valor Final: R$ ${final.toFixed(2)}`;
}

// Renderiza a lista na tabela
function renderizarLista() {
  lista.innerHTML = "";
  produtos.forEach(p => {
    const linha = document.createElement("tr");

    const tdNome = document.createElement("td");
    tdNome.textContent = p.nome;

    const tdTipo = document.createElement("td");
    tdTipo.textContent = p.tipo;

    const tdValor = document.createElement("td");
    tdValor.textContent = `R$ ${p.valor.toFixed(2)}`;

    linha.appendChild(tdNome);
    linha.appendChild(tdTipo);
    linha.appendChild(tdValor);

    lista.appendChild(linha);
  });
  atualizarValores();
}

// Adicionar produto
btnAdicionar.addEventListener("click", () => {
  const nome = nomeProd.value.trim();
  const valor = parseFloat(valorProd.value);
  const codigo = codigoProd.value.trim();
  const tipo = tipoProd.value;
  const validade = dataProd.value.trim();

  // Validação básica
  if (!nome || isNaN(valor) || valor <= 0 || !codigo) {
    alert("Preencha nome, valor (> 0) e código corretamente.");
    return;
  }

  // Validade obrigatória para alimentação/limpeza
  if ((tipo === "alimentacao" || tipo === "limpeza") && !validade) {
    alert("Informe a data de validade para este tipo de produto.");
    return;
  }

  const produto = { nome, valor, codigo, tipo, validade };
  produtos.push(produto);
  renderizarLista();

  // Limpa campos
  nomeProd.value = "";
  valorProd.value = "";
  codigoProd.value = "";
  tipoProd.value = "outro";
  dataProd.value = "";
  dataProd.style.display = "none";
});

// Remover produto por código
btnRemover.addEventListener("click", () => {
  const codigo = codigoProd.value.trim();
  if (!codigo) {
    alert("Informe o código do produto para remover.");
    return;
  }

  const antes = produtos.length;
  produtos = produtos.filter(p => p.codigo !== codigo);
  const depois = produtos.length;

  if (antes === depois) {
    alert("Produto não encontrado.");
  } else {
    renderizarLista();
    alert("Produto removido com sucesso.");
  }

  codigoProd.value = "";
});

// Aplicar desconto
btnDesconto.addEventListener("click", () => {
  const valorDesconto = prompt("Digite a porcentagem de desconto (ex: 10 para 10%)");
  const porcentagem = parseFloat(valorDesconto);

  if (isNaN(porcentagem) || porcentagem < 0 || porcentagem > 100) {
    alert("Desconto inválido. Use um número entre 0 e 100.");
    return;
  }

  desconto = porcentagem;
  atualizarValores();
});

// Inicializa os totais na primeira carga
atualizarValores();