let cdetalle= document.querySelector(".cdetalle")
let queryString = location.search;
let queryStringObj = new URLSearchParams (queryString);
let categoria=queryStringObj.get("categoria");

fetch(`https://dummyjson.com/recipes/tags/${categoria}`)
    .then(function(response) {
            return response.json()
    })
    //No modificar hasta aca
    
    .then(function(data) {
        console.log(data);
        
        let informacion = "";
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            informacion +=
            `<article>
                <p>${data[i]}</p>
            </article>`
        } 
        cdetalle.innerHTML=informacion
    })
    //No modificar desde aca
    .catch(function(error) {
            console.log("Error: " + error);
    })