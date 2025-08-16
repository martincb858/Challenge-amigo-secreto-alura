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
            limpiarInput();
            return;
        }else{
            agregarLista(nombreAmigo);
            return;
        }
    }  
}

function limpiar(){
    document.getElementById("amigo").value = "";
    document.getElementById("resultado").innerHTML = "";
    return;
}

function agregarLista(nombreAmigo){
    amigos.push(nombreAmigo);
    limpiar();
    mostrarAmigos(nombreAmigo, "listaAmigos");
    return;
}

function limpiarArray(){
    amigos =[];
    document.getElementById("listaAmigos").innerHTML = "";
    return;
}


function mostrarAmigos(nombre, listaDestino) {
    let nuevoLi = document.createElement("li");
    let lista = document.getElementById(listaDestino);
    nuevoLi.textContent = nombre;
    lista.appendChild(nuevoLi);
    return;
}

function generarNumero(){
    let numero = Math.floor(Math.random() * amigos.length)
    return numero;
}

function sortearAmigo(){
    if (amigos.length > 0) {
        let numero = generarNumero();
        mostrarAmigos(amigos[numero], "resultado");
        limpiarArray();
        return;
        
    }else{
        alert("Por favor, agrega amigos a la lista antes de sortear.");
        return;
    }
}