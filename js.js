// "use strict";

// Se pide crear un objeto Silla.
// Asignarle las siguientes propiedades: Material, Color, Código de fabricacion, precio.
// Crear los siguientes Métodos:
// • Soyunasilla que retorno el color y el material de la silla.
// • Producto que retorne el còdigo de fabricación y el precio.
// • Venta que retorne el total para facturar a un cliente.

// var total = 0;
// var silla = {
//     Material: 'Madera',
//     Color: 'red',
//     CodigoFabricacion: '01564',
//     Precio: 1025,
//     SoyUnaSilla: function(){
//         document.write(`<p style="color:${this.Color}">La silla tiene un material ${this.Material} tiene un color ${this.Color}</p>`);
//     },
//     Producto: function(){
//         document.write(`<p>El código de fabricación es: ${this.CodigoFabricacion} y el precio es: ${this.Precio}</p>`);
//     },
//     Venta: function(){
//         total = total + this.Precio;
//         document.write(`El total para facturar es: ${total}</p>`);
//     }
// };

// silla.SoyUnaSilla();
// silla.Producto();
// silla.Precio = silla.Precio + 2000;
// silla.Venta();

// Crear el objeto Persona
// Asignarle las siguientes propiedades: nombre, apellido, edad, email.
// Asignarle los siguientes métodos:
// ○ yoSoy, que retorne el nombre y el apellido.
// ○ tengo, que retorne la edad.
// ○ contacto, que retorne el email.
// Ejecutar todos los métodos para verificar su funcionamiento.

// var persona = {
//     nombre:'Pepe',
//     apellido: 'Gonzalez',
//     edad: 24,
//     email:'pepe@gonzalez',
//     yoSoy: function(){
//         document.write(`<p>Mi nombre es ${this.nombre} ${this.apellido} </p>`)

//     },
//     tengo: function(){
//         document.write(`<p>Mi edad es ${this.edad}.</p>`)
//     },
//     contacto: function(){
//         document.write(`<p>Mi email es ${this.email}</p>`)
//     }
// }

// persona.yoSoy();
// persona.tengo();
// persona.contacto();

// Solicita que el usuario pueda realizar clic en un botón que diga ver productos, y
// muestre al menos 9 productos, los mismos deberán mostrar en forma
// de lista los siguientes datos:
// a. Nombre del producto.
// b. Imagen del producto.
// c. Precio del producto.
// Las imágenes tiene que poder ser clicleables por el usuario, y al
// mismo tiempo, pide que cada uno de los productos tenga formato de
// tarjeta, color de fondo #252273 y el color del contenido tiene que ser
// #66B1F2. Cuando el usuario se posicione encima tiene que cambiar
// el color del fondo y el contenido, invirtiendo los colores propuestos.

function mostrarProductos() {
  var productos = [
    {
      nombre: "Producto 1",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_827721-MLA52264149794_112022-V.jpg",
      precio: 50.0,
    },
    {
      nombre: "Producto 2",
      imagen:
        "https://www.tecnologia-informatica.com/wp-content/uploads/2018/07/funciones-de-la-computadora-1.jpeg",
      precio: 150.0,
    },
    {
      nombre: "Producto 3",
      imagen:
        "https://www.tecnologia-informatica.com/wp-content/uploads/2018/08/caracteristicas-de-las-computadoras-1.jpeg",
      precio: 300.0,
    },
    {
      nombre: "Producto 4",
      imagen: "https://www.unidiversidad.com.ar/cache/pc_1000_1100.jpg",
      precio: 400.0,
    },
    {
      nombre: "Producto 5",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWjORXnhuAMjbrs9yNFtdLCtslCWuwAQHpQ&usqp=CAU",
      precio: 505.5,
    },
    {
      nombre: "Producto 6",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_711167-MLA51168584514_082022-W.jpg",
      precio: 620.5,
    },
    {
      nombre: "Producto 7",
      imagen: "https://ar-media.hptiendaenlinea.com/wysiwyg/use_4_5.jpg",
      precio: 710.4,
    },
    {
      nombre: "Producto 8",
      imagen:
        "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/4IK3K6EJ2NBNJFM4J5OSJBJT7Q.jpg",
      precio: 800.49,
    },
    {
      nombre: "Producto 9",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe9dHxIlq1iMbBhT5D_DTP3ZPBaTEiHNFzJw&usqp=CAU",
      precio: 990.0,
    },
  ];
  var contenedor = document.getElementById("contenedorProductos");

  var lista = document.createElement("ul");

  productos.forEach(function (producto) {
    var elementoLista = document.createElement("li");

    var nombreProducto = document.createElement("h3");
    nombreProducto.textContent = producto.nombre;
    elementoLista.appendChild(nombreProducto);

    var imagenProducto = document.createElement("img");
    imagenProducto.src = producto.imagen;
    elementoLista.appendChild(imagenProducto);
    var precioProducto = document.createElement("p");
    precioProducto.textContent = "$" + producto.precio;
    elementoLista.appendChild(precioProducto);
    lista.appendChild(elementoLista);
  });

  contenedor.appendChild(lista);
}
