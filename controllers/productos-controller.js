import { productoServicios } from "../servicios/productos-servicios.js";

const nuevoProducto = (nombre, imagenUrl, precio) => {
    const producto = document.createElement("div")
    const contenido = `
    <div>
    <img alt="#" class="producto__imagen" src="${imagenUrl}" />
    <div class="producto__contenido">
        <h4 class="producto__titulo">${nombre}</h4>
        <p class="producto__descripcion">${precio}</p>
        <a href="producto.html" class="producto__boton">Ver producto</a>
    </div>
    `;
    producto.innerHTML = contenido;
    producto.classList.add("producto");
    
    return producto;
    
};

const productos = document.querySelector("[datos-productos]");

const render = async() =>{
    try{
        const listaProductos = await productoServicios.listaProductos();
        listaProductos.forEach((elemento) => {
            productos.appendChild(nuevoProducto(elemento.nombre, elemento.imagenUrl, elemento.precio))
        });
    }catch(error){
        console.log(error);
    }
}

render();