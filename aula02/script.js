function CalcularSoma(){
    // paga os numeros digitados nos campos de entrada 
    var numeroA = parseFloat(document.getElementById(`numeroA`).value);
    var numeroB = parseFloat(document.getElementById(`numeroB`).value);

    // verifica se os numeros são validos (ou seja, se não numeros mesmo)
    if (!isNaN(numeroA) && !isNaN(numeroA)) {
        // Realiza a soma dos numeros 
        var resultado = numeroA + numeroA;

        // exibe o resultado na pagina 
        document.getElementById(`resultado`).innerHTML = "A soma de " + numeroA + " e " + numeroB + " é " + resultado; 
        "A soma sw " + numeroA + " e " + numeroB + " é: " + resultado;
    } else {
        // Se os numeros não forem validos, pede para digitar numeros corretos 
        document.getElementById(`resultado`).innerHTML = "Por favor, digite numeros validos.";
        " Por favor, digite números válidos.";
    }
}