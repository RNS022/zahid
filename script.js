document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("formMsg").textContent = "Thanks for contacting me!";
  });
  