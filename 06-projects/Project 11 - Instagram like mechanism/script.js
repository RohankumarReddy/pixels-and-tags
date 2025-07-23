var c =document.querySelector(".container");
var heart = document.querySelector("i");
var b =document.querySelector("button");

c.addEventListener("dblclick",function(){
    heart.style.transform="translate(-50%,-50%) scale(1)";
    setTimeout(function(){
        heart.style.transform="translate(-50%,-50%) scale(0)";
    },500);
    b.innerHTML="Likes:1";
    
});