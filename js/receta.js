let queryString = location.search;
let queryStringObj = new URLSearchParams (queryString);
let id=queryStringObj.get("id"); //id es el nombre de la clave

fetch(`https://dummyjson.com/recipes/${id}`) //hago lo de comillas invertidas, el /${clave}
    .then(function(response){ //response es el array que veo en el link
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        
       let nombre = document.querySelector(".nombre"); //esto es la clase del HTML
       nombre.innerText+=` ${data.name}` //este .algo tiene que coincidir con la API
       let instruccion = document.querySelector(".instruccion");
       instruccion.innerText+= `${data.instructions} `
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
