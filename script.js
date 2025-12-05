// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart") || "[]");

// Add to cart function
function addToCart(name, price) {
    price = Number(price); // ensure number

    cart.push({ name, price });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${name} added to cart!`);
}
let cart = JSON.parse(localStorage.getItem("cart") || "[]");

function renderCart() {
    const container = document.getElementById("cart-items");
    const totalEl = document.getElementById("cart-total");

    container.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += Number(item.price);

        const div = document.createElement("div");
        div.className = "cart-item";

        div.innerHTML = `
            <p>${item.name} - ₹${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;

        container.appendChild(div);
    });

    totalEl.textContent = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

renderCart();
