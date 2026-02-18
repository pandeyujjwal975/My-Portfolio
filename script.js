/* ============================
   Typed Effect
   ============================ */
const typedEl = document.querySelector(".typed");

if (typedEl) {
  const words = typedEl.dataset.words.split("|");
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;
  
  function typeLoop() {
    const current = words[wordIndex];
    if (!deleting) {
      typedEl.textContent = current.slice(0, ++charIndex);
      if (charIndex === current.length) {
        setTimeout(() => deleting = true, 1500);
      }
    } else {
      typedEl.textContent = current.slice(0, --charIndex);
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
    setTimeout(typeLoop, deleting ? 60 : 120);
  }
  
  typeLoop();
}

/* ============================
   Theme Toggle
   ============================ */
const toggle = document.getElementById("themeToggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
  });
}

/* ============================
   Mobile Nav Toggle
   ============================ */
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("dblclick", () => {
    navLinks.classList.toggle("show");
  });
}

/* ============================
   Smooth Scroll
   ============================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ============================
   Contact Form Handler
   ============================ */
(function(){
 emailjs.init("x_iqGb89dJc0Gx2ub");
})();
document.getElementById("contact-form")
.addEventListener("submit", function(event) {
 event.preventDefault();
 emailjs.sendForm(
 "service_04q4ykp",
 "template_pw26xb8",
 this
 )
 .then(function() {
 alert("Message sent successfully!");
 }, function(error) {
 alert("Failed to send message");
 });
});
