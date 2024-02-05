// alerts for home aboy and contact buttons
function navigateTo(section) {
  const sections = ["home", "about", "contact"];

  if (sections.includes(section)) {
    // Perform navigation logic based on the section
    switch (section) {
      case "home":
        window.alert("You are on the home page!");
        break;
      case "about":
        window.alert(
          "Thank you for visiting - this page is under construction!"
        );
        break;
      case "contact":
        window.alert(
          "Email us at: gehna.email.com or call 1(000)000-0000 to reach us"
        );
        break;
    }
  } else {
    window.alert("Invalid section specified!");
  }
}

// run code after html doc loads
document.addEventListener("DOMContentLoaded", function () {
  // get form element with id "contact form"
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", handleFormSubmission);

  // prevents default form submission allows form validation and submission logic
  function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const { name, address, email } = getFormValues();

    // if form is valid, submit it
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

  // Function to show success message alert popup window
  function showSuccess(message) {
    window.alert(message);
  }

  // Function to reset the form
  function resetForm() {
    contactForm.reset();
  }
});

// Cart-related functions
// keep track of itmes in cart and total
var cartItemCount = 0;
var cartTotal = 0;

// Function to add an item to the cart
function addToCart(earringPrice) {
  cartItemCount++;
  cartTotal += earringPrice;
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

// Event listener to clear the cart
const clearCartButton = document.getElementById("clear-cart-button");
clearCartButton.addEventListener("click", function (event) {
  event.preventDefault();
  clearCart();
});

// **************************************END CODE********************************************************
