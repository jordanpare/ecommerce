import { productoServicios } from "../servicios/productos-servicios.js";

const form = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id"); 

    if(id === null){
        window.location.href = "/screens/error.html"
    }
    const imagenUrl = document.querySelector("[data-url]");
    const nombre = document.querySelector("[data-nombre]");
    const categoria  = document.querySelector("[data-categoria]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");
    

    try{
        const perfil = await productoServicios.detalleProducto(id);
        if(perfil.nombre && perfil.imagenUrl ){
            nombre.value = perfil.nombre;
            imagenUrl.value = perfil.imagenUrl;
            categoria.value = perfil.categoria;
            precio.value = perfil.precio;
            descripcion.value = perfil.descripcion;
            

        }else{
            throw new Error();
        }
      
    }catch(error){
        window.location.href = "/screens/error.html"
    }
    
}

obtenerInformacion();

form.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imagenUrl = document.querySelector("[data-url]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const categoria  = document.querySelector("[data-categoria]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    productoServicios.actualizarProducto(nombre, categoria, precio, imagenUrl, descripcion, id).then(()=>{
        window.location.href = "/screens/edicion_concluida.html"
    })
    
});