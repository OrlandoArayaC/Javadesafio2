let joven = parseInt(document.querySelector("#jovenInput").value) || 0;
let snoopy = parseInt(document.querySelector("#snoopyInput").value) || 0;
let toro = parseInt(document.querySelector("#toroInput").value) || 0;

console.log(joven)
console.log(snoopy)
console.log(toro)



let boton =document.querySelector("button");

let parrafo=document.querySelector("p");

let stickers = (joven + snoopy + toro);
 console.log(stickers)

  parrafo.innerHTML = "Seleccionar stickers";
 console.log(parrafo) 

boton.addEventListener("click",() =>{

    let joven = parseInt(document.querySelector("#jovenInput").value) || 0;
let snoopy = parseInt(document.querySelector("#snoopyInput").value) || 0;
let toro = parseInt(document.querySelector("#toroInput").value) || 0;

let stickers = (joven + snoopy + toro);

    if(stickers <= 10 ){
      
        parrafo.textContent = `Llevas ${stickers} stickers ` ;
        parrafo.style.color = "green";
        
    }else {
        parrafo.innerHTML="Excedes el maximo de stickers"
        parrafo.style.color = "red";
       
        }
  
})