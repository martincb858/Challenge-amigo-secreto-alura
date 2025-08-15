// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }else{
        if (amigos.includes(nombreAmigo)){
            alert("El amigo ya está en la lista.");
            return;
        }else{
            amigos.push(nombreAmigo);
            mostrarAmigos(nombreAmigo);
            limpiarInput();
            return;
        }
    }  
}

function limpiarInput(){
    document.getElementById("amigo").value = "";
}

function mostrarAmigos(nombre) {
    let nuevoLi = document.createElement("li");
    let lista = document.getElementById("listaAmigos");
    nuevoLi.textContent = nombre;
    lista.appendChild(nuevoLi);
}