/* Tomas Javier Rodriguez Ocampo */

/* Ejercicio N°7 */

function calcularInversion() {
    var X = parseInt(document.getElementById("deposito_mensual").value);
    var N = parseInt(document.getElementById("ano_inversion").value);

    if ( isNaN(X) || isNaN(N)) {
        alert("Por favor, complete todos los campos antes de calcular.");
    } else {
        var saldo_actual = 0;
        var inversion_general = 0;
        var resultado_inversionHTML = "";
        resultado_inversionHTML +=`
            <!-- Linea -->
            <div class='border-top border-muted mb-3'></div>
            <!-- Inversion a cabo de los años -->
            <h4 class='card-title text-center mb-3'>Inversion a cabo de los años:</h4>
        `;

        for (var anos = 1; anos <= N; anos++) {
            var saldo_anterior = saldo_actual;
            
            for (var mes = 1; mes <= 12; mes++) {
                saldo_actual = saldo_anterior + X; 
                saldo_anterior = saldo_actual + (saldo_actual * 0.10);
            }

            resultado_inversionHTML += "<!-- Resultado -->";
            resultado_inversionHTML += "<p class='fs-0 text-center mb-3'>El saldo al final del Año "+ anos + ": $" + saldo_actual.toFixed(2) + "</p>"; 
            
            inversion_general += saldo_actual;
        }

        resultado_inversionHTML +=`
            <!-- Linea -->
            <div class='border-top border-muted mb-3'></div>
            <!-- Total Inversion Recaudada de todos los años -->
            <h4 class='card-title text-center mb-3'>Total Inversion Recaudada de todos los años:</h4>
            <!-- Resultado -->
            <p class='fs-0 text-center mb-3'>Inversion recaudada total de todos los años es: $ ${inversion_general.toFixed(2)}</p>
        `;

        document.getElementById("resultado_inversion").innerHTML = resultado_inversionHTML;

        // Ocultar Boton Calcular Inversion
        document.getElementById("boton_calcular_inversion").classList.add("d-none");

        // Mostrar Boton Reinicio Datos Inversion
        document.getElementById("boton_reiniciar_inversion").classList.remove("d-none");
    }
}

function reiniciarDatosInversion() {
    document.getElementById("deposito_mensual").value = "";
    document.getElementById("ano_inversion").value = "";
    document.getElementById("resultado_inversion").innerHTML = "";

    // Mostrar Boton Calcular Inversion
    document.getElementById("boton_calcular_inversion").classList.remove("d-none");

    // Ocultar Boton Reinicio Datos Inversion
    document.getElementById("boton_reiniciar_inversion").classList.add("d-none");
}