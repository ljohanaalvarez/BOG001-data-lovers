//Llamando elementos del DOM.
const menu = document.querySelector("#menu");
const buttonPokeMenu = document.querySelector("#buttonPokeMenu");
const showSubMenu = document.querySelector(".showSubMenu");
const showAbout = document.querySelector(".showAbout");
const showContact = document.querySelector(".showContact");
const buttonMenu = document.querySelector(".buttonMenu");
const buttonAbout = document.querySelector("#buttonAbout");
const buttonContact = document.querySelector("#buttonContact");
const logo = document.querySelector(".logo")

//Función que nos permite dar sonido al logo
logo.addEventListener("click", () =>{
    const audioTagPokemon = document.createElement("audio");
    audioTagPokemon.setAttribute("src", "./audio/pokemonsong.mp3");
    audioTagPokemon.play();
})

//Función para mostrar el menu en tamaño movil
buttonPokeMenu.addEventListener("click", showMenu);
function showMenu(){
    menu.classList.toggle("appear");
}

//Función para mostrar el menu en tamaño escritorio
buttonMenu.addEventListener("click", showSubButtons);
function showSubButtons(){
    showSubMenu.classList.toggle("appearTwo");
}

//Función que nos permite desplegar la opción About en tamaño escritorio
 buttonAbout.addEventListener("click", showAboutMenu);
 function showAboutMenu(){
    showAbout.classList.toggle("appearThree");
 }

 //Función para desplegar la opción Contact en tamaño escritorio
 buttonContact.addEventListener("click", showContactMenu);
 function showContactMenu(){
    showContact.classList.toggle("appearFour");
 }







