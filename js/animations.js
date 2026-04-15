
window.addEventListener("scroll",function(){

document.querySelectorAll(".fade-in").forEach(function(el){

let rect=el.getBoundingClientRect();

if(rect.top < window.innerHeight - 80){

el.classList.add("visible");

}

});

});

