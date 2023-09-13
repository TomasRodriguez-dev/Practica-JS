/* Tomas Javier Rodriguez Ocampo */

/* Ejercicio N°16 */

function mostrarAutosIngresados() {
    var cant_autos = parseInt(document.getElementById("cantidad_autos").value);
    var mostrar_autosHTML = "<h4 class='card-title text-center mb-4'>Ingrese los autos:</h4>";

    if (
        isNaN(cant_autos)
    ) {
        alert("Por favor, complete todos los campos antes de calcular.");
    } else {
        for (var i = 1; i <= cant_autos; i++) {
            mostrar_autosHTML +=`
                <!-- Titulo -->
                <h5 class='card-title mb-3'>Auto ${i}:</h5>
                <!-- Input y Label Flotante -->
                <div class='form-floating mb-4'>
                    <input type='number' class='form-control' id='clave_auto${i}' min='1' max='3' placeholder='Ingrese la clave (1 / 2 / 3)'>
                    <label for='clave_auto${i}'>Clave Auto (1 / 2 / 3)</label>
                </div>
                <!-- Input y Label Flotante -->
                <div class='form-floating mb-4'>
                    <input type='number' class='form-control' id='costo_auto${i}' min='1' placeholder='Ingrese el costo que tiene el auto'>
                    <label for='costo_auto${i}'>Costo Auto</label>
                </div>
            `;
        }
    
        document.getElementById("autos_ingresados").innerHTML = mostrar_autosHTML;

        // Ocultar Boton Mostrar Autos
        document.getElementById("boton_mostrar_autos").classList.add("d-none");

        // Mostrar Boton Calculo Impuestos de Autos
        document.getElementById("boton_calcular_impuesto_autos").classList.remove("d-none");
    }
}   

function calcularImpuestosAutos() {
    var cant_autos = parseInt(document.getElementById("cantidad_autos").value);
    var total_general = 0;
    var total_clave1 = 0;
    var total_clave2 = 0;
    var total_clave3 = 0;
    var resultado_autosHTML = "";

    resultado_autosHTML +=`
        <div class='row'>
            <div class='col-xx1-5 d-flex'> 
                <!-- Margen Carta -->
                <div class='card border-0 flex-fill w-100 mb-4'>
                    <!-- Encabezado Carta --> 
                    <div class='card-header bg-dark border-0 '>
                        <!-- Titulo -->
                        <h6 class='card-header-title text-uppercase text-center text-white'>Tarifa de impuestos</h6>
                    </div>
                    <!-- Cuerpo Carta -->
                    <!-- Tabla -->
                    <div class='table-responsive'> 
                        <table class='table align-middle table-edge table-nowrap mb-0'>
                            <!-- Encabezado Tabla -->
                            <thead class='table-light'>
                                <!-- Informacion Impuesto Auto -->
                                <tr>
                                    <th>Auto</th>
                                    <th>Clave Auto</th>
                                    <th>Costo Auto</th>
                                    <th>Impuesto</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <!-- Cuerpo Tabla -->
                            <tbody>
    `;

    for (var i = 1; i <= cant_autos; i++) {
        var clave_auto = parseInt(document.getElementById("clave_auto" + i).value);
        var costo_auto = parseInt(document.getElementById("costo_auto" + i).value);
        var total = 0;
        var impuesto = 0;

        if (
            isNaN(clave_auto) || isNaN(costo_auto)
        ) {
            alert("Por favor, complete todos los campos antes de calcular.");
            return;
        }

        if (clave_auto == 1) {
            impuesto = costo_auto * 0.10;
            total = costo_auto + impuesto;
            total_clave1 += total;      
        } else if (clave_auto == 2) {
            impuesto = costo_auto * 0.07;
            total = costo_auto + impuesto;
            total_clave2 += total;
        } else if (clave_auto == 3) {
            impuesto = costo_auto * 0.05;
            total = costo_auto + impuesto;
            total_clave3 += total;
        }

        resultado_autosHTML +=`
                                <!-- Resultado ahorro diario -->
                                <tr>
                                    <td>${i}</td>
                                    <td>${clave_auto}</td>
                                    <td>$${costo_auto}</td>
                                    <td>$${impuesto.toFixed(2)}</td>
                                    <td>$${total}</td>
                                </tr>
        `;

        total_general += total;
    }

    resultado_autosHTML +=`
                                    <!-- Encabezado Final -->
                                    <thead class='table-light'>
                                            <!-- Informacion Pagar Total por todos los autos -->
                                            <tr>
                                                <th>Total Clave 1</th>
                                                <th>Total Clave 2</th>
                                                <th>Total Clave 3</th>
                                                <th>--</th>
                                                <th>Total Pagar</th>
                                            </tr>
                                    </thead>
                                    <!-- Cuerpo Final -->
                                    <tbody>
                                        <!-- Resultado Total a Pagar Por todos los Autos  -->
                                        <tr>
                                            <td>$${total_clave1}</td>
                                            <td>$${total_clave2}</td>
                                            <td>$${total_clave3}</td>
                                            <td>--</td>
                                            <td>$${total_general}</td>
                                        </tr>   
                                    </tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById("resultado_impuesto_autos").innerHTML = resultado_autosHTML;

    // Ocultar Boton Calculo Impuestos de Auto
    document.getElementById("boton_calcular_impuesto_autos").classList.add("d-none");

    // Mostrar Boton Reinicio Datos Calculo Impuesto de Auto
    document.getElementById("boton_reiniciar_impuesto_autos").classList.remove("d-none");
}

function reiniciarDatosImpuestosAutos() {
    document.getElementById("cantidad_autos").value = "";
    document.getElementById("autos_ingresados").innerHTML = "";
    document.getElementById("resultado_impuesto_autos").innerHTML = "";

    // Mostrar Boton Mostrar Auto
    document.getElementById("boton_mostrar_autos").classList.remove("d-none");

    // Ocultar Boton Reinicio Datos Calculo Impuesto de Auto
    document.getElementById("boton_reiniciar_impuesto_autos").classList.add("d-none");
}