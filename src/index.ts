let valor:any = document.getElementById('valor')
let valor1:number = 0

function adicionar(): void {
    valor1 = valor1 + 1
    valor.innerHTML = valor1
}

function remover(): void {
    valor1 = valor1 - 1
    valor.innerHTML = valor1
}