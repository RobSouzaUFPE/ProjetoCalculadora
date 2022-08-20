

function calcularValorProjeto () {

    var valorHoraInput = document.querySelector("#valor-hora")

    var horasProjetoInput = document.querySelector("#horas-projeto")

    var resultadoSpam = document.querySelector("#resposta")

    var horasProjeto = horasProjetoInput.valueAsNumber

    var valorHora = valorHoraInput.valueAsNumber

    var totalDeValorProjeto = horasProjeto * valorHora  
    console.log(totalDeValorProjeto)

    resultadoSpam.textContent = "R$: " + totalDeValorProjeto.toFixed(2)

}
