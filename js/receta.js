let queryString = location.search;
let queryStringObj = new URLSearchParams (queryString);
let id=queryStringObj.get("id"); 

fetch(`https://dummyjson.com/recipes/${id}`) 
    .then(function(response){ 
        return response.json();
    })
    .then(function(data) {
        
       let nombre = document.querySelector(".nombre"); 
       nombre.innerText+=` ${data.name}` 
       let instruccion = document.querySelector(".instruccion");
       instruccion.innerText += `  ${data.instructions} `
       let tiempoP = document.querySelector(".tiempoP");
       tiempoP.innerText+=` ${data.prepTimeMinutes}`
       let tiempoC = document.querySelector(".tiempoC");
       tiempoC.innerText+=` ${data.cookTimeMinutes}`
       let foto= document.querySelector(".foto");
       foto.src=`${data.image}`
       let categoria= document.querySelector(".categoria");

        for (let i = 0; i < data.tags.length; i++) {
            categoria.innerHTML+=` <a class="unaporuna" href="./category.html?categoria=${data.tags[i]}">${data.tags[i]}</a>`   
        }

    })
    .catch(function(error) {
        console.log("Error: " + error);
        
    })

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
