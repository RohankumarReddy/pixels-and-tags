var randomNumber1 = Math.floor(Math.random() * 7);
var randomdice ="dice"+randomNumber1+".png" ;
var randomimgsrc ="images/"+randomdice;
var set1= document.querySelectorAll("img")[0];
set1.setAttribute("src",randomimgsrc);

var randomNumber2 = Math.floor(Math.random() * 7);
var randomdice1 ="dice"+randomNumber2+".png" ;
var randomimgsrc1 ="images/"+randomdice1;
var set2= document.querySelectorAll("img")[1];
set2.setAttribute("src",randomimgsrc1);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 is winner"
}else{
    document.querySelector("h1").innerHTML="Player 2 is winner"
}