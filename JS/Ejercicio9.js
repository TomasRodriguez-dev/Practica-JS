/* Tomas Javier Rodriguez Ocampo */

/* Ejercicio N°9 */

function mostrarBilletesMonedas() {
    var cant_billetes = parseInt(document.getElementById("cantidad_billetes").value);
    var cant_monedas = parseFloat(document.getElementById("cantidad_monedas").value);
    var mostrar_billetes_monedasHTML = "";
    mostrar_billetes_monedasHTML += `
        <h4 class='card-title text-center mb-4'>Ingrese los Billetes:</h4>
        <!-- Valor Requerido -->
        <p class='fs-0 text-center mb-3'>Valor requerido ($1000 / $500 / $200 / $100 / $50 / $20 / $10)</p>
    `;

    if (
        isNaN(cant_billetes) || isNaN(cant_monedas)
    ) {
        alert("Por favor, complete todos los campos antes de calcular.");
        return;
    }

    for (var billete = 1; billete <= cant_billetes; billete++) {
        mostrar_billetes_monedasHTML += `
            <!-- Titulo -->
            <h5 class='card-title mb-3'>Billete ${billete}:</h5>
            <!-- Input y Label Flotante -->
            <div class='form-floating mb-4'>
                <input type='number' class='form-control' id='valor_billete${billete}' min='1' placeholder='Ingrese el valor del billete valor requerido ($1000 / $500 / $200 / $100 / $50 / $20 / $10)'>
                <label for='valor_billete${billete}'>Ingrese el valor del billete</label>
            </div>
        `;
    }

    mostrar_billetes_monedasHTML += `
        <h4 class='card-title text-center mb-4'>Ingrese las Monedas:</h4>
        <!-- Valor Requerido -->
        <p class='fs-0 text-center mb-3'>Valor requerido ($10 / $5 / $2 / $1 / $0.50 / $0.25 / $0.10)</p>
    `;

    for (var moneda = 1; moneda <= cant_monedas; moneda++) {
        mostrar_billetes_monedasHTML += `
            <!-- Titulo -->
            <h5 class='card-title mb-3'>Moneda ${moneda}:</h5>
            <!-- Input y Label Flotante -->
            <div class='form-floating mb-4'>
                <input type='number' class='form-control' id='valor_moneda${moneda}' min='1' placeholder='Ingrese el valor de la moneda valor requerido ($10 / $5 / $2 / $1 / $0.50 / $0.25 / $0.10)'>
                <label for='valor_moneda${moneda}'>Ingrese el valor de la moneda</label>
            </div>
        `;
    }

    document.getElementById("billetes_monedas_ingresados").innerHTML = mostrar_billetes_monedasHTML;

    // Ocultar Boton Mostrar Billetes y Monedas
    document.getElementById("boton_mostrar_billetes_monedas").classList.add("d-none");

    // Mostrar Boton Calculo Recaudacion de la Caja
    document.getElementById("boton_calcular_total_caja").classList.remove("d-none");
}

function calcularTotalCaja() {
    var cant_billetes = parseInt(document.getElementById("cantidad_billetes").value);
    var cant_monedas = parseFloat(document.getElementById("cantidad_monedas").value);
    var total_billete = 0;
    var total_moneda = 0;
    var resultado_total_cajaHTML = "";

    resultado_total_cajaHTML += `
        <!-- Linea -->
        <div class='border-top border-muted mb-3'></div>
        <!-- Billetes Ingresados y Total Recaudado en Billetes -->
        <h5 class='card-title text-center mb-3'>Billetes Ingresados y Total Recaudado en Billetes:</h5>
    `;

    for (var billete = 1; billete <= cant_billetes; billete++) {
        var valor_billete = parseFloat(document.getElementById("valor_billete" + billete).value);
        if (isNaN(valor_billete) || ![10, 20, 50, 100, 200, 500, 1000].includes(valor_billete)) {
            alert("Por favor, complete todos los campos con valores requeridos antes de calcular.");
            return;
        } else {
            resultado_total_cajaHTML += `
                <!-- Valor Billetes -->
                <p class='fs-0 text-center mb-3'>El billete ${billete} el cual su valor es de $${valor_billete.toFixed(2)}</p>
            `;
            total_billete += valor_billete;
        }
    }

    resultado_total_cajaHTML += `
        <!-- Resultado Total Billetes -->
        <p class='fs-0 text-center mb-3'>El total recaudado en billetes es de $${total_billete.toFixed(2)}</p>
        <!-- Linea -->
        <div class='border-top border-muted mb-3'></div>
        <!-- Monedas Ingresadas y Total Valor Monedas -->
        <h5 class='card-title text-center mb-3'>Monedas Ingresadas y Total Recaudado en Monedas:</h5>
    `;

    for (var moneda = 1; moneda <= cant_monedas; moneda++) {
        var valor_moneda = parseFloat(document.getElementById("valor_moneda" + moneda).value);

        if (isNaN(valor_moneda) || ![0.10, 0.25, 0.50, 1, 2, 5, 10].includes(valor_moneda)) {
            alert("Por favor, complete todos los campos con valores requeridos antes de calcular.");
            return;
        } else {
            resultado_total_cajaHTML += `
                <!-- Valor Monedas -->
                <p class='fs-0 text-center mb-3'>La moneda ${moneda} el cual su valor es de $${valor_moneda.toFixed(2)}</p>
            `;
            total_moneda += valor_moneda;
        }
    }

    resultado_total_cajaHTML += `
        <!-- Resultado Total Monedas -->
        <p class='fs-0 text-center mb-3'>El total recaudado en monedas es de $${total_moneda.toFixed(2)}</p>
        <!-- Linea -->
        <div class='border-top border-muted mb-3'></div>
        <!-- Monedas Ingresadas y Total Valor Monedas -->
        <h5 class='card-title text-center mb-3'>Total Recaudado de la Caja entre Billetes y Monedas:</h5>
    `;

    var total_caja = total_billete + total_moneda;

    resultado_total_cajaHTML += `
        <!-- Resultado Total Monedas -->
        <p class='fs-0 text-center mb-3'>El total recaudado entre billetes y monedas es de $${total_caja.toFixed(2)}</p>
    `;

    document.getElementById("resultado_total_caja").innerHTML = resultado_total_cajaHTML;

    // Ocultar Boton Calcular Racaudacion Caja
    document.getElementById("boton_calcular_total_caja").classList.add("d-none");

    // Mostrar Boton Reinicio Datos Billetes y Monedas
    document.getElementById("boton_reiniciar_datos_billetes_monedas").classList.remove("d-none");
}


function reiniciarDatosBilletesMonedas() {
    document.getElementById("cantidad_billetes").value = "";
    document.getElementById("cantidad_monedas").value = "";
    document.getElementById("billetes_monedas_ingresados").innerHTML = "";
    document.getElementById("resultado_total_caja").innerHTML = "";

    // Mostrar Boton Mostrar Billetes y Monedas
    document.getElementById("boton_mostrar_billetes_monedas").classList.remove("d-none");

    // Ocultar Boton Reinicio Datos Billetes y Monedas
    document.getElementById("boton_reiniciar_datos_billetes_monedas").classList.add("d-none");
}
