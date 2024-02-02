// document.addEventListener("DOMContentLoaded", function () {
//   const images = document.querySelectorAll(".col-image");
//   const changeImageButton = document.getElementById("changeImageButton");
//   const box1Content = document.getElementById("box1Content");

//   images.forEach(function (image) {
//     image.addEventListener("click", function () {
//       this.classList.toggle("col-image-zoomed");
//     });
//   });

//   // Add event listener to change image button
//   changeImageButton.addEventListener("click", function () {
//     // Change the source of the first image in the first row
//     const firstImage = document.querySelector(".row .col .col-image");
//     firstImage.src = "newImage.jpg"; // Replace "newImage.jpg" with the desired image URL

//     // Ensure the layout is not disrupted by resetting the zoom class
//     firstImage.classList.remove("col-image-zoomed");
//   });

//   // Add event listener for form submission
//   const addToCartForm = document.getElementById("addToCartForm");
//   addToCartForm.addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent form submission for demonstration purposes

//     // Get selected options and quantity
//     const selectedOption = document.getElementById("itemOptions").value;
//     const quantity = document.getElementById("quantity").value;

//     // Update Box1 content dynamically
//     box1Content.innerHTML = `
//       <h2>Box1 - ${selectedOption}</h2>
//       <p>Quantity: ${quantity}</p>
//     `;
//   });
// });
