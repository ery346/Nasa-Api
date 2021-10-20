const boton = document.querySelector('#btn');
const informacion = document.querySelector('#informacion');
const pieDePagina = document.querySelector('#infofinal')
const gifts = document.querySelector('#gifts');
listeners()
function listeners(){
    boton.addEventListener('click', generarApi);
}


function generarApi(){
    const key = '585TuzHV7BgijSs0no8A1rVWY6ChAEcVsj7ltqiD';

    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}`

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarDatos(resultado));
}

function  mostrarDatos(datos){
    limpiarHTML();
    const {copyright, date, explanation, title, hdurl} = datos;

    

    const a = document.createElement('p');
    const b = document.createElement('p');

    const gift = document.createElement('p');

    a.innerHTML = `
    <p>Titulo : ${title}</p>
    Descripcion de la imagen :  <p>${explanation}</p>
    <img src="${hdurl}" width="1024" height="1005" /img>
    `;

    b.innerHTML = `
    Copyright : ${copyright}
    <p>Fecha : ${date}</p>`;

    const astronauta = './astronaut1.gif';
    const gatoEspacial = './giphy-cat.gif';
    gift.innerHTML = `
    <a href="https://api.nasa.gov/">
        <img src="${astronauta}" class="astronauta" ></a>
        <img src="${gatoEspacial}" class="caat" >
    `;

    gifts.appendChild(gift);
    pieDePagina.appendChild(b)
    informacion.appendChild(a);
    console.log(datos)
}


function limpiarHTML(){
    while(gifts.firstChild){
        gifts.removeChild(gifts.firstChild)
    }
    while(pieDePagina.firstChild){
        pieDePagina.removeChild(pieDePagina.firstChild)
    }
    while(informacion.firstChild){
        informacion.removeChild(informacion.firstChild)
    }
}


