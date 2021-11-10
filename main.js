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
