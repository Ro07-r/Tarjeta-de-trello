const trash = document.querySelectorAll('.fa-trash-alt');
for(let i=0; i<trash.length; i++){
    trash[i].addEventListener("click", function(){
        this.style.color = "#1c2833";
    })
}

const titulo = document.querySelector('p');
titulo.addEventListener("mouseover", function(){
    this.style.textDecoration = "underline";
    this.style.color = "#34495e";
})

const title = document.querySelector('p');
title.addEventListener("mouseleave", function(){
    this.style.textDecoration = "none";
    this.style.color = "black";
})





