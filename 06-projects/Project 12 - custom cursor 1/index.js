var c = document.querySelector(".custom");
var main = document.querySelector(".main");

main.addEventListener("mousemove",function(dets){
c.style.left =dets.x+"px";
c.style.top =dets.y+"px";

});