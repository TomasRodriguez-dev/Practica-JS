/* Tomas Javier Rodriguez Ocampo */

/* Ejercicio N°14 */

function calcularTablaMultiplicar() {
    var K = parseInt(document.getElementById("numero_multiplicar").value); 

    if (isNaN(K)) {
        alert("Por favor, complete todos los campos antes de calcular.");
    } else {
        var resultado_tabla_multiplicarHTML = "";
        resultado_tabla_multiplicarHTML += `
            <div class='row'>
                <div class='col-xx1-5 d-flex'> 
                    <!-- Margen Carta -->
                    <div class='card border-0 flex-fill w-100'>
                        <!-- Encabezado Carta --> 
                        <div class='card-header bg-dark border-0 '>
                            <!-- Titulo -->
                            <h6 class='card-header-title text-uppercase text-center text-white'> Resultado</h6>
                        </div>
                        <!-- Cuerpo Carta -->
                        <!-- Tabla -->
                        <div class='table-responsive'> 
                            <table class='table align-middle table-edge table-nowrap mb-0'>
                                <!-- Encabezado Tabla -->
                                <thead class='table-light'>
                                    <!-- Informacion tabla de multiplicar -->
                                    <tr>
                                        <th>Numero Ingresado</th>
                                        <th class='w-70px'>*</th>
                                        <th>Numero Tabla</th>
                                        <th class='w-70px'>=</th>
                                        <th>Resultado</th>
                                    </tr>
                                </thead>
                                <!-- Cuerpo Tabla -->
                                <tbody>
        `;

        for (var i = 1; i <= 10; i++) {
            var multiplicacion = K * i;
            resultado_tabla_multiplicarHTML +=`
                                    <!-- Resultado Tabla -->
                                    <tr>
                                        <td>${K}</td>
                                        <td>*</td>
                                        <td>${i}</td>
                                        <td>=</td>
                                        <td>${multiplicacion}</td>
                                    </tr>
            `;
        }

        resultado_tabla_multiplicarHTML +=`
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.getElementById("resultado_tabla_multiplicar").innerHTML = resultado_tabla_multiplicarHTML;
        
        // Ocultar Boton Calcular Tabla Multiplicar
        document.getElementById("boton_tabla_multiplicar").classList.add("d-none");

        // Mostrar Boton Reinicio Datos Tabla Multiplicar
        document.getElementById("boton_reiniciar_tabla_multiplicar").classList.remove("d-none");
    }
}

function reiniciarDatosTablaMultiplicar() {
    document.getElementById("numero_multiplicar").value = "";
    document.getElementById("resultado_tabla_multiplicar").innerHTML = "";

    // Mostrar Boton Calcular Tabla Multiplicar
    document.getElementById("boton_tabla_multiplicar").classList.remove("d-none");

    // Ocultar Boton Reinicio Datos Tabla Multiplicar
    document.getElementById("boton_reiniciar_tabla_multiplicar").classList.add("d-none");
}
