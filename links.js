const path = window.location.pathname;

  if (path.includes("index.html") || path === "/" || path === "/your-repo-name/") {
    document.getElementById("about").classList.add("active-link");
  } else if (path.includes("contact.html")) {
    document.getElementById("contact").classList.add("active-link");
    document.getElementById("contact1").classList.add("active-link");
  }

document.getElementById("contact").addEventListener("click", function () {
    window.location.href = "contact.html";
});

document.getElementById("contact1").addEventListener("click", function () {
    window.location.href = "contact.html";
});

document.getElementById("projects").addEventListener("click", function () {
    window.location.href = "projects.html";
});

document.getElementById("resume").addEventListener("click", function () {
    window.location.href = "https://docs.google.com/document/d/1J_wiQaTEke6nAC6R2e3yH7_R6Q6BdChsFtUPoPUbS84/edit?tab=t.0";
});

document.getElementById("resume1").addEventListener("click", function () {
    window.location.href = "https://docs.google.com/document/d/1J_wiQaTEke6nAC6R2e3yH7_R6Q6BdChsFtUPoPUbS84/edit?tab=t.0";
});

document.getElementById("about").addEventListener("click", function () {
    window.location.href = "https://jacobsnodgress5.github.io/jacobsnodgress-website/";
});

document.getElementById("instagram").addEventListener("click", function () {
    window.location.href = "https://www.instagram.com/jacobsnodgress/";
});

document.getElementById("facebook").addEventListener("click", function () {
    window.location.href = "https://www.facebook.com/jacob.snodgress.3";
});

document.getElementById("linkedin").addEventListener("click", function () {
    window.location.href = "https://www.linkedin.com/in/jacob-snodgress-2a7b9b293/";
});



