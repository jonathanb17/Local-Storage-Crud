'use strict'

let formulario = document.querySelector('#formpeliculas');

formulario.addEventListener('submit', () => {
    console.log('hola');
    let titulo = document.querySelector('#addpelicula').value; // tomas el valor del input
    // que tenga algo el localstorage
    if (titulo.length >= 1) {
        localStorage.setItem(titulo, titulo);
    }

});

let ul = document.querySelector('#peliculas-list');

// recorremos el localstorage
for (const i in localStorage) {
    console.log(localStorage[i]);
    if (typeof localStorage[i] === "string") {
        let li = document.createElement('li');
        li.append(localStorage[i]); // lo que tenga el local storage lo inserto en li
        ul.append(li); // lo que tenga li lo inserto el ul
    }
}


// aqui usamos el metodo de Borra una Pelicula del LocalStorage
let formulariob = document.querySelector('#formBorraPeliculas');

formulariob.addEventListener('submit', () => {
    console.log('hola');
    let titulo = document.querySelector('#borrarpelicula').value; // tomas el valor del input
    // que tenga algo el localstorage
    if (titulo.length >= 1) {
        localStorage.removeItem(titulo);
    }

});


