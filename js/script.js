window.onload = () => {
  // Animation for changing language appearing
  const fadeText = () => {
    const bannerText = document.getElementById('banner-typed-text');
    if (bannerText) {
      let language = document.querySelector("#banner-typed-text");
      const terms = ["RUBY", "SQL", "HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT"];
      setInterval(() => {
        
        // Lui attribuer une classe fade-out (le faire disparaître)s
        language.classList.remove("fade-in");
        language.classList.add("fade-out");
    
        setTimeout(() => {
          // Changer son texte
          const currentTerm = language.innerText;
          const currentIndex = terms.indexOf(currentTerm);
          let nextIndex;
    
          if (currentIndex === terms.length - 1) {
            nextIndex = 0
          } else {
            nextIndex = currentIndex + 1
          }
          language.innerText = terms[nextIndex]
        
          language.classList.remove("fade-out");
          language.classList.add("fade-in");
        }, 1000)
        
      }, 2000)
      }
  }
  fadeText();
};

// Events click on menu item or anywhere on the page to close toogle menu (navbar)
$(document).click(function (event) {
  var clickover = $(event.target);
  var $navbar = $(".navbar-collapse");               
  var _opened = $navbar.hasClass("show");
  if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
      $navbar.collapse('hide');
  }
});
