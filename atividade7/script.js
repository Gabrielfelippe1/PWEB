const n1 = parseFloat(prompt("Digite um número:"));
const n2 = parseFloat(prompt("Digite um número:"));
const n3 = parseFloat(prompt("Digite um número:"));

function maiorTres() {
    alert(Math.max(n1, n2, n3));
}

maiorTres(n1, n2, n3);