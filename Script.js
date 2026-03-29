  // JavaScript for continuous moving slides
  const slides = document.getElementById("slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  // Clone the slides for smooth transition
  const cloneSlides = slides.innerHTML;
  slides.innerHTML += cloneSlides; // Duplicate slides

  let index = 0;
  function showNextSlide() {
      index++;
      slides.style.transition = "transform 1s ease-in-out";
      slides.style.transform = `translateX(-${index * 100}%)`;

      // Reset the position without animation for seamless effect
      if (index >= totalSlides) {
          setTimeout(() => {
              slides.style.transition = "none";
              slides.style.transform = "translateX(0)";
              index = 0;
          }, 1000); // Matches the transition duration
      }
  }

  // Move to the next slide every 5 seconds
  setInterval(showNextSlide, 5000);