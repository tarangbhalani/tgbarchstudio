
/*---------------------------------- Javascript file for portfolio page ----------------------------------- */


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














    
    /*-------------------------------Modal Gallery for portfolio (make images fullscreen)---------------------------------- */
    // create references to the modal...
    var modal = document.getElementById('myModal');
    // to all images -- note I'm using a class!
    var images = document.getElementsByClassName('maxsize');
    // the image in the modal
    var modalImg = document.getElementById("img01");
    // and the caption in the modal
    var captionText = document.getElementById("caption");

    // Go through all of the images with our custom class
    for (var i = 0; i < images.length; i++) {
      var img = images[i];
      // and attach our click listener for this image.
      img.onclick = function(evt) {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }
    }

    var close1 = document.getElementsByClassName("closemodal");

    function closeGallery() {
      document.getElementById("myModal").style.display = "none";
    }





