/* Tomas Javier Rodriguez Ocampo */

/* Ejercicio N°15 */

function calcularInversionTierra() {
    var valor_tierra = parseFloat(document.getElementById("valor_tierra").value);
    var interes_anual = 0.15; // 15% de interes anual

    if ( isNaN(valor_tierra)) {
        alert("Por favor, complete todos los campos antes de calcular.");
    } else {
        var anos = 2023 - 1961;
        var caja_ahorros = valor_tierra;

        var resultado_inversionHTML = "";
        resultado_inversionHTML +=`
            <!-- Linea -->
            <div class='border-top border-muted mb-3'></div>
            <!-- Inversion Inicial -->
            <h4 class='card-title text-center mb-3'>Inversion Inicial:</h4>
            <p class='fs-0 text-center mb-3'>Inversion inicial: $ ${valor_tierra}</p>
        `;
        
        for (var i = 1; i <= anos; i++) {
            caja_ahorros = caja_ahorros * (1 + interes_anual);
        }

        resultado_inversionHTML +=`
            <!-- Linea -->
            <div class='border-top border-muted mb-3'></div>
            <!-- Valor Inversion Actual -->
            <h4 class='card-title text-center mb-3'>Valor Inversion Actual:</h4>
            <p class='fs-0 text-center mb-3'>Total de Años que pasaron: ${anos} años</p>
            <p class='fs-0 text-center mb-3'>Valor actual de la inversion: $ ${caja_ahorros.toFixed(2)}</p>
        `;

        document.getElementById("resultado_inversion_tierra").innerHTML = resultado_inversionHTML;
        
        // Ocultar Boton Calcular Inversion Tierra
        document.getElementById("boton_calcular_inversion_tierra").classList.add("d-none");

        // Mostrar Boton Reinicio Datos Inversion Tierra
        document.getElementById("boton_reiniciar_inversion_tierra").classList.remove("d-none");
    }
}

function reiniciarDatosInversionTierra() {
    document.getElementById("valor_tierra").value = "";
    document.getElementById("resultado_inversion_tierra").innerHTML = "";

    // Mostrar Boton Calcular Inversion Tierra
    document.getElementById("boton_calcular_inversion_tierra").classList.remove("d-none");

    // Ocultar Boton Reinicio Datos Inversion Tierra
    document.getElementById("boton_reiniciar_inversion_tierra").classList.add("d-none");
}