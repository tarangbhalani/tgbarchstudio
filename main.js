var preloader = document.getElementById('loading');
    var preloader2 = document.getElementById('gooey');
    function pageloaded() {
      preloader.style.display = 'none';
      preloader2.style.display = 'none';
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
