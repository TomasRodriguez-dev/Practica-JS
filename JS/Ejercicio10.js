/* Tomas Javier Rodriguez Ocampo */

/* Ejercicio N°10 */

function mostrarVentasIngresadas() {
    var N = parseInt(document.getElementById("cantidad_ventas").value);
    var ventas_a_ingresarHTML = "<h4 class='card-title text-center'>Ingrese las ventas:</h4>";
    
    if (
        isNaN(N)
    ) {
        alert("Por favor, complete todos los campos antes de calcular.");
    } else {
        for (var venta = 1; venta <= N; venta++) {
            ventas_a_ingresarHTML +=`
                <!-- Input y Label Flotante -->
                <div class='form-floating mb-4'>
                    <input type='number' class='form-control' id='valor_ventas${venta}' placeholder='Ingrese valor venta'>
                    <label for='valor_ventas${venta}'>Valor Venta ${venta}</label>
                </div>
            `;
        }

        document.getElementById("ventas_ingresadas").innerHTML = ventas_a_ingresarHTML;

        // Ocultar Boton Mostrar Ventas
        document.getElementById("boton_mostrar_ventas").classList.add("d-none");

        // Mostrar Boton Calcular Cantidad de Ventas
        document.getElementById("boton_calcular_cant_ventas").classList.remove("d-none");
    }
}


function calcularCantVentas() {
    var ventas_10mil_menor = 0;
    var ventas_10mil_20mil = 0;
    var total_10mil_menor = 0;
    var total_10mil_20mil = 0;
    var total_global = 0;
    var N = parseInt(document.getElementById("cantidad_ventas").value);

    for (var venta = 1; venta <= N; venta++) {
        var valor_ventas = parseFloat(document.getElementById("valor_ventas" + venta).value);

        if (
            isNaN(valor_ventas)
        ) {
            alert("Por favor, complete todos los campos antes de calcular.");
            return; 
        }

        if (valor_ventas <= 10000) {
            ventas_10mil_menor++;
            total_10mil_menor += valor_ventas;
        } else if (valor_ventas > 10000 && valor_ventas <= 20000) {
            ventas_10mil_20mil++;
            total_10mil_20mil += valor_ventas;
        }

        total_global += valor_ventas;
    }

    var resultado_ventasHTML = "";

    resultado_ventasHTML +=`
        <!-- Linea -->
        <div class='border-top border-muted mb-3'></div>
        <!-- Resultado Cantidad de Ventas -->
        <h4 class='card-title text-center mb-3'>Resultado Cantidad de Ventas:</h4>        
    `;

    if (ventas_10mil_menor > 0) {
        resultado_ventasHTML +=`
            <!-- Resultado Cantidad de Ventas por 10mil o menor -->
            <h5 class='card-title text-center mb-3'>Ventas por $10.000 o menor:</h5>
            <p class='fs-0 text-center mb-3'>La cantidad de ventas por $10.000 o menos es de ${ventas_10mil_menor}</p>
            <!-- Resultado Total de la venta por 10mil o menor -->
            <p class='fs-0 text-center mb-3'>Total de ventas de $10.000 o menos es de $ ${total_10mil_menor}</p>
        `;
    }

    if (ventas_10mil_20mil > 0) {
        resultado_ventasHTML +=`
            <!-- Resultado Cantidad de Ventas por 10mil y menor de 20mil -->
            <h5 class='card-title text-center mb-3'>Ventas por mas de $10.000 o menor de $20.000:</h5>
            <p class='fs-0 text-center mb-3'>La cantidad de ventas por más de $10.000 y menos de $20.000 es de ${ventas_10mil_20mil}</p>
            <!-- Resultado Total de la venta por mas de 10mil y menor de 20mil -->
            <p class='fs-0 text-center mb-3'>Total de ventas por más de $10.000 y menos de $20.000 es de $ ${total_10mil_20mil}</p>
        `;
    }

    resultado_ventasHTML +=`
        <!-- Linea -->
        <div class='border-top border-muted mb-3'></div>
        <!-- Resultado Monto Global de Ventas -->
        <h4 class='card-title text-center mb-3'> Total Monto Global:</h4>
        <p class='fs-0 text-center mb-3'>El monto global total de todas las ventas es de $ ${total_global}</p>        
    `;

    document.getElementById("resultado_ventas").innerHTML = resultado_ventasHTML;

    // Ocultar Boton Calcular Cantidad de Ventas
    document.getElementById("boton_calcular_cant_ventas").classList.add("d-none");

    // Mostrar Boton Reinicio Datos Cantidad de Ventas
    document.getElementById("boton_reiniciar_cant_ventas").classList.remove("d-none");
}

function reiniciarDatosCantVentas() {
    document.getElementById("cantidad_ventas").value = "";
    document.getElementById("ventas_ingresadas").innerHTML = "";
    document.getElementById("resultado_ventas").innerHTML = "";

    // Mostrar Boton Mostrar Ventas
    document.getElementById("boton_mostrar_ventas").classList.remove("d-none");


    // Ocultar Boton Reinicio Datos Cantidad de Ventas
    document.getElementById("boton_reiniciar_cant_ventas").classList.add("d-none");
}