const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slides = document.querySelectorAll('input[name="slide"]');
let currentIndex = 0;

function updateSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  slides[index].checked = true;
  currentIndex = index;
}

prevBtn.addEventListener("click", () => {
  updateSlide(currentIndex - 1);
});

nextBtn.addEventListener("click", () => {
  updateSlide(currentIndex + 1);
});

slides.forEach((slide, index) => {
  slide.addEventListener("change", () => {
    if (slide.checked) {
      currentIndex = index;
    }
  });
});
