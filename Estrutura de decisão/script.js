function verificar() {
    let num = Number(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    // Estrutura de decisão (encadeada)
    if (num > 0) {
        resultado.innerText = "Número POSITIVO";
    } 
    else if (num < 0) {
        resultado.innerText = "Número NEGATIVO";
    } 
    else {
        resultado.innerText = "Número ZERO";
    }
}