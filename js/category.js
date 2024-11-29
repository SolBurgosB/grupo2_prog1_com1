let cdetalle= document.querySelector(".cdetalle")
let queryString = location.search;
let queryStringObj = new URLSearchParams (queryString);
let categoria=queryStringObj.get("categoria");

fetch(`https://dummyjson.com/recipes/tag/${categoria}`)
    .then(function(response) {
            return response.json()
    })
    //No modificar hasta aca
    
    .then(function(data) {
        console.log(data);
        
        let informacion = `<h2 class="titcateg">Categoría: ${categoria}</h2>`;
        for (let i = 0; i < data.recipes.length; i++) {
            informacion +=
            `<article class="artcateg">
                <img src="${data.recipes[i].image}" alt ="${data.recipes[i].name}" class="foto"/>
                <h2>${data.recipes[i].name}</h2>
                <p><strong>Dificultad:</strong> ${data.recipes[i].difficulty}</p>
                <p><a href="./receta.html?id=${data.recipes[i].id}" class="puntual">Ver detalle</a></p>
            </article>`
        } 
        cdetalle.innerHTML=informacion
    })
    //No modificar desde aca
    .catch(function(error) {
            console.log("Error: " + error);
    })