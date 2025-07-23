var n=7;

 for(var i=0;i<n;i++){
 document.querySelectorAll(".drum")[i].addEventListener("click",clicked);
 function clicked(){
   var buttoncol= this.innerHTML;

   switch (buttoncol) {
      case "w":
          var audio = new Audio("./sounds/tom-1.mp3");
         audio.play();
         break;
           case "a":
          var audio = new Audio("./sounds/tom-2.mp3");
          audio.play();
         break;
           case "s":
          var audio = new Audio("./sounds/tom-3.mp3");
          audio.play();
         break;
           case "d":
          var audio = new Audio("./sounds/tom-4.mp3");
          audio.play();
         break;
           case "j":
          var audio = new Audio("./sounds/snare.mp3");
          audio.play();
         break;  case "k":
          var audio = new Audio("./sounds/crash.mp3");
          audio.play();
         break;
           case "l":
          var audio = new Audio("./sounds/kick-bass.mp3");
          audio.play();
         break;
   
      default:alert("Unknown key enterned");
         break;
   }
   
 }
 
 }
 document.addEventListener("keypress",function(event){
 var keys=event.key;
 switch (keys) {
      case "w":
          var audio = new Audio("./sounds/tom-1.mp3");
         audio.play();
         break;
           case "a":
          var audio = new Audio("./sounds/tom-2.mp3");
          audio.play();
         break;
           case "s":
          var audio = new Audio("./sounds/tom-3.mp3");
          audio.play();
         break;
           case "d":
          var audio = new Audio("./sounds/tom-4.mp3");
          audio.play();
         break;
           case "j":
          var audio = new Audio("./sounds/snare.mp3");
          audio.play();
         break;  case "k":
          var audio = new Audio("./sounds/crash.mp3");
          audio.play();
         break;
           case "l":
          var audio = new Audio("./sounds/kick-bass.mp3");
          audio.play();
         break;
   
      default:console.log("Unknown key enterned");
         break;
   }
 });




 