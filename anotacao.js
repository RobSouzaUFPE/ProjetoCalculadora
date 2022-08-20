// o que eu preciso?
/* capiturar informações
/* capitular um valor
/* preciso exibir o resultado
*/

//* var pode armazenar tag, informação de texto, número, função...
//* função guarda um comportamento
//* estruturas condicionais: if (se) ou else (senao)
//* interação comm html pelo dom documento html

var name = prompt ("Informe o seu nome:")
console.log(name)

var saldo = 2000
var roupas = 500
var contas = 500

var saldorestante = saldo - (roupas + contas)

console.log(saldorestante)

var titulo = document.querySelector(".cabecalho__titulo")

titulo.textContent = "Título alterado pelo javascript"

function aletrarCorTexto(cor) {
     document.querySelector (".secao__rodape__legenda").slyte.color = cor
     document.querySelector(".secao__rodape__legenda").style.fontStyle = "Italic"
}
function somar(numeroA, numeroB) {
    console.log (numeroA + numeroB)
}
