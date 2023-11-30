let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*-----Sticky Nav Bar-*/
window.onscroll = () => {
  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*------Dark light mode----*/
let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

/*------Scroll Reveal----*/
$(document).ready(function () {
  ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
  ScrollReveal().reveal(
    ".home-img img, .services-container, .certification-box, .testimonial-wrapper, .contact-form, .heading",
    { origin: "bottom" }
  );
  ScrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" });
  ScrollReveal().reveal(".home-content h3, hom-content p, .about-content", {
    origin: "right",
  });
});

function navigateToExperience() {
  const experienceSection = document.getElementById("experience");
  experienceSection.scrollIntoView({ behavior: "smooth" });
}

/*--Experience Section Popup---*/
function openPopup() {
  var popup = window.open("slide.html", "Popup", "width=500,height=400");
  popup.focus();
}

/*--Typing--*/
$(document).ready(function () {
  var typed = new Typed(".typing", {
    strings: [
      "an Entreprenuer",
      "a Business Executive",
      "a Sales Exectuive",
      "a Project Exectuive",
      "a Program Exectuive",
    ],
    typedSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
/*--Carousel--*/

$(document).ready(function () {
  var carousel = $(".owl-carousel");
  carousel.owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
  });
});

function openPopup1(htmlFile, width, height) {
  var popup = window.open(
    htmlFile,
    "Popup",
    "width=" + width + ",height=" + height
  );
  popup.focus();
}

let popup1 = document.getElementById("popup1");

function openPopup2() {
  if (isFieldValid()) {
    popup1.classList.add("open-popup");
  }
}

function openPopup2() {
  if (isFieldValid()) {
    popup1.classList.add("open-popup");
  }
}

function closePopup2() {
  popup1.classList.remove("open-popup");
}

function isFieldValid() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    return false;
  }

  return true;
}

function sendEmail() {
  if (isFieldValid()) {
    Email.send({
      SecureToken: "dbb0a680-1400-48dd-aa7b-5ea9aa31d3a4",
      To: "madhukumar.naidu@gmail.com",
      From: "madhukumar.naidu@gmail.com",
      Subject: document.getElementById("name").value + " Sent you a Message ",
      Body:
        "Name: " +
        document.getElementById("name").value +
        "<br><br> Email: " +
        document.getElementById("email").value +
        "<br><br> Message: " +
        document.getElementById("message").value,
    });
  }
}

/*--timeline--*/
("use strict");

function qs(selector, all = false) {
  return all
    ? document.querySelectorAll(selector)
    : document.querySelector(selector);
}

const sections = qs(".section", true);
const timeline = qs(".timeline");
const line = qs(".line");
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * 0.8;

function scrollHandler(e) {
  const { scrollY } = window;
  up = scrollY < prevScrollY;
  down = !up;
  const timelineRect = timeline.getBoundingClientRect();
  const lineRect = line.getBoundingClientRect();
  const dist = targetY - timelineRect.top;

  if ((down && !full) || (up && full)) {
    set = Math.max(set, dist);
    line.style.bottom = `calc(100% - ${set}px)`;
  } else if (up && !full) {
    set = Math.min(set, dist);
    line.style.bottom = `calc(100% - ${set}px)`;
  }

  if (dist > timeline.offsetHeight + 50 && !full) {
    full = true;
    line.style.bottom = `-60px`;
  }

  sections.forEach((item) => {
    const rect = item.getBoundingClientRect();

    if (rect.top + item.offsetHeight / 5 < targetY) {
      item.classList.add("show-me");
    } else {
      item.classList.remove("show-me");
    }
  });

  prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = "block";
window.addEventListener("scroll", scrollHandler);

function hideLineAndBeads() {
  if (window.innerWidth <= 480) {
    var lineElements = document.querySelectorAll(".line");
    var beadElements = document.querySelectorAll(".bead");

    lineElements.forEach(function (lineElement) {
      lineElement.style.display = "none";
    });

    beadElements.forEach(function (beadElement) {
      beadElement.style.display = "none";
    });
  }
}

function closePopup4() {
  var popupOverlay = document.getElementById("popup-overlay1");
  var popupContent = document.getElementById("popup-content1");
  var mainContent = document.getElementById("main-content1");

  popupContent.classList.add("slideOut");
  mainContent.classList.remove("blurred");

  setTimeout(function () {
    popupOverlay.style.display = "none";
  }, 500);
}
/*--Map--*/

function showPopup(title, additionalText, event) {
  const popupContainer = document.getElementById("popup-container");
  popupContainer.innerHTML = `<h2>${title}</h2><p>${additionalText}</p>`;
  popupContainer.style.display = "block";

  const mapRect = document.querySelector(".world-map").getBoundingClientRect();
  const left = event.clientX - mapRect.left;
  const top = event.clientY - mapRect.top;

  popupContainer.style.left = `${left}px`;
  popupContainer.style.top = `${top}px`;

  // Set a timer to close the popup after 5 seconds (5000 milliseconds)
  setTimeout(function () {
    popupContainer.style.display = "none";
  }, 5000);
}

document.addEventListener("click", function (event) {
  const popupContainer = document.getElementById("popup-container");
  const isPin = event.target.closest(".pin");

  if (!isPin && event.target !== popupContainer) {
    popupContainer.style.display = "none";
  }
});
