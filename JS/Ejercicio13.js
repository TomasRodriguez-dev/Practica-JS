/* Tomas Javier Rodriguez Ocampo */

/* Ejercicio N°13 */

function mostrarNumerosNaturalesIngresados() {
    var N = parseInt(document.getElementById("cantidad_numeros_naturales").value);
    var mostrar_numerosHTML = "<h4 class='card-title text-center'>Ingrese los numeros:</h4>";

    if (
        isNaN(N)
    ) {
        alert("Por favor, complete todos los campos antes de calcular.");
    } else {
        for (var i = 1; i <= N; i++) {
            mostrar_numerosHTML +=`
                <!-- Input y Label Flotante -->
                <div class='form-floating mb-4'>
                    <input type='number' class='form-control' id='num${i}' placeholder='Ingrese un numero'>
                    <label for='num${i}'>Numero ${i}</label>
                </div>
            `;
        }
    
        document.getElementById("numeros_naturales_ingresados").innerHTML = mostrar_numerosHTML;

        // Ocultar Boton Mostrar Numeros
        document.getElementById("boton_mostrar_numeros_naturales").classList.add("d-none");

        // Mostrar Boton Calculo Cubo Numeros
        document.getElementById("boton_calcular_cubo_numeros").classList.remove("d-none");
    }
}

function calcularCuboNumeros() {
    var cubo = 0;
    var N = parseInt(document.getElementById("cantidad_numeros_naturales").value);
    var resultado_cuboHTML = "";

    resultado_cuboHTML +=`
        <!-- Linea -->
        <div class='border-top border-muted mb-3'></div>
        <!-- Resultado Calculo al Cubo de Numeros -->
        <h4 class='card-title text-center mb-3'>Resultado Calculo al Cubo de Numeros:</h4>
    `;

    for (var i = 1; i <= N; i++) {
        var num = parseInt(document.getElementById("num" + i).value);

        if (isNaN(num)) {
            alert("Por favor, complete todos los campos antes de calcular.");
            return;
        }

        if (num >= 0) {
            cubo = num * num * num;
            resultado_cuboHTML +=`<p class='fs-0 text-center mb-3'>El cubo del numero ${num} es de ${cubo}</p>`;
        } else {
            resultado_cuboHTML +=`<p class='fs-0 text-center mb-3'>El numero ${num} no es un numero natural positivo</p>`;
        }
    }

    document.getElementById("resultado_cubo_numeros").innerHTML = resultado_cuboHTML;

    // Ocultar Boton Calculo al Cubo de Numeros
    document.getElementById("boton_calcular_cubo_numeros").classList.add("d-none");

    // Mostrar Boton Reinicio Datos Calculo al Cubo de Numeros
    document.getElementById("boton_reiniciar_cubo_numeros").classList.remove("d-none");
}

function reiniciarDatosCuboNumeros() {
    document.getElementById("cantidad_numeros_naturales").value = "";
    document.getElementById("numeros_naturales_ingresados").innerHTML = "";
    document.getElementById("resultado_cubo_numeros").innerHTML = "";

    // Mostrar Boton Mostrar Numeros Naturales
    document.getElementById("boton_mostrar_numeros_naturales").classList.remove("d-none");


    // Ocultar Boton Reinicio Datos Calculo al Cubo de Numeros
    document.getElementById("boton_reiniciar_cubo_numeros").classList.add("d-none");
}