const button = document.getElementById("thm")
const body = document.body

function changeClass(){
    body.classList.toggle("active")
}


button.addEventListener("click", changeClass)