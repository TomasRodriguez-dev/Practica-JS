/* Tomas Javier Rodriguez Ocampo */

/* Ejercicio N°6 */

function mostrarProductosIngresados (){
    var N = parseInt(document.getElementById("cantidad_productos").value);
    var mostrar_productosHTML = "<h4 class='card-title text-center mb-4'>Ingrese los productos:</h4>";

    if (
        isNaN(N)
    ) {
        alert("Por favor, complete todos los campos antes de calcular.");
    } else {
        for (var i = 1; i <= N; i++) {
            mostrar_productosHTML +=`
                <!-- Titulo -->
                <h5 class='card-title mb-3'>Producto ${i}:</h5>
                <!-- Input y Label Flotante -->
                <div class='form-floating mb-4'>
                    <input type='text' class='form-control' id='nombre_producto${i}' placeholder='Ingrese el Nombre del Producto'>
                    <label for='nombre_producto${i}'>Nombre del Producto</label>
                </div>
                <!-- Input y Label Flotante -->
                <div class='form-floating mb-4'>
                    <input type='number' class='form-control' id='precio_producto${i}' min='1' placeholder='Ingrese el precio que tiene el producto'>
                    <label for='precio_producto${i}'>Precio Producto</label>
                </div>
            `;
        }
    
        document.getElementById("productos_ingresados").innerHTML = mostrar_productosHTML;

        // Ocultar Boton Mostrar Productos
        document.getElementById("boton_mostrar_productos").classList.add("d-none");

        // Mostrar Boton Calculo de la Compra de Productos
        document.getElementById("boton_calcular_pago").classList.remove("d-none");
    }
}

function calcularPagoProductos() {
    var N = parseInt(document.getElementById("cantidad_productos").value);
    var total_compra = 0;
    var resultado_compraHTML = "";
    resultado_compraHTML +=`
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
                                <th>Producto</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Descuento</th>
                                <th>Total Producto</th>
                            </tr>
                        </thead>
                        <!-- Cuerpo Tabla -->
                        <tbody>
    `;

    for (var i = 1; i <= N; i++) {
        var nombre_producto = document.getElementById("nombre_producto" + i).value;
        var precio_producto = document.getElementById("precio_producto" + i).value.toUpperCase();

        if (
            nombre_producto.trim() === "" || isNaN(precio_producto)
        ) {
            alert("Por favor, complete todos los campos antes de calcular.");
            return;
        }

        if (precio_producto >= 200) {
            var descuento_producto = precio_producto * 0.15;
			var total_pagar_producto = precio_producto - descuento_producto;
        } else if (precio_producto >= 100 && precio_producto <= 199) {
            descuento_producto = precio_producto * 0.12;
			total_pagar_producto = precio_producto - descuento_producto;
        } else {
            descuento_producto <- precio_producto * 0.10
			total_pagar_producto <- precio_producto - descuento_producto
        }   

        resultado_compraHTML +=`
                                <!-- Resultado Producto Total -->
                                <tr>
                                    <td>${i}</td>
                                    <td>${nombre_producto}</td>
                                    <td>$${precio_producto}</td>
                                    <td>$${descuento_producto.toFixed(2)}</td>
                                    <td>$${total_pagar_producto.toFixed(2)}</td>
                                </tr>
        `;

        total_compra += total_pagar_producto;
    }

    resultado_compraHTML +=`
                                    <!-- Encabezado Final -->
                                    <thead class='table-light'>
                                            <!-- Informacion Total a Pagar Compra -->
                                            <tr>
                                                <th>--</th>
                                                <th>--</th>
                                                <th>--</th>
                                                <th>--</th>
                                                <th>Total Pagar Compra</th>
                                            </tr>
                                    </thead>
                                    <!-- Cuerpo Final -->
                                    <tbody>
                                        <!-- Resultado Total a Pagar Compra -->
                                        <tr>
                                            <td>--</td>
                                            <td>--</td>
                                            <td>--</td>
                                            <td>--</td>
                                            <td>$${total_compra.toFixed(2)}</td>
                                        </tr>   
                                    </tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById("resultado_compra").innerHTML = resultado_compraHTML;

    // Ocultar Boton Calculo de la Compra de Productos
    document.getElementById("boton_calcular_pago").classList.add("d-none");

    // Mostrar Boton Reinicio Datos Productos
    document.getElementById("boton_reiniciar_datos_productos").classList.remove("d-none");
}

function reiniciarDatosProductos() {
    document.getElementById("cantidad_productos").value = "";
    document.getElementById("productos_ingresados").innerHTML = "";
    document.getElementById("resultado_compra").innerHTML = "";

    // Mostrar Boton Mostrar Productos
    document.getElementById("boton_mostrar_productos").classList.remove("d-none");


    // Ocultar Boton Reinicio Datos Productos
    document.getElementById("boton_reiniciar_datos_productos").classList.add("d-none");
}