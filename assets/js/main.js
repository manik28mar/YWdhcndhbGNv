
// Initializing the carousels

$('.main-carousel').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    autoPlay: 5000,
    freeScroll: true,
    wrapAround: true,
  });

  $('.mini-carousel').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    autoPlay: 900,
    freeScroll: true,
    wrapAround: true,
    fade: true
  });

// Mobile nav bar opening and closing function
  function openNav() {
    document.getElementById("nav-bar-content").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("nav-bar-content").style.width = "0%";
  }



    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        document.getElementById('mobile-nav-bar-box').style.top = "0";
      } else if (prevScrollpos < currentScrollPos){
        document.getElementById('mobile-nav-bar-box').style.top = "-65px";
      }

      if (prevScrollpos > currentScrollPos) {
        document.getElementById('nav-bar-icon').style.top = "10px";
      } else if (prevScrollpos < currentScrollPos){
        document.getElementById('nav-bar-icon').style.top = "-65px";
      }

      if (prevScrollpos > currentScrollPos) {
        document.getElementById('mobile-nav-logo').style.top = "10px";
      } else if (prevScrollpos < currentScrollPos){
        document.getElementById('mobile-nav-logo').style.top = "-65px";
      }

      prevScrollpos = currentScrollPos;
    }
