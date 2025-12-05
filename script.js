// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart") || "[]");

// Add to cart function
function addToCart(name, price) {
    price = Number(price); // ensure number

    cart.push({ name, price });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${name} added to cart!`);
}
