let layer1 = document.querySelector("#layerY");
let scroll = window.pageYOffset;
document.addEventListener("scroll",function(e){
  let offset = window.pageYOffset;
  scroll = offset;
  layer1.style.width = (100+scroll/2)+"%"; //increase scroll offset with the "3"
});

let layer2 = document.querySelector("#layerJ");
document.addEventListener("scroll",function(e){
  let offset = window.pageYOffset;
  scroll = offset;
  layer2.style.width = (100+scroll/5)+"%";
   layer2.style.left = scroll/50+"%";
});


let text = document.querySelector("#text");
document.addEventListener("scroll",function(e){
  let offset = window.pageYOffset;
  scroll = offset;
  // text.style.width = (100+scroll/5)+"%";
   text.style.top = -scroll/15+"%";
});

/* Scroll Gallery */

let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("leftBtn");
let nextBtn = document.getElementById("rightBtn");

scrollContainer.addEventListener("wheel",(evt) =>{
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click",() =>{
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () =>{
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});


