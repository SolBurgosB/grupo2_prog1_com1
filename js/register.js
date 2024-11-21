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


let fregister= document.querySelector(".fregister")
let ervalido= document.querySelector(".ervalido")
let crvalida= document.querySelector(".crvalida")
let completare= document.querySelector(".completare")
let completarc= document.querySelector(".completarc")
fregister.addEventListener("submit", function(event){
    let valida = true
    event.preventDefault();
    if (ervalido.value == "") {
        completare.style.display= "block"
        valida= false
    }
    if (crvalida.value == "") {
        completarc.style.display= "block"
        valida= false
    }
    if (valida) {
        fregister.submit()
    }
})