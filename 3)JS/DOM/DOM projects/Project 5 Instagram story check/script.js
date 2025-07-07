var arr = [
{dp:"https://images.unsplash.com/photo-1625256216715-1989a7b46b87?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwYXVudHl8ZW58MHx8MHx8fDA%3D" ,story: "https://plus.unsplash.com/premium_photo-1661775820832-f971657b13f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVsfGVufDB8fDB8fHww"},
{dp:"https://images.unsplash.com/photo-1743106436210-8a418d16dd09?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwYXVudHl8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8fDB8fHww"},
{dp:"https://images.unsplash.com/photo-1689803768407-b4e6d8e0e685?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdCUyMGF1bnR5fGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8fDB8fHww"},
{dp:"https://images.unsplash.com/photo-1708024587407-73445142b5a8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXN0aGV0aWMlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"}

]
var story =document.querySelector("#story")
var juice=""
arr.forEach(function(elem,idx){
    juice+= `   <div class="story1">
               <img  id = "${idx}" src="${elem.dp}" alt="" srcset="">

            

        </div>`

})
        story.innerHTML =juice
 story.addEventListener("click",function(dets){
    document.querySelector("#full").style.display ="block"
  document.querySelector("#full").style.backgroundImage=`url(${arr[dets.target.id].story})`
    setTimeout(function(){
            document.querySelector("#full").style.display ="none"
    },3000)
     
})