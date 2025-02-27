//Бастапқы жеңілдік(header)

function closeBanner() {
  document.getElementById("banner").style.top = "-50px";
}

setTimeout(() => {
  closeBanner();
}, 10000);

//Жеңілдіктер бөлімі
let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  if (index >= totalSlides) {
    slideIndex = 0;
  }
  if (index < 0) {
    slideIndex = totalSlides - 1;
  }

  slides.style.transform = `translateX(${-slideIndex * 10}%)`;
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

setInterval(prevSlide, 2000);

//Забыли пароль

let forget = document.getElementById("forget");

forget.addEventListener("click", (event) => {
  let surak = prompt("Напишите свой email");
  alert("Отправили код на ваш Email");
});

//Localstorage

function addSend() {
  const name = document.getElementById("firstname").value;
  const surname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  localStorage.setItem("name", name);
  localStorage.setItem("surname", surname);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  alert("Вы успешно зарегистривовались!");
}
