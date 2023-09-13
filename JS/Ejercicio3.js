/* Tomas Javier Rodriguez Ocampo */

/* Ejercicio N°3 */

function mostrarNumerosIngresados() {
    var N = parseInt(document.getElementById("cantidad_numeros").value);
    var numero_a_ingresarHTML = "<h4 class='card-title text-center'>Ingrese los numeros:</h4>";

    if (
        isNaN(N)
    ) {
        alert("Por favor, complete todos los campos antes de calcular.");
    } else {
        for (var i = 1; i <= N; i++) {
            numero_a_ingresarHTML +=`
                <!-- Input y Label Flotante -->
                <div class='form-floating mb-4'>
                    <input type='number' class='form-control' id='num${i}' placeholder='Ingrese un numero'>
                    <label for='num${i}'>Numero ${i}</label>
                </div>
            `;
        }
        
        document.getElementById("numeros_ingresados").innerHTML = numero_a_ingresarHTML;

        // Ocultar Boton Mostrar Numeros
        document.getElementById("boton_mostrar_numeros").classList.add("d-none");

        // Mostrar Boton Calcular Cantidad de Cero
        document.getElementById("boton_calcular_cant_cero").classList.remove("d-none");
    }
}

function calcularCantCero() {
    var cantidad_0 = 0;
    var cantidad_menor_0 = 0;
    var cantidad_mayor_0 = 0;
    var N = parseInt(document.getElementById("cantidad_numeros").value);

    for (var i = 1; i <= N; i++) {
        var num = parseInt(document.getElementById("num" + i).value);

        if (isNaN(num)) {
            alert("Por favor, complete todos los campos antes de calcular.");
            return; 
        }

        if (num == 0) {
            cantidad_0++;
        } else if (num < 0) {
            cantidad_menor_0++;
        } else if (num > 0) {
            cantidad_mayor_0++;
        }
    }

    var resultado_numerosHTML = "";

    resultado_numerosHTML +=`
        <!-- Linea -->
        <div class='border-top border-muted mb-3'></div>
        <!-- Resultado Cantidad de Ceros -->
        <h4 class='card-title text-center mb-3'>Resultado Cantidad de Ceros:</h4>
    `;

    if (cantidad_0 > 0) {
        resultado_numerosHTML +=`
            <!-- Resultado Cantidad de Numeros igual a Cero -->
            <h5 class='card-title text-center mb-3'>Cantidad de numeros igual a 0:</h5>
            <p class='fs-0 text-center mb-3'>La cantidad de numeros Igual a 0 que ingresó son ${cantidad_0}</p>
        `;
    }
    
    if (cantidad_menor_0 > 0) {
        resultado_numerosHTML +=`
            <!-- Resultado Cantidad de Numeros Menor a Cero -->
            <h5 class='card-title text-center mb-3'>Cantidad de numeros menor a 0:</h5>
            <p class='fs-0 text-center mb-3'>La cantidad de numeros Menor a 0 que ingresó son ${cantidad_menor_0}</p>
        `;
    }
    
    if (cantidad_mayor_0 > 0) {
        resultado_numerosHTML +=`
            <!-- Resultado Cantidad de Numeros Mayor a Cero -->
            <h5 class='card-title text-center mb-3'>Cantidad de numeros mayor a 0:</h5>
            <p class='fs-0 text-center mb-3'>La cantidad de numeros Mayor a 0 que ingresó son ${cantidad_mayor_0}</p>
        `;
    }

    document.getElementById("resultado_numeros").innerHTML = resultado_numerosHTML;
    
    // Ocultar Boton Calcular Cantidad de Cero
    document.getElementById("boton_calcular_cant_cero").classList.add("d-none");

    // Mostrar Boton Reinicio Datos Cantidad de Cero
    document.getElementById("boton_reiniciar_cant_cero").classList.remove("d-none");
}

function reiniciarDatosCantCero() {
    document.getElementById("cantidad_numeros").value = "";
    document.getElementById("numeros_ingresados").innerHTML = "";
    document.getElementById("resultado_numeros").innerHTML = "";

    // Mostrar Boton Mostrar Numeros
    document.getElementById("boton_mostrar_numeros").classList.remove("d-none");


    // Ocultar Boton Reinicio Datos Cantidad de Cero
    document.getElementById("boton_reiniciar_cant_cero").classList.add("d-none");
}