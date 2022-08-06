import { productoServicios } from "../servicios/productos-servicios.js";

const nuevoProducto = (nombre, imagenUrl, precio,id) => {
    const producto = document.createElement("div")
    const contenido = `
    <div>
    <img alt="#" class="producto__imagen" src="${imagenUrl}" />
    <div class="producto__contenido">
        <h4 class="producto__titulo">${nombre}</h4>
        <p class="producto__descripcion">${precio}</p>
        <a href="producto.html" class="producto__boton">Ver producto</a>
    </div>
    <div class="category__edition">
        <a class="edition__icon category__product-edit" href="./registroEdicion.html?id=${id}"><i class="fa-solid fa-pen-to-square"></i></a>
        <button class="edition__icon category__product-delete"  type="button" id="${id}"><i class="fa-solid fa-trash-can" ></i></button>
    </div>
    `;
    producto.innerHTML = contenido;
    producto.classList.add("producto");

    const btn = producto.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        productoServicios.eliminarProducto(id).then( respuesta =>{ 
        console.log(respuesta)
      }).catch((err) => alert("Ocurrio un error"));

    });
    
    return producto;
    
};

const productos = document.querySelector("[datos-productos]");

const render = async() =>{
    try{
        const listaProductos = await productoServicios.listaProductos();
        listaProductos.forEach((elemento) => {
            productos.appendChild(nuevoProducto(elemento.nombre, elemento.imagenUrl, elemento.precio,elemento.id))
        });
    }catch(error){
        console.log(error);
    }
}

render();