// Lista global para almacenar los nombres ingresados
let amigos = []

function agregarAmigo() {
    const entrada = document.getElementById('amigo').value.trim();
    // Valida entradas vacías
    if (entrada === "") {
        alert("Por favor, inserte un nombre.");
        limpiarEntrada();
    } else {
        // Agrega el nombre a la lista y actualiza la visualización
        amigos.push(entrada);
        recorrerAmigos();
        limpiarEntrada();
    }
}

function recorrerAmigos() {
    limpiarLista();
    let lista = document.getElementById('listaAmigos');
    // Renderiza cada nombre como un elemento <li> en la lista
    for (let index = 0; index < amigos.length; index++) {
        let amigo = document.createElement("li");
        amigo.textContent = amigos[index]
        lista.appendChild(amigo);
    }
}

function sortearAmigo() {
    // Verifica que haya al menos un nombre antes de sortear
    if (amigos.length != 0) {
        // Selección aleatoria de un índice válido
        let indice = Math.floor(Math.random() * amigos.length) ;
        let ganador = amigos[indice];
        // Muestra el resultado y bloquea la interfaz
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo secreto sorteado es: ${ganador}`;
        limpiarLista();
        limpiarEntrada();
        bloquearInterfaz();
    } else {
        alert('Llena la lista de amigos primero para poder sortear!');
    }
}

// Elimina todos los elementos <li> de la lista visual
function limpiarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
}

// Limpia el campo de entrada de texto
function limpiarEntrada() {
    document.getElementById('amigo').value = "";
}

// Desactiva los botones y el campo de entrada tras el sorteo
function bloquearInterfaz() {
        document.getElementsByClassName('button-add')[0].setAttribute('disabled', 'true');
        document.getElementsByClassName('button-draw')[0].setAttribute('disabled', 'true');
        document.getElementById('amigo').setAttribute('disabled', 'true');
}