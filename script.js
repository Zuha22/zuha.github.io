// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart") || "[]");

// Add to cart function
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart");
}

// Display cart only on cart page
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("cart.html")) {

    let table = document.getElementById("cartTable");
    let total = 0;

    if (!cart.length) {
      table.insertRow().innerHTML = "<td colspan='2'>No items in cart</td>";
      return;
    }

    cart.forEach(item => {
      let row = table.insertRow();
      row.insertCell(0).innerHTML = item.name;
      row.insertCell(1).innerHTML = "₹" + item.price;
      total += item.price;
    });

    document.getElementById("total").innerHTML = "Total: ₹" + total;
  }
});


