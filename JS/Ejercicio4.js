/* Tomas Javier Rodriguez Ocampo */

/* Ejercicio N°4 */

function mostrarFocosIngresados() {
    var N = parseInt(document.getElementById("cantidad_focos").value);
    var mostrar_focosHTML = "";
    mostrar_focosHTML +=`
        <h4 class='card-title text-center mb-4'>Ingrese los focos:</h4>
        <!-- Valor Requerido -->
        <p class='fs-0 text-center mb-3'>Valor requerido a ingresar (V = Verde / B = Blanco / R = Rojo)</p>
    `;

    if (
        isNaN(N)
    ) {
        alert("Por favor, complete todos los campos antes de calcular.");
    } else {
        for (var i = 1; i <= N; i++) {
            mostrar_focosHTML +=`
                <!-- Titulo -->
                <h4 class='card-title mb-3'>Foco ${i}:</h4>
                <!-- Input y Label Flotante -->
                <div class='form-floating mb-4'>
                    <input type='text' class='form-control' id='color${i}' placeholder='Ingrese el color (V = verde / B = blanco / R = rojo)'>
                    <label for='color${i}'>Ingrese la letra del color</label>
                </div>
            `;
        }
    
        document.getElementById("focos_ingresados").innerHTML = mostrar_focosHTML;

        // Ocultar Boton Mostrar Focos
        document.getElementById("boton_mostrar_focos").classList.add("d-none");

        // Mostrar Boton Calculo de Color de Foco
        document.getElementById("boton_calcular_focos").classList.remove("d-none");
    }
}

function calcularCantFocos() {
    var cant_focos_verdes = 0;
	var cant_focos_blancos = 0;
	var cant_focos_rojos = 0;
    var N = parseInt(document.getElementById("cantidad_focos").value);
    var resultado_colorHTML = "";

    resultado_colorHTML +=`
    <div class='row'>
        <div class='col-xx1-5 d-flex'> 
            <!-- Margen Carta -->
            <div class='card border-0 flex-fill w-100 mb-4'>
                <!-- Encabezado Carta --> 
                <div class='card-header bg-dark border-0 '>
                    <!-- Titulo -->
                    <h6 class='card-header-title text-uppercase text-center text-white'>Cantidad de Colores de cada Foco</h6>
                </div>
                <!-- Cuerpo Carta -->
                <!-- Tabla -->
                <div class='table-responsive'> 
                    <table class='table align-middle table-edge table-nowrap mb-0'>
                        <!-- Encabezado Tabla -->
                        <thead class='table-light'>
                            <!-- Informacion Impuesto Auto -->
                            <tr>
                                <th>Foco</th>
                                <th>Color</th>
                                <th>Icon</th>
                            </tr>
                        </thead>
                        <!-- Cuerpo Tabla -->
                        <tbody>
    `;

    for (var i = 1; i <= N; i++) {
        var color = document.getElementById("color" + i).value.toUpperCase();
        var icon = "";
        if (
            color.trim() === ""
        ) {
            alert("Por favor, complete todos los campos antes de calcular.");
            return;
        }

        while (
            color !== "V" && color !== "v" &&
            color !== "B" && color !== "b" &&
            color !== "R" && color !== "r"
        ) {
            alert("Respuesta no válida. Por favor, ingrese V / B / R");
            return;
        }

        if (color == "V" || color == "v") {
            cant_focos_verdes++;
            color = "Verde";
            icon = `
            <svg style='background-color: #333;' version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="30px" height="30px" viewBox="0 0 128.000000 128.000000"
            preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                fill="#34BF57" stroke="none">
                <path d="M521 1254 c-216 -58 -369 -292 -333 -510 17 -104 62 -187 142 -265
                l70 -67 0 -144 c0 -158 10 -193 63 -232 26 -19 43 -21 175 -21 126 0 151 3
                174 18 57 39 63 58 66 233 4 161 4 162 29 175 41 22 111 107 142 173 167 350
                -155 740 -528 640z m282 -98 c74 -35 147 -109 184 -183 25 -52 28 -68 28 -158
                0 -89 -3 -107 -29 -163 -20 -43 -47 -80 -88 -117 l-59 -55 -80 0 -79 0 0 158
                0 158 46 44 c58 57 69 77 53 96 -19 23 -43 16 -84 -26 -21 -22 -44 -40 -50
                -40 -6 0 -29 18 -50 40 -43 44 -78 51 -95 20 -10 -18 -3 -28 45 -79 l55 -58 0
                -156 0 -157 -77 0 c-67 0 -82 3 -115 27 -21 14 -55 48 -74 74 -152 207 -63
                500 178 590 80 29 213 22 291 -15z m-3 -888 c0 -186 7 -178 -159 -178 -69 0
                -131 4 -137 8 -27 17 -34 56 -34 175 0 68 3 127 7 130 3 4 78 7 165 7 l158 0
                0 -142z"/>
                </g>
            </svg>
            `;
        } else if (color == "B" || color == "b") {
            cant_focos_blancos++;
            color = "Blanco";
            icon = `
            <svg style='background-color: #333;' version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="30px" height="30px" viewBox="0 0 128.000000 128.000000"
            preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                fill="#F2F2F2" stroke="none">
                <path d="M521 1254 c-216 -58 -369 -292 -333 -510 17 -104 62 -187 142 -265
                l70 -67 0 -144 c0 -158 10 -193 63 -232 26 -19 43 -21 175 -21 126 0 151 3
                174 18 57 39 63 58 66 233 4 161 4 162 29 175 41 22 111 107 142 173 167 350
                -155 740 -528 640z m282 -98 c74 -35 147 -109 184 -183 25 -52 28 -68 28 -158
                0 -89 -3 -107 -29 -163 -20 -43 -47 -80 -88 -117 l-59 -55 -80 0 -79 0 0 158
                0 158 46 44 c58 57 69 77 53 96 -19 23 -43 16 -84 -26 -21 -22 -44 -40 -50
                -40 -6 0 -29 18 -50 40 -43 44 -78 51 -95 20 -10 -18 -3 -28 45 -79 l55 -58 0
                -156 0 -157 -77 0 c-67 0 -82 3 -115 27 -21 14 -55 48 -74 74 -152 207 -63
                500 178 590 80 29 213 22 291 -15z m-3 -888 c0 -186 7 -178 -159 -178 -69 0
                -131 4 -137 8 -27 17 -34 56 -34 175 0 68 3 127 7 130 3 4 78 7 165 7 l158 0
                0 -142z"/>
                </g>
            </svg>
            `;
        } else if (color == "R" || color == "r") {
            cant_focos_rojos++;
            color = "Rojo";
            icon =`
            <svg style='background-color: #333;' version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="30px" height="30px" viewBox="0 0 128.000000 128.000000"
            preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                fill="#F22E3E" stroke="none">
                <path d="M521 1254 c-216 -58 -369 -292 -333 -510 17 -104 62 -187 142 -265
                l70 -67 0 -144 c0 -158 10 -193 63 -232 26 -19 43 -21 175 -21 126 0 151 3
                174 18 57 39 63 58 66 233 4 161 4 162 29 175 41 22 111 107 142 173 167 350
                -155 740 -528 640z m282 -98 c74 -35 147 -109 184 -183 25 -52 28 -68 28 -158
                0 -89 -3 -107 -29 -163 -20 -43 -47 -80 -88 -117 l-59 -55 -80 0 -79 0 0 158
                0 158 46 44 c58 57 69 77 53 96 -19 23 -43 16 -84 -26 -21 -22 -44 -40 -50
                -40 -6 0 -29 18 -50 40 -43 44 -78 51 -95 20 -10 -18 -3 -28 45 -79 l55 -58 0
                -156 0 -157 -77 0 c-67 0 -82 3 -115 27 -21 14 -55 48 -74 74 -152 207 -63
                500 178 590 80 29 213 22 291 -15z m-3 -888 c0 -186 7 -178 -159 -178 -69 0
                -131 4 -137 8 -27 17 -34 56 -34 175 0 68 3 127 7 130 3 4 78 7 165 7 l158 0
                0 -142z"/>
                </g>
            </svg>
            `;
        }

        resultado_colorHTML +=`
                            <!-- Resultado ahorro diario -->
                            <tr>
                                <td>${i}</td>
                                <td>${color}</td>
                                <td>${icon}</td>
                            </tr>
        `;
    }

    resultado_colorHTML +=`
                                <!-- Encabezado Final -->
                                <thead class='table-light'>
                                        <!-- Informacion del total de cada color de focos -->
                                        <tr>
                                            <th>Total Focos Verdes</th>
                                            <th>Total Focos Blancos</th>
                                            <th>Total Focos Rojos</th>
                                        </tr>
                                </thead>
                                <!-- Cuerpo Final -->
                                <tbody>
                                    <!-- Resultado Total de cada color de focos  -->
                                    <tr>
                                        <td>${cant_focos_verdes}</td>
                                        <td>${cant_focos_blancos}</td>
                                        <td>${cant_focos_rojos}</td>
                                    </tr>   
                                </tbody>
                        </tbody>
                    </div> 
                </div>
            </div>
        </div>
    </div>
    `;

    document.getElementById("resultado_focos").innerHTML = resultado_colorHTML;

    // Ocultar Boton Calculo de Color de Foco
    document.getElementById("boton_calcular_focos").classList.add("d-none");

    // Mostrar Boton Reinicio Datos Focos
    document.getElementById("boton_reiniciar_datos_focos").classList.remove("d-none");
}

function reiniciarDatosFocos() {
    document.getElementById("cantidad_focos").value = "";
    document.getElementById("focos_ingresados").innerHTML = "";
    document.getElementById("resultado_focos").innerHTML = "";

    // Mostrar Boton Mostrar Focos
    document.getElementById("boton_mostrar_focos").classList.remove("d-none");

    // Ocultar Boton Reinicio Datos Focos
    document.getElementById("boton_reiniciar_datos_focos").classList.add("d-none");
}