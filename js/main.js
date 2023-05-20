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

const contenedorProductos = document.querySelector("#contenedor-Productos");
function cargarProductos() {
  productos.forEach(producto => {
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
  /*  por cada uno de los elemento creara un div , le agregamos la clase del css y implementamos el contenido que tendra el producto. luego a cada divv
 sera agregado al contendor y luego ejecutamos la fucion */
};
cargarProductos();

/* 
                <div class="producto">
                    <img class="producto-imagen" src="./img/cascos/01.jpg" alt="">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">casco 01</h3>
                        <p class="producto-precio">$200</p>
                        <button class="producto-agregar">Agregar</button>
                    </div>
   </div> */