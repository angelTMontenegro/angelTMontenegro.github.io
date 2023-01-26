let hideBoton = document.getElementById("hideBoton");

let hideText = document.getElementById("hideText");

hideBoton.addEventListener("click", toogleText);

function toogleText(){
    hideText.classList.toggle("show");
    if(hideText.classList.contains("show")){
    hideBoton.innerHTML = "Leer menos";
    }
    else {
      hideBoton.innerHTML = "Leer Más";  
    }
}