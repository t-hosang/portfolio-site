<<<<<<< HEAD
// Set current year in the footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Theme toggle (light / dark)
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("theme-dark");
  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", "true");
    const icon = themeToggle.querySelector(".theme-toggle-icon");
    if (icon) icon.textContent = "☀︎";
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = body.classList.toggle("theme-dark");
    const icon = themeToggle.querySelector(".theme-toggle-icon");

    if (isDark) {
      localStorage.setItem("theme", "dark");
      themeToggle.setAttribute("aria-pressed", "true");
      if (icon) icon.textContent = "☀︎";
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.setAttribute("aria-pressed", "false");
      if (icon) icon.textContent = "☾";
    }
  });
}

// Scroll reveal animations
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => observer.observe(el));
} else {
  // Fallback: just show everything if IntersectionObserver isn't supported
  revealElements.forEach((el) => el.classList.add("in-view"));
}
=======
// Set current year in the footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Theme toggle (light / dark)
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("theme-dark");
  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", "true");
    const icon = themeToggle.querySelector(".theme-toggle-icon");
    if (icon) icon.textContent = "☀︎";
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = body.classList.toggle("theme-dark");
    const icon = themeToggle.querySelector(".theme-toggle-icon");

    if (isDark) {
      localStorage.setItem("theme", "dark");
      themeToggle.setAttribute("aria-pressed", "true");
      if (icon) icon.textContent = "☀︎";
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.setAttribute("aria-pressed", "false");
      if (icon) icon.textContent = "☾";
    }
  });
}

// Scroll reveal animations
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => observer.observe(el));
} else {
  // Fallback: just show everything if IntersectionObserver isn't supported
  revealElements.forEach((el) => el.classList.add("in-view"));
}
>>>>>>> 98725fc53e81943a768a395d30c4ffcf43784238
