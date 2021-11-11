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
    const {copyright, date, explanation, title, url} = datos;
    
    if (datos.url === 'youtube') {
        
        const a = document.createElement('p');
        a.innerHTML = `
        <p>Titulo : ${title}</p>
        Descripcion de la imagen :  <p>${explanation}</p>
        <p></p>
        <iframe src="${url}" width="900" height="800"  allowfullscreen></iframe>
        
        `;
    informacion.appendChild(a);
    }else{
        const a = document.createElement('p');
        a.innerHTML = `
        <p>Titulo : ${title}</p>
        Descripcion de la imagen :  <p>${explanation}</p>
        <img src="${url}" width="900" height="800" /img>
      
        `;
    informacion.appendChild(a);
    }

    const b = document.createElement('p');
    const gift = document.createElement('p');


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


