let formulario= document.querySelector(".fheader")
let valido= document.querySelector(".iheader")
let completarb= document.querySelector(".completarb")
formulario.addEventListener("submit", function(event){
    let valida = true
    event.preventDefault();
    if (valido.value == " ") {
        completarb.style.display= "block"
        valida= false
    }
    if (valido.value.length < 3) {
        completarb.style.display= "block"
        valida= false
    }
    if (valida) {
        formulario.submit()
    }
})

let resultados = document.querySelector(".resultados")

let queryString = location.search;
let queryStringObj = new URLSearchParams (queryString);
let nombre=queryStringObj.get("q");
console.log(nombre);

fetch(`https://dummyjson.com/recipes/search?q=${nombre}`) 
    .then(function(response){ 
        return response.json();
    })
    .then(function(data) {
        console.log(data.recipes.length<=0);
        
        let resultado = `<p class="resul">Resultados de búsqueda para: <strong>${nombre}</strong></p>`;
        for (let i = 0; i < data.recipes.length; i++) {
                resultado+= 
                `<article class="artsearch">
                    <img src="${data.recipes[i].image}" alt="Receta" class="foto"/>
                    <p>Título: <strong>${data.recipes[i].name}</strong></p>
                    <p><a href="./receta.html?id=${data.recipes[i].id}" class="puntual2">Link al detalle</a></p>
                </article>`
             
        } 
        console.log(resultado);
        
        if (data.recipes.length <= 0) {
            resultado=`<p class="noresultados">No se encontraron recetas que coincidan con: <strong>${nombre}</strong>.</p>`
        }
        resultados.innerHTML= resultado
        })
    .catch(function(error) {
        console.log("Error: " + error);
    })