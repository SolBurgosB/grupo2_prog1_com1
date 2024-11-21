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

let flogin= document.querySelector(".flogin")
let evalido= document.querySelector(".evalido")
let cvalida= document.querySelector(".cvalida")
flogin.addEventListener("submit", function(event){
    let valida = true
    event.preventDefault();
    if (evalido.value == "") {
        alert("Por favor, complete el campo email")
        valida= false
    }
    if (cvalida.value == "") {
        alert("Por favor, complete el campo contraseña")
        valida= false
    }
    if (valida) {
        flogin.submit()
    }
})