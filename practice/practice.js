const title=document.querySelector("#title");

const CLICKED_CLASSS="clicked";

function handleClick(){
  title.classList.toggle(CLICKED_CLASSS);
}

function init(){
    title.addEventListener("click",handleClick);
}
init();