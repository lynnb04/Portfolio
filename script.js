// inladen header en footer
// ------------------------
document.addEventListener("DOMContentLoaded", function () {
  includeHTML("/partials/header.html", "header-placeholder", markActiveNavLink);
  includeHTML("/partials/footer.html", "footer-placeholder");
});

function includeHTML(file, elementId, callback) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error("404");
      return response.text();
    })
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
      if (callback) callback(); // <-- Roep callback aan na inladen
    })
    .catch(error => {
      console.error("Include error:", error);
    });
}


// actieve link
// ------------
function markActiveNavLink() {
  const currentPath = window.location.pathname;

  document.querySelectorAll("nav a").forEach(link => {
    const linkPath = new URL(link.href).pathname;

        // Vergelijk ook "/" met "/index.html"
    const isHomepage = (currentPath === "/" && linkPath.endsWith("/index.html")) ||
                       (currentPath === "/index.html" && linkPath === "/");

    if (linkPath === currentPath || currentPath.endsWith(linkPath)) {
      link.classList.add("active");
    }
  });
}