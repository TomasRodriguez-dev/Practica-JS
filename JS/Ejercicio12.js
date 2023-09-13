/* Tomas Javier Rodriguez Ocampo */

/* Ejercicio N°12 */

function mostrarTrabajadoresIngresados() {
    var N = parseInt(document.getElementById("cantidad_trabajadores").value);
    var mostrar_trabajadoresHTML = "<h4 class='card-title text-center'>Ingrese los trabajadores:</h4>";

    if (
        isNaN(N)
    ) {
        alert("Por favor, complete todos los campos antes de calcular.");
    } else {
        for (var i = 1; i <= N; i++) {
            mostrar_trabajadoresHTML +=`
                <!-- Titulo -->
                <h5 class='card-title mb-3'>Trabajador ${i}:</h5>
                <!-- Input y Label Flotante -->
                <div class='form-floating mb-4'>
                    <input type='text' class='form-control' id='nombre_trabajador${i}' placeholder='Ingrese el nombre completo del trabajador'>
                    <label for='nombre_trabajador${i}'>Nombre Completo</label>
                </div>
                <!-- Input y Label Flotante -->
                <div class='form-floating mb-4'>
                    <input type='number' class='form-control' id='dni_trabajador${i}' min='1' placeholder='Ingrese el DNI del trabajador'>
                    <label for='dni_trabajador${i}'>DNI</label>
                </div>
                <!-- Input y Label Flotante -->
                <div class='form-floating mb-4'>
                    <input type='number' class='form-control' id='horas_trabajadas${i}' min='1' placeholder='Ingrese las horas trabajadas'>
                    <label for='horas_trabajadas${i}'>Horas Trabajadas</label>
                </div>
                <!-- Input y Label Flotante -->
                <div class='form-floating mb-4'>
                    <input type='number' class='form-control' id='sueldo_por_hora${i}' min='1' placeholder='Ingrese el sueldo por hora trabajada'>
                    <label for='sueldo_por_hora${i}'>Sueldo por hora trabajada</label>
                </div>
            `;
        }
    
        document.getElementById("trabajadores_ingresados").innerHTML = mostrar_trabajadoresHTML;

        // Ocultar Boton Mostrar Trabajadores
        document.getElementById("boton_mostrar_trabajadores").classList.add("d-none");

        // Mostrar Boton Calculo Sueldo Trabajadores
        document.getElementById("boton_calcular_sueldo_trabajadores").classList.remove("d-none");
    }
}

function calcularSueldoTrabajadores() {
    var N = parseInt(document.getElementById("cantidad_trabajadores").value);
    var resultado_sueldoHTML = "";

    resultado_sueldoHTML += `
    <div class='row'>
            <div class='col-xx1-5 d-flex'> 
                <!-- Margen Carta -->
                <div class='card border-0 flex-fill w-100 mb-4'>
                    <!-- Encabezado Carta --> 
                    <div class='card-header bg-dark border-0 '>
                        <!-- Titulo -->
                        <h6 class='card-header-title text-uppercase text-center text-white'>Sueldos Semanales</h6>
                    </div>
                    <!-- Cuerpo Carta -->
                    <!-- Tabla -->
                    <div class='table-responsive'> 
                        <table class='table align-middle table-edge table-nowrap mb-0'>
                            <!-- Encabezado Tabla -->
                            <thead class='table-light'>
                                <!-- Informacion Impuesto Auto -->
                                <tr>
                                    <th>Trabajador</th>
                                    <th>Nombre</th>
                                    <th>DNI</th>
                                    <th>Descuento</th>
                                    <th>Sueldo Semanal Total</th>
                                </tr>
                            </thead>
                            <!-- Cuerpo Tabla -->
                            <tbody>
    `;

    for (var i = 1; i <= N; i++) {
        var nombre_trabajador = document.getElementById("nombre_trabajador" + i).value;
        var dni_trabajador = parseInt(document.getElementById("dni_trabajador" + i).value);
        var horas_trabajadas = parseInt(document.getElementById("horas_trabajadas" + i).value);
        var sueldo_por_hora = parseFloat(document.getElementById("sueldo_por_hora" + i).value);
        var sueldo_semanal = horas_trabajadas * sueldo_por_hora;
        var descuento = 0;

        if (
            nombre_trabajador.trim() === "" || isNaN(dni_trabajador) || isNaN(horas_trabajadas) || isNaN(sueldo_por_hora)
        ) {
            alert("Por favor, complete todos los campos antes de calcular.");
            return;
        }

        if (sueldo_por_hora >= 0 && sueldo_por_hora <= 149) {
            descuento = sueldo_semanal * 0.05;
        } else if (sueldo_por_hora >= 150 && sueldo_por_hora <= 299) {
            descuento = sueldo_semanal * 0.07;
        } else if (sueldo_por_hora >= 300 && sueldo_por_hora <= 450) {
            descuento = sueldo_semanal * 0.09;
        } else {
            sueldo_semanal;
        }

        var sueldo_semanal_total = sueldo_semanal - descuento;

        resultado_sueldoHTML += `
            <tr>
                <td>${i}</td>
                <td>${nombre_trabajador}</td>
                <td>${dni_trabajador}</td>
                <td>${horas_trabajadas}hs</td>
                <td>$${descuento.toFixed(2)}</td>
                <td>$${sueldo_semanal_total.toFixed(2)}</td>
            </tr>
        `;
    }

    resultado_sueldoHTML += `
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    `;

    document.getElementById("resultado_sueldo").innerHTML = resultado_sueldoHTML;

    // Ocultar Botón de Cálculo de Sueldo de Trabajadores
    document.getElementById("boton_calcular_sueldo_trabajadores").classList.add("d-none");

    // Mostrar Botón de Reinicio de Datos de Cálculo de Sueldo de Trabajadores
    document.getElementById("boton_reiniciar_datos_trabajadores").classList.remove("d-none");
}




function reiniciarDatosTrabajadores() {
    document.getElementById("cantidad_trabajadores").value = "";
    document.getElementById("trabajadores_ingresados").innerHTML = "";
    document.getElementById("resultado_sueldo").innerHTML = "";

    // Mostrar Boton Mostrar Trabajadores
    document.getElementById("boton_mostrar_trabajadores").classList.remove("d-none");


    // Ocultar Boton Reinicio Datos Calculo Sueldo Trabajadores
    document.getElementById("boton_reiniciar_datos_trabajadores").classList.add("d-none");
}