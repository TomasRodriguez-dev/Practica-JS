/* Tomas Javier Rodriguez Ocampo */

/* Ejercicio N°11 */

function mostrarAlumnosIngresados() {
    var N = parseInt(document.getElementById("cantidad_alumnos").value);
    var mostrar_alumnosHTML = "";

    if (
        isNaN(N)
    ) {
        alert("Por favor, complete todos los campos antes de calcular.");
    } else {
        for (var i = 1; i <= N; i++) {
            mostrar_alumnosHTML +=`
                <!-- Titulo -->
                <h5 class='card-title mb-3'>Alumno ${i}:</h5>
                <!-- Input y Label Flotante -->
                <div class='form-floating mb-4'>
                    <input type='text' class='form-control' id='nombre_alumno${i}' placeholder='Ingrese el nombre completo del alumno'>
                    <label for='nombre_alumno${i}'>Nombre Completo</label>
                </div>
                <!-- Input y Label Flotante -->
                <div class='form-floating mb-4'>
                    <input type='number' class='form-control' id='dni_alumno${i}' min='1' placeholder='Ingrese el DNI del alumno'>
                    <label for='dni_alumno${i}'>DNI</label>
                </div>
                <!-- Input y Label Flotante -->
                <div class='form-floating mb-4'>
                    <input type='number' class='form-control' id='calificacion_alumno${i}' min='1' max='10' placeholder='Ingrese la calificacion del alumno'>
                    <label for='calificacion_alumno${i}'>Calificacion Numerica</label>
                </div>
            `;
        }
    
        document.getElementById("alumnos_ingresados").innerHTML = mostrar_alumnosHTML;

        // Ocultar Boton Mostrar Alumnos
        document.getElementById("boton_mostrar_alumnos").classList.add("d-none");

        // Mostrar Boton Calculo Calificacion de Alumnos
        document.getElementById("boton_calcular_alumnos_calificacion").classList.remove("d-none");
    }
}


function calcularCalificacionAlumnos() {
    var N = parseInt(document.getElementById("cantidad_alumnos").value);
    var cant_alumnos_aprobados = 0;
    var cant_alumnos_desaprobados = 0;
    var cant_total_alumnos = 0; 
    var resultado_calificacionHTML = "";

    resultado_calificacionHTML +=`
    <div class='row'>
        <div class='col-xx1-5 d-flex'> 
            <!-- Margen Carta -->
            <div class='card border-0 flex-fill w-100 mb-4'>
                <!-- Encabezado Carta --> 
                <div class='card-header bg-dark border-0 '>
                    <!-- Titulo -->
                    <h6 class='card-header-title text-uppercase text-center text-white'>Calificaciones</h6>
                </div>
                <!-- Cuerpo Carta -->
                <!-- Tabla -->
                <div class='table-responsive'> 
                    <table class='table align-middle table-edge table-nowrap mb-0'>
                        <!-- Encabezado Tabla -->
                        <thead class='table-light'>
                            <!-- Informacion Alumno -->
                            <tr>
                                <th>Alumno</th>
                                <th>Nombre</th>
                                <th>DNI</th>
                                <th>Calificacion</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <!-- Cuerpo Tabla -->
                        <tbody>
    `;

    for (var i = 1; i <= N; i++) {
        var nombre_alumno = document.getElementById("nombre_alumno" + i).value;
        var dni_alumno = parseInt(document.getElementById("dni_alumno" + i).value);
        var calificacion_alumno = parseInt(document.getElementById("calificacion_alumno" + i).value);
        var estado = "";

        if (
            nombre_alumno.trim() === "" || isNaN(dni_alumno) || isNaN(calificacion_alumno)
        ) {
            alert("Por favor, complete todos los campos antes de calcular.");
            return;
        }

        if (calificacion_alumno <= 5) {
            cant_alumnos_desaprobados++;
            estado = "Desaprobado";
        } else if (calificacion_alumno >= 6) {
            cant_alumnos_aprobados++;
            estado = "Aprobado";
        }
        
        resultado_calificacionHTML +=`
                            <!-- Resultado Calificacion Alumno -->
                            <tr>
                                <td>${i}</td>
                                <td>${nombre_alumno}</td>
                                <td>${dni_alumno}</td>
                                <td>${calificacion_alumno}</td>
                                <td>${estado}</td>
                            </tr>
        `;

        cant_total_alumnos = cant_alumnos_aprobados + cant_alumnos_desaprobados;
    }

    resultado_calificacionHTML +=`
                                <!-- Encabezado Final -->
                                <thead class='table-light'>
                                        <!-- Informacion Cantidad de Alumnos y Cantidad de Alumnos APROBADOS/DESAPROBADOS -->
                                        <tr>
                                            <th>Cantidad Total Aprobados</th>
                                            <th>Cantidad Total Desaprobados</th>
                                            <td>--</td>
                                            <td>--</td>
                                            <th>Cantitdad Total Alumnos</th>
                                        </tr>
                                </thead>
                                <!-- Cuerpo Final -->
                                <tbody>
                                    <!-- Resultado total de Cantidad de Alumnos y Cantidad de Alumnos APROBADOS/DESAPROBADOS  -->
                                    <tr>
                                        <td>${cant_alumnos_aprobados}</td>
                                        <td>${cant_alumnos_desaprobados}</td>
                                        <td>--</td>
                                        <td>--</td>
                                        <td>${cant_total_alumnos}</td>
                                    </tr>   
                                </tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    `;

    document.getElementById("resultado_calificacion").innerHTML = resultado_calificacionHTML;

    // Ocultar Boton Calculo Calificacion de Alumnos
    document.getElementById("boton_calcular_alumnos_calificacion").classList.add("d-none");

    // Mostrar Boton Reinicio Datos Alumnos
    document.getElementById("boton_reiniciar_datos_alumnos").classList.remove("d-none");
}

function reiniciarDatosAlumnos() {
    document.getElementById("cantidad_alumnos").value = "";
    document.getElementById("alumnos_ingresados").innerHTML = "";
    document.getElementById("resultado_calificacion").innerHTML = "";

    // Mostrar Boton Mostrar Alumnos
    document.getElementById("boton_mostrar_alumnos").classList.remove("d-none");


    // Ocultar Boton Reinicio Datos Alumnos
    document.getElementById("boton_reiniciar_datos_alumnos").classList.add("d-none");
}