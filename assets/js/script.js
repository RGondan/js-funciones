function pintar(color){
    ele.style.backgroundColor = color
}

const ele = document.getElementById("ele1")
//ele.addEventListener('click', pintar);
ele.addEventListener("click", pintar.bind(this, 'yellow'))