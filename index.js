/* -----------------------Navigation Bar------------------------------ */
var preloader = document.getElementById('gooey');
    function pageloaded() {
      preloader.style.display = 'none';
    };

    function closeNav() {
      document.getElementById("responsiveSideNav").style.width = "0%";
      
    }
    function openNav() {
      document.getElementById("responsiveSideNav").style.width = "100%";
    }

    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 200) {
        document.getElementById("logo").style.opacity = '0.8';
      }
      else {
        document.getElementById("logo").style.display = "block";
        document.getElementById("logo").style.opacity = '1';
      }
    })



    /* Back to top fixed button in the website (located on the bottom of screen) */

    mybutton = document.getElementById("back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topfunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

 /* ----------------------Passive smooth scroll javascript ----------------------------------- */
 document.addEventListener('wheel', (evt) => {
  // ... do stuff with evt
}, {
  capture: true,
  passive: true
})

document.addEventListener('touchstart', (evt) => {
  // ... do stuff with evt
}, {
  capture: true,
  passive: true
})
document.addEventListener('touchmove', (evt) => {
  // ... do stuff with evt
}, {
  capture: true,
  passive: true
})
document.addEventListener('mousewheel', (evt) => {
  // ... do stuff with evt
}, {
  capture: true,
  passive: true
})





















/*--------------------------Main image slider-------------------------------*/

const sslides = document.querySelectorAll('.sslide');  //Do not change the variable name to slides, it will conflict
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll images on timeout
const intervalTime = 4000; //ms
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    sslides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    sslides[sslides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
nnext.addEventListener('click', e => {   //Dont change the class name nnext to next, it will create conflict
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

pprev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

const $arrow= document.getElementById("nnext")
$arrow.onclick = () => {
  $arrow.animate([
    {right: '0'}
  ],{
    duration: 150,
    iterations: 1
  });
}
const $arrow2= document.getElementById("pprev")
$arrow2.onclick = () => {
  $arrow2.animate([
    {left: '0'}
  ],{
    duration: 150,
    iterations: 1
  });
}

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}





    /*-------------------------------- Reveal animation --------------------------------- */

    window.addEventListener('scroll', reveal);
    function reveal() {
      var reveals= document.querySelectorAll('.reveal');
      for (var i=0; i<reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 0;
        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('activesection');
        }
        else{
          reveals[i].classList.remove('activesection');
        }
      }
    }



   
















