let numeroAleatorio = 0;
let listadoAmigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value.trim();
    //console.log(nombreAmigo);

    if(nombreAmigo == ''){
        document.getElementById('btn-add').setAttribute('disabled', 'true');
        alert("Por favor ingresa un nombre valido");
    }
    else{

        listadoAmigos.push(nombreAmigo);
        console.log(listadoAmigos);
        limpiarNombre();
        imprimirLista(listadoAmigos);
    }
}

function limpiarNombre(){
    document.getElementById('amigo').value='';
}

function imprimirLista(listaNombres){
    let lista = document.getElementById('listaAmigos');
    // limpia la lista en html cada vez que se llama la funcion
    lista.innerHTML = '';
    
    for(let nombre of listaNombres){
        // Imprime el listado de los nombres dentro del html
        let newLi = document.createElement("li");
        newLi.textContent = nombre;
        lista.appendChild(newLi);
    }
}

function sortearAmigo(){
    
    if(listadoAmigos.length === 0){
        alert("No hay amigos en la lista para sortear");
        return;
    }
    else{
        numeroAleatorio = Math.floor(Math.random()*listadoAmigos.length);
        console.log(numeroAleatorio)
        alert(`Tu amigo secreto sera: ${listadoAmigos[numeroAleatorio]}`);
        listadoAmigos.splice(numeroAleatorio, 1);
        imprimirLista(listadoAmigos);
        console.log(listadoAmigos);
    }
}

function enter(event){
    if(event.key === 'Enter'){
        agregarAmigo();
    }
}