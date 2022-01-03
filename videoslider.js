const btns= document.querySelectorAll(".nav-btn");
const slides= document.querySelectorAll(".video-slide")
const content= document.querySelectorAll(".video-slide-content")

var sliderNav = function(manual){
  btns.forEach((btn) => {
    btn.classList.remove ("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove ("active");
  });

  content.forEach((design) => {
    design. classList.remove ("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  content[manual].classList.add("active");
}
btns.forEach((btn,i) =>{
  btn.addEventListener("click", ()=>{
    sliderNav(i);
  });
});