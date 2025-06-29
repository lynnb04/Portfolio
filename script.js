// inladen header en footer
// ------------------------
document.addEventListener("DOMContentLoaded", function () {
  includeHTML("partials/header.html", "header-placeholder");
  includeHTML("partials/footer.html", "footer-placeholder");
});

function includeHTML(file, elementId) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error("404");
      return response.text();
    })
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => {
      console.error("Include error:", error);
    });
}