


document.addEventListener('DOMContentLoaded', function () {
  const track = document.getElementById('carousel-track');
  const nextBtn = document.getElementById('carousel-next-btn');
  const slides = track.querySelectorAll('.inspo-slide');
  let currentIndex = 0;

  nextBtn.addEventListener('click', function () {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    const offset = currentIndex * -100;
    track.style.transform = `translateX(${offset}%)`;
  });
});