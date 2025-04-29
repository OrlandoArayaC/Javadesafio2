let borde = document.querySelector ("img");
let parrafo = document.querySelector ("p")


borde.addEventListener("click", () => {

    if (borde.style.border === "4px solid orange") {
        borde.style.border = '';
        parrafo.innerHTML = "Sinbordes";
    }else{
        borde.style.border = "4px solid orange";
        parrafo.innerHTML = "Con bordes"
    }
})

let button =document.querySelector("button")
button.addEventListener("click",() =>{

    
    if (borde.style.border === "4px solid orange") {
        borde.style.border = ""; 
        parrafo.innerHTML = "Sin bordes"; 
    }   else{
        borde.style.border = "4px solid orange";
        parrafo.innerHTML = "Con bordes" 
    }
})