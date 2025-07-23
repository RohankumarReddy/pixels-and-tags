// Selecting in Jquery
$("#dim h1")
$("h1.lol")
//Adding CSS to an element
$("button").css("backgroundColor","yellow")
//Adding class
$("h1").addClass("big")
//Removing class
$("h1").removeClass("big")

//Adding multiple classes
$("h1").addClass("big margin")


//Manipulating Text 

$("h1").text("BYe all")

$("button").html("<em>Click Here</em>")
 
//Manipulating Attributes

 $("a").attr("href","www.https://www.yahoo.com/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAH6NAt3qb25co8A6C22V9rccvGo0Q20lidOEoiu57cJydG2k_58qSsVptIq4RE9yd9iO2wQQcMxq7CMOeRrrHmcaOSenYyCx0_yO3vrHtz-iGzD5Vxu8xE9iAzMHZQSRuub1TMPUqMxWPO1A-dAGQimpqvd3iq3y16TBHCdgsn6P.com")

 $("h1").attr("class")

 //Adding event listener

 var a =$("button")
var b= $("h1")
 $("button").mouseenter(function(){
    $("button").css("border","1px solid white")
 })
  $("button").mouseleave(function(){
    $("button").css("border","0px")
 })

 $("button").click(function() {
  let current = b.css("color");  

  if (current === "rgb(65, 105, 225)") {  
    b.css("color", "crimson");
  } else {
    b.css("color", "royalblue");
  }
});
$(document).keypress(function(event){
    $("h1").text(event.key )
})

//Toggle
$("button").on("click",function(){
    $("h1").fadeToggle()
})

//animate
$("button").on("click",function(){
    $("h1").animate({fontSize:"12px"})
})