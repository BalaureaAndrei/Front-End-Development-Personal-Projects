"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalForm = document.querySelector(".modal__form");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const formNames = document.querySelectorAll(".name");
const formPIN = document.querySelector(".pin");
const btnNextStep = document.querySelector(".btn--next-step");
const header = document.querySelector(".header");
const btnScrollLearnMore = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;
const slides = document.querySelectorAll(".slide");
const btnLeftTestimonial = document.querySelector(".slider__btn--left");
const btnRightTestimonial = document.querySelector(".slider__btn--right");
const dotsContainer = document.querySelector(".dots");
const inputCurrencies = document.querySelector(".form__input--currency");
let accExternal = [];

const randomMovements = function (sign) {
  return Math.trunc(sign * Math.random() * 2000);
};
function reset() {
  localStorage.removeItem("accounts");
}

class Account {
  locale = navigator.language;
  constructor(owner, pin, currency) {
    this.owner = owner;
    this.pin = pin;
    this.currency = currency;
    this.movements = [0, 0, 0, 0, 0, 0, 0, 0].map((mov, i) =>
      randomMovements(`${i < 2 ? -1 : 1}`)
    );
    this.movementsDates = [
      "2019-11-01T13:15:33.035Z",
      "2019-11-30T09:48:16.867Z",
      "2019-12-25T06:04:23.907Z",
      "2020-01-25T14:18:46.235Z",
      "2020-02-05T16:33:06.386Z",
      "2020-04-10T14:43:26.374Z",
      "2020-06-25T18:49:59.371Z",
      "2020-07-26T12:01:20.894Z",
    ];
  }
}

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const openAccount = function () {
  btnsOpenModal.forEach((button) => {
    button.addEventListener("click", openModal);
  });

  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
};

const createAccount = function () {
  let name;
  let pin;
  let currency;
  btnNextStep.addEventListener("click", function (e) {
    e.preventDefault();
    name = formNames[0].value + " " + formNames[1].value;
    pin = Number(formPIN.value);
    currency = inputCurrencies.value;
    accExternal.push(new Account(name, pin, currency));
    formNames[0].value = formNames[1].value = "";
    formPIN.value = "";
    document.querySelector(".mail").value = "";
    document.querySelector(".phone__number").value = "";
    storeAccounts();
    closeModal();
  });
};

function storeAccounts() {
  localStorage.setItem("accounts", JSON.stringify(accExternal));
}

const cookies = function () {
  const message = document.createElement("div");
  message.classList.add("cookie-message");
  message.innerHTML =
    'We use cookies for improved funtionality and analytics. <button class ="btn btn--close-cookie">Got it</button>';
  message.style.backgroundColor = "#37383d";
  message.style.height = "70px";
  header.prepend(message);

  document.querySelector(".btn--close-cookie").addEventListener("click", () => {
    message.remove();
    console.log(accExternal);
  });
};

const btnScrolls = function () {
  btnScrollLearnMore.addEventListener("click", () => {
    section1.scrollIntoView({
      behavior: "smooth",
    });
  });

  document.querySelector(".nav__links").addEventListener("click", function (e) {
    if (
      e.target.classList.contains("nav__link") &&
      !e.target.classList.contains("bank__link") &&
      !e.target.href === "#"
    ) {
      e.preventDefault();
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
};

const tabsFunctionality = function () {
  tabsContainer.addEventListener("click", (e) => {
    const clicked = e.target.closest(".operations__tab");
    if (!clicked) return;
    tabs.forEach((t) => t.classList.remove("operations__tab--active"));
    clicked.classList.add("operations__tab--active");
    tabsContent.forEach((t) =>
      t.classList.remove("operations__content--active")
    );
    document
      .querySelector(
        `.operations__content--${clicked.getAttribute("data-tab")}`
      )
      .classList.add("operations__content--active");
  });
};

const hoverEfect = function () {
  const hover = function (e) {
    if (e.target.classList.contains("nav__link")) {
      const link = e.target;
      const siblings = link.closest(".nav").querySelectorAll(".nav__link");
      const logo = link.closest(".nav").querySelector("img");
      siblings.forEach((el) => {
        if (el !== link) {
          el.style.opacity = this;
        }
      });
      logo.style.opacity = this;
    }
  };

  nav.addEventListener("mouseover", hover.bind(0.5));
  nav.addEventListener("mouseout", hover.bind(1));
};

const scrollEvents = function () {
  const stickyNav = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  };
  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  });
  headerObserver.observe(header);

  const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.classList.remove("section--hidden");
      observer.unobserve(entry.target);
    }
  };
  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });
  document.querySelectorAll(".section").forEach((section) => {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
  });

  const revealImg = function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.src = entry.target.getAttribute("data-src");
      entry.target.addEventListener("load", () => {
        entry.target.classList.remove("lazy-img");
      });
      observer.unobserve(entry.target);
    }
  };
  const imgObserver = new IntersectionObserver(revealImg, {
    root: null,
    threshold: 0,
    rootMargin: "200px",
  });
  document.querySelectorAll("img[data-src]").forEach((img) => {
    imgObserver.observe(img);
  });
};

const slider = function () {
  let currentSlide = 0;
  const maxSlide = slides.length - 1;

  const testimonialInit = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  const createDots = function () {
    slides.forEach((s, i) => {
      dotsContainer.insertAdjacentHTML(
        "beforeend",
        `<button class ="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document.querySelectorAll(".dots__dot").forEach((dot) => {
      dot.classList.remove("dots__dot--active");
    });
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (currentSlide === maxSlide) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const previousSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  btnRightTestimonial.addEventListener("click", nextSlide);
  btnLeftTestimonial.addEventListener("click", previousSlide);
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      previousSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  });

  dotsContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const slide = e.target.dataset.slide;
      goToSlide(slide);
      activateDot(slide);
    }
  });
  testimonialInit();
};

const startProgram = function () {
  openAccount();
  createAccount();
  cookies();
  btnScrolls();
  tabsFunctionality();
  hoverEfect();
  scrollEvents();
  slider();
};

startProgram();
