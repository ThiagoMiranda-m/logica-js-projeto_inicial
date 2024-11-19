alert("Boas vindas ao jogo do numero secreto");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);

    if(numeroSecreto == chute) {
        break;
    } else {
        if(chute > numeroSecreto) {
            alert(`Onumero secreto é menor que ${chute}`);
        } else {
            alert(`Onumero secreto é maior que ${chute}`);
        }
        
        tentativas++;
    }
    

}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(`Isso ai! Você descobriu o número secreto ${numeroMaximo} com ${tentativas} ${palavraTentativa}`);



