// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Event listener for form submission
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", handleFormSubmission);

  // Function to handle form submission
  function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const { name, address, email } = getFormValues();

    // Validate form and submit
    if (validateForm(name, address, email)) {
      // Simulate form submission (replace this with your actual form submission logic)
      showSuccess("We have received your order, thank you!");
      resetForm();
    }
  }

  // Function to get form values
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

  // Function to validate form
  function validateForm(name, address, email) {
    if (name === "" || address === "" || email === "") {
      showError("Please fill in all fields");
      return false;
    }
    return true;
  }

  // Function to show error message
  function showError(message) {
    window.alert(message);
  }

  // Function to show success message
  function showSuccess(message) {
    window.alert(message);
  }

  // Function to reset the form
  function resetForm() {
    contactForm.reset();
  }
});

// Cart-related functions

var cartItemCount = 0;
var cartTotal = 0;

// Function to add an item to the cart
function addToCart(productPrice) {
  cartItemCount++;
  cartTotal += productPrice;
  updateCartDisplay();
}

// Function to clear the cart
function clearCart() {
  cartTotal = 0;
  cartItemCount = 0;
  updateCartDisplay();
  showSuccess("Cart cleared successfully!");
}

// Function to update the cart display
function updateCartDisplay() {
  document.getElementById("cart-item-count").innerText = cartItemCount;
  document.getElementById("cart-total").innerText = "$" + cartTotal;
}

// Event listener for the "Clear Cart" button
const clearCartButton = document.getElementById("clear-cart-button");
clearCartButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default button action
  clearCart();
});

// **************************************END CODE********************************************************
