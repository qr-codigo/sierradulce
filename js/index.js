window.sr = ScrollReveal();

	sr.reveal('.logo', {
		duration: 2000, //tiempo
		delay:200,
		origin: 'top', //origen

		distance: '150px' //distancia


	}); 


sr.reveal('.nuestraBoda', {
		duration: 3000, //tiempo
		delay:200,
		scale: 0.10,
		distance: '-0' //distancia
		

	});


sr.reveal('.imagen3', {
		duration: 2000, //tiempo
		delay:400,
		origin: 'bottom', //origen
		distance: '-200px', //distancia

	});


sr.reveal('.nombres1', {
		duration: 3000, //tiempo
		delay: 1000,
		origin: 'top', //origen
		distance: '-100px', //distancia

	});
sr.reveal('.titulo', {
		duration: 2500, //tiempo
		delay:900,
		origin: 'right', //origen
		distance: '-200px', //distancia

	});
sr.reveal('.titulo2', {
		duration: 2500, //tiempo
		delay:900,
		origin: 'right', //origen
		distance: '-200px', //distancia

	});
sr.reveal('.titulo4', {
		duration: 3500, //tiempo
		delay:500,
		origin: 'top', //origen
		distance: '-50px', //distancia

	});
sr.reveal('.subtitulo', {
		duration: 2000, //tiempo
		delay:300,
		origin: 'top', //origen
		distance: '-50px' //distancia


	}); 

sr.reveal('.subtitulo2', {
		duration: 2000, //tiempo
		delay:300,
		origin: 'bottom', //origen
		distance: '-50px' //distancia


	}); 
sr.reveal('.texto', {
		duration: 2000, //tiempo
		delay:900,
		origin: 'top', //origen
		distance: '-100px', //distancia

	});
sr.reveal('.subtitulo3', {
		duration: 2000, //tiempo
		delay:200,
		origin: 'bottom', //origen
		distance: '-100px', //distancia

	});

sr.reveal('.texto2', {
		duration: 2000, //tiempo
		delay:900,
		origin: 'right', //origen
		distance: '-200px', //distancia

	});

sr.reveal('.texto3', {
		duration: 2000, //tiempo
		delay:900,
		origin: 'left', //origen
		distance: '-50px', //distancia

	});
sr.reveal('.titulo3', {
		duration: 2000, //tiempo
		delay:200,
		origin: 'top', //origen
		distance: '-200px', //distancia

	});


	sr.reveal('.social', {
		duration: 2000, //tiempo
		delay:200,
		origin: 'bottom', //origen
		distance: '-100px', //distancia

	});



	sr.reveal('.texto4', {
		duration: 2000, //tiempo
		delay:900,
		origin: 'right', //origen
		distance: '-100px', //distancia

	}); 



// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}

