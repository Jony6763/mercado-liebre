// let user_base = "Jony";
// let pass_base = "kittypatitassuaves1234";

// function ingresarData(){
//     let user = prompt("Ingresa el usuario:");
//     let pass = prompt("Ingresa la contraseña:");

//     if(user == user_base && pass == pass_base){
//         mostrarPag();
//     }
//     else{
//         alert("Los datos son incorrectos");
//         ingresarData();
//     }
// }

// function mostrarPag(){
//     alert("Bienvenido a la pagina.")
// }

// ingresarData();

const carrito = [];
function agregarProducto(){
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const precio = document.getElementById("precio").value;

    
    const productoNuevo = {
        marca: (marca),
        modelo: (modelo),
        precio: (precio),
    }

    carrito.push(productoNuevo);

    const contenedor = document.getElementById("productosAgregados")
    
    const producto = document.createElement("div")
    producto.setAttribute("class","card")
    producto.setAttribute("style","width:300px; border:1px black solid")

    producto.innerHTML = `<p>${carrito[carrito.length-1].marca}</p><p>${carrito[carrito.length-1].modelo}</p><p>${carrito[carrito.length-1].precio}</p>`

    contenedor.appendChild(producto)


}

// let respuestaAp = prompt("¿Desea agregar un producto? (S/N)");

// while(respuestaAp=="S"){
//     agregarProducto();
//     respuestaAp = prompt("¿Desea agregar otro producto? (S/N)");
// }



for(let i=0;i<carrito.length;i++){
    console.log("Producto "+i+":")
    console.log(carrito[i]);
}




