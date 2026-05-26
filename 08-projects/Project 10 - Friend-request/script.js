var type=document.querySelector("h5");
var add =document.querySelector("#add");
var remove = document.querySelector(".remove");

 add.addEventListener("click",function(){
     if (type.innerHTML === "Friends") {
        alert("You guys are friends");
    } else {
        type.innerHTML = "Friends";
        type.style.marginLeft = "280px";
        remove.style.display = "block";
    }
});
        

    

  remove.addEventListener("click",function(){
    type.innerHTML="Private account";
     remove.style.display="none";
     type.style.marginLeft="235px";
        

    
 });

