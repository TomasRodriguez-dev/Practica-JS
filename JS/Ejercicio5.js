/* Tomas Javier Rodriguez Ocampo */

/* Ejercicio N°5 */

function calcularAhorroDiario() {
    var ahorro_diario = parseFloat(document.getElementById("ahorro_diario").value); // Este va a ser el ahorro diario durante todos los dias del año

    if ( isNaN(ahorro_diario)) {
        alert("Por favor, complete todos los campos antes de calcular.");
    } else {
        var resultado_ahorroHTML = "";
        resultado_ahorroHTML += `
            <div class='row'>
                <div class='col-xx1-5 d-flex'> 
                    <!-- Margen Carta -->
                    <div class='card border-0 flex-fill w-100'>
                        <!-- Encabezado Carta --> 
                        <div class='card-header bg-dark border-0 '>
                            <!-- Titulo -->
                            <h6 class='card-header-title text-uppercase text-center text-white'> Ahorro Diarios y Anual</h6>
                        </div>
                        <!-- Cuerpo Carta -->
                        <!-- Tabla -->
                        <div class='table-responsive'> 
                            <table class='table align-middle table-edge table-nowrap mb-0'>
                                <!-- Encabezado Tabla -->
                                <thead class='table-light'>
                                    <!-- Informacion ahorro diario -->
                                    <tr>
                                        <th class='w-70px'>#</th>
                                        <th>Ahorro Diario</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>
                                <!-- Cuerpo Tabla -->
                                <tbody>
        `;

        resultado_ahorroHTML += `
                                    <!-- Resultado ahorro diario -->
                                    <tr>
                                        <td>1</td>
                                        <td>Día 1</td>
                                        <td>$ ${ahorro_diario.toLocaleString()}</td>
                                    </tr>
        `;

        var ahorro_anual = 0; // Esta variable va a ser la cantidad total que ahorro en el año
        
        for (var i = 2; i <= 365; i++) {
            ahorro_diario *= 3;
            resultado_ahorroHTML += `
                                    <!-- Resultado ahorro diario -->
                                    <tr>
                                        <td>${i}</td>
                                        <td>Dia ${i}</td>
                                        <td>$ ${ahorro_diario.toLocaleString()}</td>
                                    </tr>
            `;
            ahorro_anual += ahorro_diario;
        }

        resultado_ahorroHTML += `
                                    <!-- Encabezado Final -->
                                    <thead class='table-light'>
                                        <!-- Informacion ahorro anual -->
                                        <tr>
                                            <th class='w-70px'>#</th>
                                            <th>Ahorro Anual</th>
                                            <th>Valor</th>
                                        </tr>
                                    </thead>
                                    <!-- Cuerpo Final -->
                                    <tbody>
                                        <!-- Resultado ahorro anual  -->
                                        <tr>
                                            <td>Año</td>
                                            <td>Total Anual</td>
                                            <td>$ ${ahorro_anual.toLocaleString()}</td>
                                        </tr>   
                                    </tbody>
        `;

        resultado_ahorroHTML +=`
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.getElementById("resultado_ahorro").innerHTML = resultado_ahorroHTML;

        // Ocultar Boton Calcular Ahorro
        document.getElementById("boton_calcular_ahorro").classList.add("d-none");

        // Mostrar Boton Reinicio Datos Ahorro
        document.getElementById("boton_reiniciar_ahorro").classList.remove("d-none");
    }
}

function reiniciarDatosAhorro() {
    document.getElementById("ahorro_diario").value = "";
    document.getElementById("resultado_ahorro").innerHTML = "";

    // Mostrar Boton Calcular Ahorro
    document.getElementById("boton_calcular_ahorro").classList.remove("d-none");

    // Ocultar Boton Reinicio Datos Ahorro
    document.getElementById("boton_reiniciar_ahorro").classList.add("d-none");
}