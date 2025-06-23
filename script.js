

function closeBanner() {
  const banner = document.getElementById("banner");
  banner.style.display = "none";
  localStorage.setItem("bannerClosed", "true");
}
window.onload = function () {
    if (localStorage.getItem("bannerClosed") === "true") {
      document.getElementById("banner").style.display = "none";
    }
}

localStorage.removeItem("bannerClosed");
//REMOVE THIS LINE AFTER TESTING
let slideIndex = 1;
localStorage.removeItem("banner");


showSlides(slideIndex);
  function plusSlides(n) {
  showSlides(slideIndex += n);
}
  function currentSlide(n) {
  showSlides(slideIndex = n);
}
  setInterval(function() {
  plusSlides(1);
}, 5000);
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}