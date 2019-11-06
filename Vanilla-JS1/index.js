//const title = document.getElementById("title");
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    /* const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    }
    else {
        title.classList.remove(CLICKED_CLASS);
    } */
    title.classList.toggle(CLICKED_CLASS);
}

/* const BASE_COLOR ="white";
const OTHER_COLOR = "#95a5a6";

title.innerHTML = "Oh My God!!"

title.style.color = "red"

document.title = "Fuck!"

console.dir(title);

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }
    else {
        title.style.color = BASE_COLOR;
    }
} */

function init(){
    title.addEventListener("click" , handleClick);
}

init();
