// script.js

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", handleFormSubmission);

  function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission

    const { name, address, email } = getFormValues();

    if (validateForm(name, address, email)) {
      // Simulate form submission (replace this with your actual form submission logic)
      showSuccess("Message sent successfully!");
      resetForm();
    }
  }

  function getFormValues() {
    const nameInput = document.querySelector('input[name="name"]');
    const addressInput = document.querySelector('input[name="address"]');
    const emailInput = document.querySelector('input[name="email"]');

    return {
      name: nameInput.value.trim(),
      address: addressInput.value.trim(),
      email: emailInput.value.trim(),
    };
  }

  function validateForm(name, address, email) {
    if (name === "" || address === "" || email === "") {
      showError("Please fill in all fields");
      return false;
    }
    return true;
  }

  function showError(message) {
    const errorDisplay = document.getElementById("formErrorDisplay");
    displayMessage(errorDisplay, message, "#fcc", "red");
  }

  function showSuccess(message) {
    const errorDisplay = document.getElementById("formErrorDisplay");
    displayMessage(errorDisplay, message, "#cfc", "green");
  }

  function displayMessage(element, message, bgColor, textColor) {
    element.style.backgroundColor = bgColor;
    element.style.color = textColor;
    element.innerHTML = message;
    element.style.display = "block";

    // Hide the message after 3 seconds (adjust as needed)
    setTimeout(function () {
      element.style.display = "none";
    }, 3000);
  }
});

// Your existing cart-related JavaScript functions go here

var cartItemCount = 0;
var cartTotal = 0;

function addToCart(productPrice) {
  cartItemCount++;
  cartTotal += productPrice;
  updateCartDisplay();
}

function clearCart() {
  cartTotal = 0;
  cartItemCount = 0;
  updateCartDisplay();
  showSuccess("Cart cleared successfully!");
}

function updateCartDisplay() {
  document.getElementById("cart-item-count").innerText = cartItemCount;
  document.getElementById("cart-total").innerText = "$" + cartTotal;
}

// Button to clear the cart
const clearCartButton = document.getElementById("clear-cart-button");
clearCartButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default button action
  clearCart();
});
