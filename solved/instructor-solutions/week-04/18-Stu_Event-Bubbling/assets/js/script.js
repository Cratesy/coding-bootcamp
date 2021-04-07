const carousel = document.querySelector(".carouselbox");
const next = carousel.querySelector(".next");
const prev = carousel.querySelector(".prev");

const images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203",
];

let index = 0;
let currentImage = images[0];

carousel.style.backgroundImage = `url('${currentImage}')`;

const navigate = (direction) => {
  index = index + direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = `url('${currentImage}')`;
};

const onClickCarousel = () => {
  window.location.href = images[index];
};

const onClickNext = (event) => {
  event.stopPropagation();

  navigate(1);
};

const onClickPrev = (event) => {
  event.stopPropagation();

  navigate(-1);
};

carousel.addEventListener("click", onClickCarousel);
next.addEventListener("click", onClickNext);
prev.addEventListener("click", onClickPrev);

navigate(0);
