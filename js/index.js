let recetassection= document.querySelector(".recetassection")
let vermas = document.querySelector(".vermas");
let skip = 0;
let limit = 10;

function limiterecetas() {
    
fetch(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`)
    .then(function(response) {
            return response.json()
    })
    //No modificar hasta aca
    
    .then(function(data) {
        console.log(data);
        let informacion = recetassection.innerHTML;
        for (let i = 0; i < data.recipes.length; i++) {
            informacion+= 
            `<article class="recetasarticle">
                <img src="${data.recipes[i].image}" alt="imagen receta" class="imgfetch"/> 
                <p class="azulindex" >Titulo: ${data.recipes[i].name}</p>
                <p class="azulindex">Dificultad: ${data.recipes[i].difficulty}</p>
                <p class="azulindex"><a href="./receta.html?id=${data.recipes[i].id}" class="azulindex link">Link a la receta</a></p>
            </article>`
        } 
        recetassection.innerHTML=informacion
    })
    //No modificar desde aca
    .catch(function(error) {
            console.log("Error: " + error);
    })
    }
    limiterecetas();
    vermas.addEventListener("click" , function () {
        skip+=limit;
        limiterecetas();
    });

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

