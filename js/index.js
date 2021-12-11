var valor = document.getElementById('valor');
var valor1 = 0;

function adicionar() {
    valor1 = valor1 + 1;
    valor.innerHTML = valor1;
}

function remover() {
    valor1 = valor1 - 1;
    valor.innerHTML = valor1;
}