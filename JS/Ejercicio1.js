/* Tomas Javier Rodriguez Ocampo */

/* Ejercicio N°1 */

function calcularSalario() {
    var salarioInicial = parseFloat(document.getElementById("salarioInicial").value);
    var anosTotales = parseInt(document.getElementById("anosTotales").value);
    var incremento = 0.10; // Aumento salarial anual del 10%

    if (
        isNaN(salarioInicial) || isNaN(anosTotales)
    ) {
        alert("Por favor, complete todos los campos antes de calcular.");
    } else {
        var resultadoHTML = "";
        resultadoHTML +=`
            <!-- Linea -->
            <div class='border-top border-muted mb-3'></div>
            <!-- Salario a cabo de los años -->
            <h4 class='card-title text-center mb-3'>Salario a cabo de los años:</h4>
        `;
        
        var salarioTotal = 0;
        var anoInicio = 1;
        var i = 0;

        do {
            var salarioAnual = salarioInicial * Math.pow(1 + incremento, i);
            resultadoHTML += "<!-- Resultado -->";
            resultadoHTML += "<p class='fs-0 text-center mb-3'>El salario en el Año " + (anoInicio + i) + ": $" + salarioAnual.toFixed(2) + "</p>";
            salarioTotal += salarioAnual;     
            i++;
        } while (i < anosTotales);

        resultadoHTML +=`
            <!-- Linea -->
            <div class='border-top border-muted mb-3'></div>
            <!-- Total Recaudado de todos los años -->
            <h4 class='card-title text-center mb-3'>Total Recaudado de todos los años:</h4>
            <!-- Resultado -->
            <p class='fs-0 text-center mb-3'>El salario total de todos los años es de $ ${salarioTotal.toFixed(2)}</p>
        `;

        document.getElementById("resultado").innerHTML = resultadoHTML;
    
        // Ocultar Boton Calcular Salario
        document.getElementById("boton_calcular_salario").classList.add("d-none");

        // Mostrar Boton Reinicio Datos Salario
        document.getElementById("boton_reiniciar_salario").classList.remove("d-none");
    }
}

function reiniciarDatosSalario() {
    document.getElementById("salarioInicial").value = "";
    document.getElementById("anosTotales").value = "";
    document.getElementById("resultado").innerHTML = "";

    // Mostrar Boton Calcular Salario
    document.getElementById("boton_calcular_salario").classList.remove("d-none");

    // Ocultar Boton Reinicio Datos Salario
    document.getElementById("boton_reiniciar_salario").classList.add("d-none");
}