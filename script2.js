document.addEventListener("DOMContentLoaded", function () {
  const orderForm = document.getElementById("orderForm");
  const productInput = document.getElementById("productInput");
  const productsSection = document.getElementById("products");
  const cart = document.getElementById("cart");

  // Sample products with names and image URLs
  const jewelryProducts = [
    { name: "Necklace", image: "necklace.jpg" },
    { name: "Gold Earrings", image: "earring1.jpg" },
    { name: "Bracelet", image: "bracelet.jpg" },
  ];

  // Display initial products
  jewelryProducts.forEach((product) => displayProduct(product));

  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Add the selected jewelry item to the cart
    if (productInput.value.trim() !== "") {
      addToCart(productInput.value);
    }
  });

  function displayProduct(product) {
    const productItem = document.createElement("div");
    productItem.classList.add("product");

    // Image tag added to display product images
    productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="100" height="100">
            <span>${product.name}</span>
            <button onclick="addToCart('${product.name}')">Add to Cart</button>
        `;

    productsSection.appendChild(productItem);
  }

  function addToCart(product) {
    const cartItem = document.createElement("li");
    const productName = document.createElement("span");
    const removeButton = document.createElement("button");

    productName.textContent = product;
    removeButton.textContent = "Remove";

    cartItem.appendChild(productName);
    cartItem.appendChild(removeButton);

    cart.appendChild(cartItem);

    removeButton.addEventListener("click", function () {
      cart.removeChild(cartItem);
    });
  }
});
