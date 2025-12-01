document.addEventListener('DOMContentLoaded', ()=> {
  // Shop Now scroll
  const shopBtn = document.getElementById('shopNow');
  shopBtn?.addEventListener('click', (e)=>{
    e.preventDefault();
    const el = document.getElementById('best');
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  });

  // simple add-to-cart demo
  document.querySelectorAll('.add').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      btn.textContent = 'Added ✓';
      btn.disabled = true;
      setTimeout(()=> { btn.textContent = 'Add to cart'; btn.disabled = false; }, 1400);
    });
  });
// ---- 3D tilt effect ----
const card = document.querySelector('.business-card-img');
if (card) {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (y / 20) * -1;
    const rotateY = x / 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    card.classList.add("tilt");
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    card.classList.remove("tilt");
  });
}

// DARK MODE TOGGLE
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});

// TESTIMONIAL SLIDER
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(n) {
  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  slides[n].classList.add("active");
  dots[n].classList.add("active");
}

function autoSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    slideIndex = i;
    showSlide(i);
  });
});

setInterval(autoSlide, 3500); // AUTO SLIDE EVERY 3.5 SECONDS

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("somaCart")) || [];
    document.getElementById("cartCount").textContent = cart.length;
}

// Auto-update on page load
updateCartCount();



});
