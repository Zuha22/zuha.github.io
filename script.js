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
    const tbody = document.getElementById("cart-items");
    const totalEl = document.getElementById("cart-total");

    tbody.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += Number(item.price);

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.name}</td>
            <td>₹${item.price}</td>
            <td><button class="remove-btn" onclick="removeFromCart(${index})">Remove</button></td>
        `;

        tbody.appendChild(row);
    });

    totalEl.textContent = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

renderCart();
