document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".col-image");

  images.forEach(function (image) {
    image.addEventListener("click", function () {
      // Toggle the 'col-image-zoomed' class on the clicked image
      this.classList.toggle("col-image-zoomed");
    });
  });
});
