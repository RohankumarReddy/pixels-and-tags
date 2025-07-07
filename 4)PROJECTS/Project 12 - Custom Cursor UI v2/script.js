// var one = document.querySelector("#num1");
// var img1 = document.querySelector(".img1");


// one.addEventListener("mousemove",function(dets){
//     img1.style.left= dets.x+"px";
//      img1.style.top= dets.y+"px";

//   })
//    one.addEventListener("mouseenter",function(dets){
//     img1.style.opacity=1;

//    })
//     one.addEventListener("mouseleave",function(dets){
//     img1.style.opacity=0;

//    })
// Function to apply hover-follow effect
function applyHoverImageEffect(divId, imgSelector) {
  const div = document.querySelector(divId);
  const img = document.querySelector(imgSelector);

  div.addEventListener("mousemove", function (e) {
    img.style.left = e.pageX + "px";
    img.style.top = e.pageY + "px";
  });

  div.addEventListener("mouseenter", function () {
    img.style.opacity = 1;
  });

  div.addEventListener("mouseleave", function () {
    img.style.opacity = 0;
  });
}

// Apply to each section
applyHoverImageEffect("#num1", ".img1");
applyHoverImageEffect("#num2", "#img2");
applyHoverImageEffect("#num3", "#img3");
applyHoverImageEffect("#num4", "#img4");
