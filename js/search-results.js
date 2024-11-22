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
let nombre=queryStringObj.get("Buscar");

fetch(`https://dummyjson.com/recipes${nombre}`) //hago lo de comillas invertidas, el /${clave}
    .then(function(response){ //response es el array que veo en el link
        return response.json();
    })
    .then(function(data) {
        let resultado = "";
        for (let i = 0; i < data.recipes.length; i++) {
            console.log(data.recipes[i]);
            //voy acumulando la información que quiero
            resultado+= 
            `<article>
                <p>Resultados de búsqueda para: ${data.recipes[i].name}</p>
                <img src="${data.recipes[i].image}" alt="Receta"/>
                <p>Título: ${data.recipes[i].name}</p>
                <p>Link al detalle: <a href="https://dummyjson.com/recipes/${id[i]}"> ${id[i].name}</a></p>
            </article>`
        } //.image . name y .status lo saco de la API, id= porque lo hace? --> poruqe yo quiero de la API busque ese
        resultados.innerHTML=resultado
    })
    .catch(function(error) {
        console.log("Error: " + error);
    })