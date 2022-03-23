//eventos DOM (Document object Model)
document
.getElementById("formulario-pruducto")
.addEventListener("submit", function (evento){
//evaluar el comportamiento del formulario

evento.preventDefault(); //preventDefault para guardar sin refrescar en la pagina

//obtener los valores del formulario

const nombre = document.getElementById("nombre").value,
      precio = document.getElementById("precio").value,
      año = document.getElementById("año").value;
      
      
      //crear nuevo objeto "producto"
const producto = new Product (nombre, precio, año);

//Crear nuevo usuario de interfaz
const ui = new UI();

//Input de validacion de ususario
if (nombre === "" || precio === "" || año === ""){
    ui.showMessage("Por favor insertar datos")
}

//Guardar producto
ui.addProducto(producto);
ui.showMessage("producto agregado")
ui.resetForm();
})

document.getElementById("Producto-lista").addEventListener("click", (e) => {
    const ui = new UI();
    ui.deleteProducto(e.target);
    e.preventDefault();
}
)

//Clase producto
class Producto{
    constructor(nombre, precio, año){
        this.nombre = nombre;
        this.precio = precio;
        this.año = año;
    }
}

// Clase Usuario Interfaz

class UI {
    addProducto(producto){
        const productoLista = document.getElementById("producto-lista");
        const elemento = document.createElement("div");
        elemento.innerHTML = `
        <div class="tarjeta texto margen4"> 
            <div class="tarjeta-body">
                <strong>Producto</strong> ${producto.nombre} -
                <strong>Precio</strong> ${producto.precio} -
                <strong>Año</strong> ${producto.año} -
                <a href="#" class="btn btn-error" name = "eliminar">Eliminar</a>
            </div>
        </div>
        `;

        productoLista.appendChild(element); //appendChild = objeto hijo

        
    } 
    //Resetear valores de formulario

        resetForm(element) {
            document.getElementById("formulario-producto").reset();
        }

        deleteProducto(elemento){
            if(elemento.nombre === "eliminar"){
                element.parentElement.parentElement.remove();
                this.showMessage("El producto se ha eliminado")
            }
        } 

        showMessage(mensaje, cssClass) {
            const div = document.createElement("div")
            div.className = `alert alert-${cssClass}`;
            div.appendChild(document.createTextNode(mensaje));

            //Mostrar en el DOM

            const contenido = document.querySelector(".container");
            const app = document.querySelector("#App")

            //Insertar mensaje en el interfaz usuario
        }
}