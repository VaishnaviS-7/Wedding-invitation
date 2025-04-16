// Countdown Timer
const countdown = () => {
    const eventDate = new Date("2025-09-25T00:00:00").getTime();
    const now = new Date().getTime();
    const gap = eventDate - now;
  
    const day = 1000 * 60 * 60 * 24;
    const hour = 1000 * 60 * 60;
    const min = 1000 * 60;
    const sec = 1000;
  
    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / min);
    const s = Math.floor((gap % min) / sec);
  
    document.getElementById("countdown").innerText = `${d}d ${h}h ${m}m ${s}s`;
};

setInterval(countdown, 1000);

// Floating hearts/petals
const createFloatingItem = () => {
    const container = document.querySelector(".floating-container");
    const item = document.createElement("span");
    // item.innerHTML = "<i class='fas fa-heart'></i>"; // Font Awesome heart
     item.innerHTML = "❀"; // Use ❤️ or ❀ for flowers/petals
    item.style.left = Math.random() * window.innerWidth + "px";
    item.style.animationDuration = 5 + Math.random() * 5 + "s"; // Random duration for more variety
    item.style.fontSize = 16 + Math.random() * 24 + "px"; // Random size for each floating item
    container.appendChild(item);

    // Remove floating item after animation duration
    setTimeout(() => {
      container.removeChild(item);
    }, 8000); // Match this duration with animation duration
};

setInterval(createFloatingItem, 300);


// 🎉 Confetti on click (e.g., when clicking heart)
document.querySelector('.heart').addEventListener('click', () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  });
  
  // 🎆 Confetti on scroll (fires once)
 // 🎯 Confetti on scroll using IntersectionObserver
const invitationSection = document.querySelector('.invitation');
let confettiFired = false;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !confettiFired) {
      confettiFired = true;
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.6 }
      });
    }
  });
}, {
  threshold: 0.5 // trigger when 50% is visible
});

observer.observe(invitationSection);

  

 // Prevent pinch zoom on iOS
document.addEventListener('gesturestart', e => e.preventDefault());
document.addEventListener('gesturechange', e => e.preventDefault());
document.addEventListener('gestureend', e => e.preventDefault());

// Prevent Ctrl + Scroll zooming
window.addEventListener('wheel', function (e) {
  if (e.ctrlKey) {
    e.preventDefault();
  }
}, { passive: false });

// Prevent Ctrl + '+' or '-' key zooming
window.addEventListener('keydown', function (e) {
  if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '=')) {
    e.preventDefault();
  }
});
