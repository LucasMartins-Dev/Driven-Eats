let prato;
let bebida;
let sobremesa;
let total;
let p;
let b;
let s;

function selecionar_prato(botao) {
  var pratoant = document.querySelector(".selecionadoc");
  prato = 1;
  if (pratoant !== null) {
    pratoant.classList.remove("selecionadoc");
  }
  botao.classList.toggle("selecionadoc");

  var nomec = document.querySelector(".selecionadoc h1");
  nomec = nomec.innerHTML;
  var nome = document.querySelector(".comida-nome");
  nome.innerHTML = nomec;

  var valorc = document.querySelector(".selecionadoc h3");
  valorc = valorc.innerHTML;
  var valor = document.querySelector(".comida-valor");
  valorc = valorc.replace("R$", "");
  valor.innerHTML = valorc;
  valorc = valorc.replace(",", ".");
  valorc = parseFloat(valorc);
  p = valorc;

  if (prato + bebida + sobremesa === 3) {
    var cor = document.querySelector(".conteudo-menu-inferior");
    cor.classList.add("verde");
    cor.classList.remove("cinza");
    cor.innerHTML = "Finalizar Pedido";
  }
}

function selecionar_bebida(botao1) {
  var bebidaant = document.querySelector(".selecionadob");
  bebida = 1;
  if (bebidaant !== null) {
    bebidaant.classList.remove("selecionadob");
  }
  botao1.classList.toggle("selecionadob");
  var nomec = document.querySelector(".selecionadob h1");
  nomec = nomec.innerHTML;
  var nome = document.querySelector(".bebida-nome");
  nome.innerHTML = nomec;

  var valorc = document.querySelector(".selecionadob h3");
  valorc = valorc.innerHTML;
  var valor = document.querySelector(".bebida-valor");
  valorc = valorc.replace("R$", "");
  valor.innerHTML = valorc;
  valorc = valorc.replace(",", ".");
  valorc = parseFloat(valorc);
  b = valorc;

  if (prato + bebida + sobremesa === 3) {
    var cor = document.querySelector(".conteudo-menu-inferior");
    cor.classList.add("verde");
    cor.classList.remove("cinza");
    cor.innerHTML = "Finalizar Pedido";
  }
}

function selecionar_sobremesa(botao2) {
  var sobremesaant = document.querySelector(".selecionados");
  sobremesa = 1;
  if (sobremesaant !== null) {
    sobremesaant.classList.remove("selecionados");
  }
  botao2.classList.toggle("selecionados");
  var nomec = document.querySelector(".selecionados h1");
  nomec = nomec.innerHTML;
  var nome = document.querySelector(".sobremesa-nome");
  nome.innerHTML = nomec;

  var valorc = document.querySelector(".selecionados h3");
  valorc = valorc.innerHTML;
  var valor = document.querySelector(".sobremesa-valor");
  valorc = valorc.replace("R$", "");
  valor.innerHTML = valorc;
  valorc = valorc.replace(",", ".");
  valorc = parseFloat(valorc);
  s = valorc;

  if (prato + bebida + sobremesa === 3) {
    var cor = document.querySelector(".conteudo-menu-inferior");
    cor.classList.add("verde");
    cor.classList.remove("cinza");
    cor.innerHTML = "Finalizar Pedido";
  }
}

function habilitar() {
  var confirmar = document.querySelector(".revisar-pedido");
  var confirmar1 = document.querySelector(".pedido-revisado");

  var valor = document.querySelector(".total-valor");
  total = p + b + s;
  total = total.toFixed(2);
  valor.innerHTML = "R$ " + total;

  confirmar.classList.add("final");
  confirmar1.classList.add("final");
}

function desabilitar() {
  var cancelar = document.querySelector(".revisar-pedido");
  var cancelar1 = document.querySelector(".pedido-revisado");

  cancelar.classList.remove("final");
  cancelar1.classList.remove("final");
}

function pedir() {
  let comid = document.querySelector(".comida-nome");
  comid = comid.innerHTML;
  let bebid = document.querySelector(".bebida-nome");
  bebid = bebid.innerHTML;
  let sobre = document.querySelector(".sobremesa-nome");
  sobre = sobre.innerHTML;
  let tota = document.querySelector(".total-valor");
  tota = tota.innerHTML;
  let nome = prompt("Digite seu Nome");
  let end = prompt("Digite seu Endereço");

  let msg =
    "Olá, gostaria de fazer o pedido:\n- Prato: " +
    comid +
    "\n- Bebida: " +
    bebid +
    "\n- Sobremesa: " +
    sobre +
    "\nTotal: " +
    tota +
    "\n\nNome: " +
    nome +
    "\nEndereço: " +
    end;
  window.open("https://wa.me/5524998134569?text=" + encodeURIComponent(msg));

  var cancelar = document.querySelector(".revisar-pedido");
  var cancelar1 = document.querySelector(".pedido-revisado");

  cancelar.classList.remove("final");
  cancelar1.classList.remove("final");
}
