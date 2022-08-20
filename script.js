

function calcularValorHora () {

    var valorPorMesInput = document.querySelector("#ganho-mes")

    var horasPorDiaInput = document.querySelector("#horas-dia")

    console.log(valorPorMesInput)

    var resultadoSpam = document.querySelector("#resposta")

    console.log(resultadoSpam)

    var horasPorDia = horasPorDiaInput.valueAsNumber

    var salarioMensal =valorPorMesInput.valueAsNumber

    var diasTrabalhados = 22
    var totalDeHorasTrabalhadas = horasPorDia * diasTrabalhados  

    var valorPorHora = salarioMensal/totalDeHorasTrabalhadas
    console.log(valorPorHora)

    resultadoSpam.textContent = "R$: " + valorPorHora.toFixed(2)

}

