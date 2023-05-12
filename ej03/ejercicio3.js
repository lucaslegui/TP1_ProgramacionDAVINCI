/*Una empresa llamada Noblex se presenta en la consultoría y plantea
confeccionar una página para su sitio web de la empresa, solicita que
haya un botón que diga ver televisores y permita mostrar al menos 9
televisores de 50 pulgadas y que muestre:
a. Código del producto.
b. Cantidad de televisores en stock.
c. Foto del producto.
d. Precio del producto.
e. Descripción del producto.
f. Botón de añadir al carrito.
Se pide también un botón que diga ordenar y que muestre los
televisores del menor precio al mayor precio.*/



var televisores = [
    {codigo:01, stock:20, foto:'imagenes/tv1.jpg', precio:15500, descripcion:'LG 32 pulgadas'},
    {codigo:02, stock:30, foto:'imagenes/tv2.webp', precio:45000, descripcion:'LG 23 pulgadas'},
    {codigo:03, stock:34, foto:'imagenes/tv3.jpg', precio:150000, descripcion:'LG 50 pulgadas'},
    {codigo:04, stock:58, foto:'imagenes/tv4.jpg', precio:120000, descripcion:'LG 55 pulgadas'},
    {codigo:05, stock:90, foto:'imagenes/tv5.jpg', precio:170000, descripcion:'LG 58 pulgadas'},
    {codigo:06, stock:220, foto:'imagenes/tv6.jpg', precio:270000, descripcion:'LG 60 pulgadas'},
    {codigo:07, stock:120, foto:'imagenes/tv7.webp', precio:220000, descripcion:'LG 68 pulgadas'},
    {codigo:08, stock:330, foto:'imagenes/tv8.jpg', precio:320000, descripcion:'LG 72 pulgadas'},
    {codigo:09, stock:1, foto:'imagenes/tv9.jpg', precio:58000, descripcion:'LG 80 pulgadas'}
];

var mostrarDiv = document.getElementById('tvs');

'use strict';

function mostrartv(){
    mostrarDiv.innerHTML = '';

    for(var i=0; i < televisores.length; i++){
        mostrarDiv.innerHTML += `
        <div class="tarjeta">
        <img src="${televisores[i].foto}" alt="TV ${televisores[i].codigo}">
        <p>Código: ${televisores[i].codigo}</p>
        <p>Stock: ${televisores[i].stock}</p>
        <p>Precio: ${televisores[i].precio}</p>
        <p>Descripción: ${televisores[i].descripcion}</p>
        <button>Añadir al carrito</button>
        </div>`;
    }
};

function orden() {
    televisores.sort(function(a,b){
        return a.precio - b.precio;
    });

    mostrartv();
};