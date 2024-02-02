document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', handleFormSubmission);
  
    function handleFormSubmission(event) {
      event.preventDefault(); // Prevent the default form submission
  
      const { name, email, message } = getFormValues();
  
      if (validateForm(name, email, message)) {
        // Simulate form submission (you can replace this with an actual submission logic)
        showSuccess('Message sent successfully!');
        resetForm();
      }
    }
  
    function getFormValues() {
      const nameInput = document.querySelector('input[name="name"]');
      const emailInput = document.querySelector('input[name="email"]');
      const messageInput = document.querySelector('textarea[name="message"]');
  
      return {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
      };
    }
  
    function validateForm(name, email, message) {
      if (name === '' || email === '' || message === '') {
        showError('Please fill in all fields');
        return false;
      }
      return true;
    }
  
    function showError(message) {
      const errorDisplay = document.getElementById('errorDisplay');
      displayMessage(errorDisplay, message, '#fcc', 'red');
    }
  
    function showSuccess(message) {
      const errorDisplay = document.getElementById('errorDisplay');
      displayMessage(errorDisplay, message, '#cfc', 'green');
    }
  
    function displayMessage(element, message, bgColor, textColor) {
      element.style.backgroundColor = bgColor;
      element.style.color = textColor;
      element.innerHTML = message;
      element.style.display = 'flex';
  
      // Hide the message after 3 seconds (adjust as needed)
      setTimeout(function () {
        element.style.display = 'none';
      }, 3000);
    }
  
    // Add your existing cart-related JavaScript functions here
  });
  
  
  var cartItemCount = 0;
  var cartTotal = 0;
  
  function addToCart(productPrice) {
    cartItemCount++;
    cartTotal += productPrice;
    updateCartDisplay();
  }
  
  function updateCartDisplay() {
    document.getElementById('cart-item-count').innerText = cartItemCount;
    document.getElementById('cart-total').innerText = '$' + cartTotal;
  }
  