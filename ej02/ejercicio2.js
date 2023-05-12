/*Una empresa llamada Texit se presenta en la consultoría y plantea
confeccionar una página para su sitio web de la empresa, y solicita
que la misma tenga un botón que diga cargar producto, y cada vez
que se le haga clic, podrá cargarse un producto, también se pide un
botón que diga ver productos para poder ver los productos cargados.
El usuario podrá cargar la siguiente información:
a. Código del producto.
b. Nombre del producto.
c. Categoría del producto.
d. Precio del producto.
e. Descripción del producto.*/
'use strict'

function cargarProducto() {
    var codigo = prompt("Ingrese el código del producto:");
    var nombre = prompt("Ingrese el nombre del producto:");
    var categoria = prompt("Ingrese la categoría del producto:");
    var precio = parseFloat(prompt("Ingrese el precio del producto:"));
    var descripcion = prompt("Ingrese la descripción del producto:");
  
    var fila = document.createElement("tr");
    fila.innerHTML = "<td>" + codigo + "</td><td>" + nombre + "</td><td>" + categoria + "</td><td>" + precio + "</td><td>" + descripcion + "</td>";
  
    document.getElementById("productos").getElementsByTagName("tbody")[0].appendChild(fila);
  }
  

function verProductos() {
    var tabla = document.getElementById("productos");
    tabla.style.display = "table";
}