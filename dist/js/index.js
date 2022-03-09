"use strict";
let valor = document.getElementById('valor');
let valor1 = 0;
function adicionar() {
    valor1 = valor1 + 1;
    valor.innerHTML = valor1;
}
function remover() {
    valor1 = valor1 - 1;
    valor.innerHTML = valor1;
}
