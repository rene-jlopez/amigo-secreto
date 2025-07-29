let listadoAmigos = [];


function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value.trim();
    console.log(nombreAmigo);

    if(nombreAmigo == ''){
        document.getElementById('btn-add').setAttribute('Disables', 'true');
    }
    else{

        listadoAmigos.push(nombreAmigo);
        console.log(listadoAmigos);
        limpiarNombre();
        imprimirLista(listadoAmigos);
    }
    return;
}

function limpiarNombre(){
    document.getElementById('amigo').value='';
}

function imprimirLista(nombres){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = listadoAmigos;
}

function sortearAmigo(){
    alert('wiiiiiii');
}

function enter(event){
    if(event.key === 'Enter'){
        agregarAmigo();
    }
}