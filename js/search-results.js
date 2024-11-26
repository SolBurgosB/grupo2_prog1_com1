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

fetch(`https://dummyjson.com/recipes`) //hago lo de comillas invertidas, el /${clave}
    .then(function(response){ //response es el array que veo en el link
        return response.json();
    })
    .then(function(data) {
        let resultado = "";
        let encontrado = false; 
        for (let i = 0; i < data.recipes.length; i++) {
            if (data.recipes[i].name.toUpperCase().includes(nombre.toUpperCase())) {
                encontrado = true;
                console.log(data.recipes[i]);
                //voy acumulando la información que quiero
                resultado+= 
                `<article class="artsearch">
                    <p class="resul">Resultados de búsqueda para: ${data.recipes[i].name}</p>
                    <img src="${data.recipes[i].image}" alt="Receta" class="foto"/>
                    <p>Título: ${data.recipes[i].name}</p>
                    <p><a href="./receta.html?id=${data.recipes[i].id}" class="puntual2">Link al detalle</a></p>
                </article>`
            }
        } //.image . name y .status lo saco de la API, id= porque lo hace? --> poruqe yo quiero de la API busque ese
        if (encontrado){
            resultados.innerHTML=resultado
        }
        else {
            resultados.innerHTML=`<p>No se encontraron recetas que coincidan con: <strong>${nombre}</strong>.</p>`
        }
    })
    .catch(function(error) {
        console.log("Error: " + error);
    })