function pegarValores() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    return { n1, n2 };
}

function mostrarResultado(valor) {
    document.getElementById("resultado").innerText = valor;
}

function somar() {
    let { n1, n2 } = pegarValores();
    mostrarResultado(n1 + n2);
}

function subtrair() {
    let { n1, n2 } = pegarValores();
    mostrarResultado(n1 - n2);
}

function multiplicar() {
    let { n1, n2 } = pegarValores();
    mostrarResultado(n1 * n2);
}

function dividir() {
    let { n1, n2 } = pegarValores();
    
    if (n2 === 0) {
        mostrarResultado("Erro: divisão por zero");
    } else {
        mostrarResultado(n1 / n2);
    }
}