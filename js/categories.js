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

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get("categories");
let categorias= document.querySelector(".categorias")
fetch('https://dummyjson.com/recipes/tags')
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
                <p><a href="./category.html?categoria=${data[i]}">${data[i]}</a></p>
            </article>`
        } 
        categorias.innerHTML=informacion
    })
    //No modificar desde aca
    .catch(function(error) {
            console.log("Error: " + error);
    })

