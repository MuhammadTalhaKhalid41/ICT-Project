var crsr = document.querySelector("#cursor")


document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+30+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x - 150 + "px"
    blur.style.top = dets.y - 150 + "px"
})
document.addEventListener("DOMContentLoaded", function() {
    let felems = document.querySelectorAll(".felem");
  
    felems.forEach(felem => {
      let video = felem.querySelector("video");
  
      felem.addEventListener("mouseenter", function() {
        video.play();
      });
  
      felem.addEventListener("mouseleave", function() {
        video.pause();
      });
    });
  });