const header = document.getElementById("header");
const mybutton = document.getElementById("goToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
    mybutton.style.bottom = "4%";
  } else {
    header.classList.remove("scrolled");
    mybutton.style.bottom = "-50px";
  }
});

function goToTop() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}
//
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-on-scroll");
      }
    });
  },
  { threshold: 0.01 }
);

const hiddenElements = document.querySelectorAll("section");
hiddenElements.forEach((el) => observer.observe(el));

(function (d, w, c) {
  w.ChatraID = "EfRsoWio4DEbRRbgA";
  var s = d.createElement("script");
  w[c] =
    w[c] ||
    function () {
      (w[c].q = w[c].q || []).push(arguments);
    };
  s.async = true;
  s.src = "https://call.chatra.io/chatra.js";
  if (d.head) d.head.appendChild(s);
})(document, window, "Chatra");

const myTimeout = setTimeout(show, 250000);
function show() {
  var x = document.getElementById("showWhatsapp");
  if (x.style.visibility == "hidden") {
    x.style.cssText = `
    visibility:visible;
    opacity: 1;
  `;
  } else {
    x.style.cssText = `
    visibility:hidden;
    opacity: 0;
  `;
  }
}
function closeWhatsapp() {
  document.getElementById("showWhatsapp").style.cssText = `
  visibility:hidden;
  opacity: 0; 
  `;
}
