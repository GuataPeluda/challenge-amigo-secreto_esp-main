// El principal objetivo de este desafío es fortalecer tus habilidades en 
// //lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let nombreAmigo = "";

function cambiarElemento(idElemento,textoElemento) {
    document.getElementById(idElemento).innerHTML = textoElemento;
}

function agregarAmigo() {
    nombreAmigo = document.querySelector("#amigo").value;
    if(nombreAmigo==""){
        alert("Debes escribir un nombre para agregar");
    }else{
        if(listaDeAmigos.includes(nombreAmigo)){
            alert("No puedes repetir el nombre de amigo");
        }else{
            listaDeAmigos.push(nombreAmigo);
            document.querySelector("#amigo").value = "";
        }
    }
    console.log(listaDeAmigos);
    listarAmigos();
    return;
}

function listarAmigos() {
    const ulTag = document.getElementById("listaAmigos");
    ulTag.innerHTML = "";
    if(listaDeAmigos.length > 0){
            for(i = 0;i < listaDeAmigos.length;i++){
            //generamos un li para cada amigo dentro del ul existente
            const liTag = document.createElement("li");
            liTag.innerHTML = listaDeAmigos[i];
            ulTag.appendChild(liTag);
        }
    }
}

function sortearAmigo() {
    if(listaDeAmigos.length==0){
        alert("No hay amigos en la lista para sortear");
    }else{
        let indice = Math.floor(Math.random() * listaDeAmigos.length);
        const ulRes = document.getElementById("resultado");
        const liRes = document.createElement("li");
        liRes.innerHTML = listaDeAmigos[indice];
        ulRes.appendChild(liRes);
    }
    return;
}