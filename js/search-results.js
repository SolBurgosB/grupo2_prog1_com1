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

