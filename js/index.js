let recetassection= document.querySelector(".recetassection")
fetch('https://dummyjson.com/recipes')
    .then(function(response) {
            return response.json()
    })
    //No modificar hasta aca
    
    .then(function(data) {
        console.log(data);
        let informacion = "";
        for (let i = 0; i < data.recipes.length; i++) {
            console.log(data.recipes[i]);
            informacion+= 
            `<article>
                <img src="${data.recipes[i].image}" alt="imagen receta" class="imgfetch"/> 
                <p>Titulo: ${data.recipes[i].name}</p>
                <p>Dificultad: ${data.recipes[i].difficulty}</p>
                <p><a href="./receta.html?id=${data.recipes[i].id}">Link a la receta</a></p>
            </article>`
        } 
        recetassection.innerHTML=informacion
    })
    //No modificar desde aca
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

