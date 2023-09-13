/* Tomas Javier Rodriguez Ocampo */

/* Ejercicio N°8 */

function mostrarSalones() {
    var M = parseInt(document.getElementById("cantidad_salones").value);
    var mostrar_salonesHTML = "<h4 class='card-title text-center mb-4'>Ingrese los salones:</h4>";

    if (
        isNaN(M)
    ) {
        alert("Por favor, complete todos los campos antes de calcular.");
    } else {
        for (var salon = 1; salon <= M; salon++) {
            mostrar_salonesHTML +=`
                <!-- Titulo -->
                <h5 class='card-title mb-3'>Salon ${salon}:</h5>
                <!-- Input y Label Flotante -->
                <div class='form-floating mb-4'>
                    <input type='number' class='form-control' id='num_estudiantes_salon${salon}' min='1' placeholder='Ingrese la cantidad de alumnos en el salon'>
                    <label for='num_estudiantes_salon${salon}'>Ingrese la cantidad de alumnos en el salon</label>
                </div>
                <!-- Estudiantes a ingresar -->
                <div id='estudiantes_ingresados${salon}'>
                    <!-- En este div se va a generar el campo para que el directivo ingrese los datos de cada alumno por salon -->
                </div>
                <!-- Boton Mostrar estudiantes -->
                <button class='btn btn-dark mb-3' id='boton_mostrar_infoestudiantes${salon}' onclick="mostrarEstudiantes('${salon}')">Mostrar Estudiantes</button>
                <!-- Linea -->
                <div class='border-top border-muted mb-3'></div>
            `;
        }
    
        document.getElementById("salones_ingresados").innerHTML = mostrar_salonesHTML;

        // Ocultar Boton Mostrar Salones
        document.getElementById("boton_mostrar_infosalones").classList.add("d-none");

        // Mostrar Boton Calculo Promedio de Edades
        document.getElementById("boton_calcular_edad").classList.remove("d-none");    
    }
}

function mostrarEstudiantes(salon) {
    var E = parseInt(document.getElementById("num_estudiantes_salon" + salon).value);
    var estudiantesHTML = "<h4 class='card-title text-center mb-4'>Ingrese los estudiantes:</h4>";

    for (var estudiante = 1; estudiante <= E; estudiante++) {
        estudiantesHTML +=`
             <!-- Titulo -->
            <h5 class='card-title mb-3'>Alumno ${estudiante}:</h5>
            <!-- Input y Label Flotante -->
            <div class='form-floating mb-4'>
                <input type='number' class='form-control' id='edad_estudiante_${salon}_${estudiante}' min='1' placeholder='Ingrese la edad del alumno'>
                <label for='edad_estudiante_${salon}_${estudiante}'>Ingrese la edad del alumno</label>
            </div>
        `;
    }

    document.getElementById("estudiantes_ingresados" + salon).innerHTML = estudiantesHTML;

    // Ocultar Boton Mostrar Salones
    document.getElementById("boton_mostrar_infoestudiantes" + salon).classList.add("d-none");
}


function calcularEdadPromedio() {
    var M = parseInt(document.getElementById("cantidad_salones").value);
    var edad_total_escuela = 0;
    var num_estudiante_escuela = 0;
    var total_salones = 0;
    var resultado_promedioHTML = "";

    resultado_promedioHTML +=`
    <div class='row'>
        <div class='col-xx1-5 d-flex'> 
            <!-- Margen Carta -->
            <div class='card border-0 flex-fill w-100 mb-4'>
                <!-- Encabezado Carta --> 
                <div class='card-header bg-dark border-0 '>
                    <!-- Titulo -->
                    <h6 class='card-header-title text-uppercase text-center text-white'>Resultado Promedio Salon y Escuela</h6>
                </div>
                <!-- Cuerpo Carta -->
                <!-- Tabla -->
                <div class='table-responsive'> 
                    <table class='table align-middle table-edge table-nowrap mb-0'>
                        <!-- Encabezado Tabla -->
                        <thead class='table-light'>
                            <!-- Informacion Salones -->
                            <tr>
                                <th>Salon</th>
                                <th>Cantidad Alumnos Salon</th>
                                <th>Promedio Salon</th>
                            </tr>
                        </thead>
                        <!-- Cuerpo Tabla -->
                        <tbody>
    `;

    for (var salon = 1; salon <= M; salon++) {
        var E = parseInt(document.getElementById("num_estudiantes_salon" + salon).value);
        var edad_total_salon = 0;
        
        if (
            isNaN(E)
        ) {
            alert("Por favor, complete todos los campos antes de calcular.");
            return;
        }

        for (var estudiante = 1; estudiante <= E; estudiante++) {
            var edad_estudiante = parseInt(document.getElementById("edad_estudiante_" + salon + "_" + estudiante).value);
            
            if (
                isNaN(edad_estudiante)
            ) {
                alert("Por favor, complete todos los campos antes de calcular.");
                return;
            }

            edad_total_salon += edad_estudiante;
            edad_total_escuela += edad_estudiante;
            num_estudiante_escuela++; 
        }
        
        total_salones++;
        var promedio_salon = edad_total_salon / E;

        resultado_promedioHTML +=`
                            <!-- Resultado Promedio Salon -->
                            <tr>
                                <td>${salon}</td>
                                <td>${E}</td>
                                <td>${promedio_salon.toFixed(2)}</td>
                            </tr>
        `;
    }

    var promedio_escuela = edad_total_escuela / num_estudiante_escuela;

    resultado_promedioHTML +=`
                            <!-- Encabezado Final -->
                            <thead class='table-light'>
                                <!-- Informacion Escuela -->
                                <tr>
                                    <th>Total Salones</th>
                                    <th>Cantidad Total Chicos Escuela</th>
                                    <th>Promedio Escuela</th>
                                </tr>
                            </thead>
                            <!-- Cuerpo Final -->
                            <tbody>
                                <!-- Resultado Promedio Escuela  -->
                                <tr>
                                    <td>${total_salones}</td>
                                    <td>${num_estudiante_escuela}</td>
                                    <td>${promedio_escuela.toFixed(2)}</td>
                                </tr>   
                            </tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    `;

    document.getElementById("resultado_promedio").innerHTML = resultado_promedioHTML;

    // Ocultar Boton Calculo Promedio de Edades
    document.getElementById("boton_calcular_edad").classList.add("d-none");

    // Mostrar Boton Reinicio Datos Edad
    document.getElementById("boton_reiniciar_datos_edad").classList.remove("d-none");
}

function reiniciarDatosEdad() {
    document.getElementById("cantidad_salones").value = "";
    document.getElementById("salones_ingresados").innerHTML = "";
    document.getElementById("resultado_promedio").innerHTML = "";

    // Mostrar Boton Mostrar Salones
    document.getElementById("boton_mostrar_infosalones").classList.remove("d-none");

    // Ocultar Boton Reinicio Datos Edad
    document.getElementById("boton_reiniciar_datos_edad").classList.add("d-none");
}