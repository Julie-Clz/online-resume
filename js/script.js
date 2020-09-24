window.onload = () => {
  const fadeText = () => {
    const bannerText = document.getElementById('banner-typed-text');
    if (bannerText) {
      let language = document.querySelector("#banner-typed-text");
      const terms = ["RUBY", "SQL", "HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT"];
      console.log(terms);
      setInterval(() => {
        
        // Lui attribuer une classe fade-out (le faire disparaître)
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