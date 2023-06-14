// PRODUCTOS
const productos = [
  // Abrigos
    {
    id: "mouse-01",
    titulo: "mouse 01",
    imagen: "./img/mouses/01.jpg",
    categoria: {
        nombre: "mouses",
        id: "mouses",
    },
    precio: 1000,
    },
    {
    id: "mouse-02",
    titulo: "mouse 02",
    imagen: "./img/mouses/02.jpg",
    categoria: {
        nombre: "mouses",
        id: "mouses",
    },
    precio: 1000,
  },
  {
    id: "mouse-03",
    titulo: "mouse 03",
    imagen: "./img/mouses/03.jpg",
    categoria: {
      nombre: "mouses",
      id: "mouses",
    },
    precio: 1000,
  },
  {
    id: "mouse-04",
    titulo: "mouse 04",
    imagen: "./img/mouses/04.jpg",
    categoria: {
      nombre: "mouses",
      id: "mouses",
    },
    precio: 1000,
  },
  {
    id: "mouse-05",
    titulo: "mouse 05",
    imagen: "./img/mouses/05.jpg",
    categoria: {
      nombre: "mouses",
      id: "mouses",
    },
    precio: 1000,
  },
  // Camisetas
  {
    id: "casco-01",
    titulo: "casco 01",
    imagen: "./img/cascos/01.jpg",
    categoria: {
      nombre: "Cascos",
      id: "cascos",
    },
    precio: 1000,
  },
  {
    id: "casco-02",
    titulo: "casco 02",
    imagen: "./img/cascos/02.jpg",
    categoria: {
      nombre: "Cascos",
      id: "cascos",
    },
    precio: 1000,
  },
  {
    id: "casco-03",
    titulo: "casco 03",
    imagen: "./img/cascos/03.jpg",
    categoria: {
      nombre: "Cascos",
      id: "cascos",
    },
    precio: 1000,
  },
  {
    id: "casco-04",
    titulo: "casco 04",
    imagen: "./img/cascos/04.jpg",
    categoria: {
      nombre: "Cascos",
      id: "cascos",
    },
    precio: 1000,
  },
  {
    id: "casco-05",
    titulo: "casco 05",
    imagen: "./img/cascos/05.jpg",
    categoria: {
      nombre: "Cascos",
      id: "cascos",
    },
    precio: 1000,
  },
  {
    id: "casco-06",
    titulo: "casco 06",
    imagen: "./img/cascos/06.jpg",
    categoria: {
      nombre: "Cascos",
      id: "cascos",
    },
    precio: 1000,
  },
  {
    id: "casco-07",
    titulo: "casco 07",
    imagen: "./img/cascos/07.jpg",
    categoria: {
      nombre: "Cascos",
      id: "cascos",
    },
    precio: 1000,
  },
  {
    id: "casco-08",
    titulo: "casco 08",
    imagen: "./img/cascos/08.jpg",
    categoria: {
      nombre: "Cascos",
      id: "cascos",
    },
    precio: 1000,
  },
  // Pantalones
  {
    id: "lapto-01",
    titulo: "lapto 01",
    imagen: "./img/laptos/01.jpg",
    categoria: {
      nombre: "Laptos",
      id: "laptos",
    },
    precio: 1000,
  },
  {
    id: "lapto-02",
    titulo: "lapto 02",
    imagen: "./img/laptos/02.jpg",
    categoria: {
      nombre: "Laptos",
      id: "laptos",
    },
    precio: 1000,
  },
  {
    id: "lapto-03",
    titulo: "lapto 03",
    imagen: "./img/laptos/03.jpg",
    categoria: {
      nombre: "Laptos",
      id: "laptos",
    },
    precio: 1000,
  },
  {
    id: "lapto-04",
    titulo: "lapto 04",
    imagen: "./img/laptos/04.jpg",
    categoria: {
      nombre: "Laptos",
      id: "laptos",
    },
    precio: 1000,
  },
  {
    id: "lapto-05",
    titulo: "lapto 05",
    imagen: "./img/laptos/05.jpg",
    categoria: {
      nombre: "Laptos",
      id: "laptos",
    },
    precio: 1000,
  },
];
/* 1)un array con objetos que simula cada uno de los productos
2)cada producto tiene su id y categoria
3) cada categoria tiene su id que esta incluido en el producto, es como la llave foranea de una tabla sql pero en js */

const contenedorProductos = document.querySelector("#contenedor-Productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productoselegidos) {

  contenedorProductos.innerHTML = "";

  productoselegidos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
                    <img class="producto-imagen" src="${producto.imagen}" alt="">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">${producto.precio}</p>
                        <button class="producto-agregar" id="${producto.id}">Agregar</button>
                    </div>
    `;
    contenedorProductos.append(div);
    
  });


  /*  1) Se crea una funcion(cargarProductos), recibira un array con objetos(productos) y trabajara con este. 
  2) creamos una funcion (productoselegidos) que tendra un forEach con el que manejara cada elemento del array 
  3)por cada elemeto ira externamente creando un div ; y luego le asignara una clase css.
  4) a este div le insertaremos codido html para ir creando el modelo del producto e ira
  interpolando la informacion del objeto(con cada uno "forEach")
  5) por ultimo al objeto ya creado se lo asignamos al div contenedor y lo visualizara en 
  la pagina
  6)para cada carga le borraremos los elementos porque se iran acumulando 
  */
  
  actualizarBotonesAgregar();
};
cargarProductos(productos);


botonesCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {

    botonesCategorias.forEach(boton => boton.classList.remove("active")); 
    e.currentTarget.classList.add("active");
      /*e.target.classList.add("active");*/
    /* 1)es para que ningun boton tenga la clase
    2)luego hacemos referencia al elemento seleccionado(currentTarget) y le agregamos la clase */

      /* dependiendo del boton que pulsemos se filtrara el array y cambiara el titulo o 
    estara como lo dejamos en este caso usamos un condicional if else */
    if (e.currentTarget.id != "todos")/*  hacemos referencia al elementoque estamos pulsando y si no tiene ese id se ejecutara este condicional */
    {
      const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
      cargarProductos(productosBoton); /* le enviamos la variable con los array ya filtrado */
      
      cargarProductos(productosBoton);
    } else {
        tituloPrincipal.innerText = "Todos los productos";
        cargarProductos(productos);
    }
    
      })
})
    
  /*  currentarget hace objetivo  al elemento al que le estamos dando el eventListener (directamente al boton) ya que con solo target le 
  al pulsar el icono le estaremos asignando la clase que es lo que no queremos  .
   Identifica el target (objetivo) actual del evento, ya que el evento atraviesa el DOM. Siempre hace referencia al elmento al cual el controlador del evento fue asociado, a diferencia de event. target , que identifica el elemento el el que se produjo el evento */
    
function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");
      /* estamos seleccionando los botones en el html y se creara unescape
  y lo que pasara es que se creara una lista con cada elemento que tenga 
  esa clase(".producto-agregar") y esta funcion se ejecutara cada ves que 
  pulsemos el boton o de forma predeterminada ya que se estara imprimiendo
  los objeto junto con los botones; */
  
  botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
  });
  /*1)ya teniendo la lista de los botones de cada producto para agregar al producto 
  2)queremos que cada boton tenga un evento click para ejecutar una funcion que guardara el producto en un array junto
  a la cantidad de productos que nosotros hemos pulsado;
    */
}

/* queremos que se guarda en un array los elementos y que tambien se guarde la cantidad de elemento que haya  */


let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}
// es para que no c borre los objetos que tenemos en el carrito

function agregarAlCarrito(e) {
  
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(producto => producto.id === idBoton); /*selecciona la propiedad "id" del elemento que tenga el id del boton que pulsamos */
  
  
  if (productosEnCarrito.some(producto => producto.id === idBoton)) {
    const index = productosEnCarrito.findIndex(
      (producto) => producto.id === idBoton
    );
    productosEnCarrito[index].cantidad++;
    /** si existe ya el elemento 
    1)obtemos el indice del elemento ".findIndex" 
    2)  luego le agregamos a ese elemento 1; 
    El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada.
     */
  } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }
  console.log(productosEnCarrito)
  actualizarNumerito();

  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
};

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );
  numerito.innerText = nuevoNumerito;
  console.log(numerito);
  /*suma las cantidades de los productos que hay en el array 
  El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor. */
}
    

