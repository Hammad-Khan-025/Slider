let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(num) {
  showSlides(slideIndex += num);//slideIndex = slideIndex + num;
}

function currentSlide(num) {
  showSlides(slideIndex = num);
}


function showSlides(num) {
  let slides = document.getElementsByClassName("mySlides");
  let image = document.getElementsByClassName("images");
  if (num > slides.length) {
    slideIndex = 1
  }    
  if (num < 1) {
    slideIndex = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (let i = 0; i < image.length; i++) {
    image[i].className = image[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  image[slideIndex-1].className += " active";
}
setInterval (function(){ plusSlides(1);}, 3000);