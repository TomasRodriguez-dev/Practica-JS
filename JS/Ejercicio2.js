/* Tomas Javier Rodriguez Ocampo */

/* Ejercicio N°2 */

function mostrarTipoHamburguesa() {
    var N = parseInt(document.getElementById("cantidad_hamburguesas").value);
    var mostrar_hamburguesaHTML = "";
    mostrar_hamburguesaHTML +=`
        <h4 class='card-title text-center mb-4'>Ingrese las hamburguesas:</h4>
        <!-- Valor Requerido -->
        <p class='fs-0 text-center mb-3'>Valor requerido a ingresar (S = simple / D = doble / T = triple)</p>
    `;

    if (
        isNaN(N)
    ) {
        alert("Por favor, complete todos los campos antes de calcular.");
    } else {
        for (var i = 1; i <= N; i++) {
            mostrar_hamburguesaHTML +=`
                <!-- Titulo -->
                <h5 class='card-title mb-3'>Hamburguesa ${i}:</h5>
                <!-- Input y Label Flotante -->
                <div class='form-floating mb-4'>
                    <input type='text' class='form-control' id='hamburguesa${i}' placeholder='Ingrese el tipo de hamburguesa'>
                    <label for='hamburguesa${i}'>Ingrese el tipo de hamburguesa</label>
                </div>
            `;
        }

        mostrar_hamburguesaHTML +=`
            <!-- Titulo -->
            <h4 class='card-title text-center mb-4'>Metodo de Pago:</h4>
            <!-- Input y Label Flotante -->
            <div class='form-floating mb-4'>
                <input type='text' class='form-control' id='tarjeta' placeholder='¿Desea pagar con tarjeta de credito? (SI / NO)'>
                <label for='tarjeta'>¿Desea pagar con tarjeta de credito? (SI / NO)</label>
            </div>
        `;
    
        document.getElementById("pedido_hamburguesa").innerHTML = mostrar_hamburguesaHTML;

        // Ocultar Boton Mostrar Tipo Hamburguesa
        document.getElementById("boton_mostrar_hamburguesas").classList.add("d-none");

        // Mostrar Boton Calculo Total a Pagar por la compra 
        document.getElementById("boton_calcular_pago").classList.remove("d-none");
    }
}

function calcularPago() {
    var precio_S = 20;
    var precio_D = 25;
    var precio_T = 30;
    var total_pedido = 0;
    var N = parseInt(document.getElementById("cantidad_hamburguesas").value);
    var resultado_hamburguesasHTML = "";
    resultado_hamburguesasHTML +=`
    <div class='row'>
        <div class='col-xx1-5 d-flex'> 
            <!-- Margen Carta -->
            <div class='card border-0 flex-fill w-100 mb-4'>
                <!-- Encabezado Carta --> 
                <div class='card-header bg-dark border-0 '>
                    <!-- Titulo -->
                    <h6 class='card-header-title text-uppercase text-center text-white'>Detalle Compra</h6>
                </div>
                <!-- Cuerpo Carta -->
                <!-- Tabla -->
                <div class='table-responsive'> 
                    <table class='table align-middle table-edge table-nowrap mb-0'>
                        <!-- Encabezado Tabla -->
                        <thead class='table-light'>
                            <!-- Informacion Compra -->
                            <tr>
                                <th>Hamburguesa</th>
                                <th>Tipo Hamburguesa</th>
                                <th>Precio Hamburguesa</th>
                            </tr>
                        </thead>
                        <!-- Cuerpo Tabla -->
                        <tbody>
    `;

    for (var i = 1; i <= N; i++) {
        var tipo_hamburguesa = document.getElementById("hamburguesa" + i).value.toUpperCase();

        while (
            tipo_hamburguesa !== "S" && tipo_hamburguesa !== "s" &&
            tipo_hamburguesa !== "D" && tipo_hamburguesa !== "d" &&
            tipo_hamburguesa !== "T" && tipo_hamburguesa !== "t"
        ) {
            alert("Respuesta no válida. Por favor, ingrese S / D / T");
            return;
        }

        var costo_hamburguesa = 0;
                
        if (tipo_hamburguesa === "S" || tipo_hamburguesa === "s") {
            costo_hamburguesa = precio_S;
        } else if (tipo_hamburguesa === "D" || tipo_hamburguesa === "d") {
            costo_hamburguesa = precio_D;
        } else if (tipo_hamburguesa === "T" || tipo_hamburguesa === "t") {
            costo_hamburguesa = precio_T;
        }        

        resultado_hamburguesasHTML +=`
                            <!-- Mostrar Detalle Hamburguesa  -->
                            <tr>
                                <td>${i}</td>
                                <td>${tipo_hamburguesa}</td>
                                <td>$${costo_hamburguesa}</td>
                            </tr>
        `;
        
        total_pedido += costo_hamburguesa;
    }

    var respuesta = document.getElementById("tarjeta").value.toUpperCase();

    while (
        respuesta !== "SI" && respuesta !== "si" && 
        respuesta !== "NO" && respuesta !== "no"
    ) {
        alert("Respuesta no válida. Por favor, ingrese SI o NO");
        return;
    }

    resultado_hamburguesasHTML +=`
                            <!-- Encabezado Final -->
                            <thead class='table-light'>
                                    <!-- Informacion Total a Pagar Compra -->
                                    <tr>
                                        <th>Total Hamburguesas Pedida</th>
                                        <th>Cargo Tarjeta</th>
                                        <th>Total a Pagar</th>
                                    </tr>
                            </thead>
                            <!-- Cuerpo Final -->
                            <tbody>
                                <!-- Resultado Total a Pagar -->
                                <tr>
                                    <td>${N}</td>
    `;

    if (respuesta === "SI" || respuesta === "si") {
        var cargo_tarjeta = total_pedido * 0.05;
        var total_compra = total_pedido + cargo_tarjeta;
        resultado_hamburguesasHTML +=`
                                    <td>Credito - 5%</td>
                                    <td>$${total_compra}</td>
        `;
    } else {
        resultado_hamburguesasHTML +=`
                                    <td>Efectivo - Sin Cargo</td>
                                    <td>$${total_pedido}</td>
        `;
    }

    resultado_hamburguesasHTML +=`
                                </tr>
                            </tbody>
                        </tbody>
                    </div> 
                </div>
            </div>
        </div>
    </div>        
    `;

    document.getElementById("resultado_hamburguesas").innerHTML = resultado_hamburguesasHTML; 

    // Ocultar Boton Calculo Total a Pagar por la compra
    document.getElementById("boton_calcular_pago").classList.add("d-none");

    // Mostrar Boton Reinicio Datos Hamburguesas
    document.getElementById("boton_reiniciar_datos_hamburguesas").classList.remove("d-none");
}

function reiniciarDatosHamburguesas() {
    document.getElementById("cantidad_hamburguesas").value = "";
    document.getElementById("pedido_hamburguesa").innerHTML = "";
    document.getElementById("resultado_hamburguesas").innerHTML = "";

    // Mostrar Boton Mostrar Tipo Hamburguesa
    document.getElementById("boton_mostrar_hamburguesas").classList.remove("d-none");


    // Ocultar Boton Reinicio Datos Hamburguesas
    document.getElementById("boton_reiniciar_datos_hamburguesas").classList.add("d-none");
}