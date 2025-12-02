// Product Data Array
const products = [
    { id: 1, name: "Premium Coffee Maker", price: 49.99: "images/coffee_maker.jpeg" },
    { id: 2, name: "Noise-Cancelling Headphones", price: 99.99: "images/headphones.jpeg" },
    { id: 3, name: "Mechanical Keyboard", price: 75.00 : "images/keyborad.jpeg"},
    { id: 4, name: "Smart Watch", price: 129.99: "images/smart_watch.jpeg" }
];

// Load cart from localStorage or initialize as empty
let cart = JSON.parse(localStorage.getItem('dummyCart')) || [];

// --- DOM Elements ---
const productsContainer = document.getElementById('products-container');
const cartCountSpan = document.getElementById('cart-count');
const cartItemsUl = document.getElementById('cart-items');
const cartTotalSpan = document.getElementById('cart-total');
const cartModal = document.getElementById('cart-modal');
const viewCartBtn = document.getElementById('view-cart-btn');
const closeBtn = document.querySelector('.close-btn');
const checkoutBtn = document.getElementById('checkout-btn');

// --- Functions ---

// 1. Render Products to the Page
function renderProducts() {
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(card);
    });
}

// 2. Add Item to Cart
window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartDisplay();
    alert(`${product.name} added to cart!`);
}

// 3. Save Cart to Browser Storage
function saveCart() {
    localStorage.setItem('dummyCart', JSON.stringify(cart));
}

// 4. Update Cart Count and Modal Content
function updateCartDisplay() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountSpan.textContent = totalItems;

    // Render items in the modal
    cartItemsUl.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsUl.innerHTML = '<li>Your cart is empty.</li>';
    } else {
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
            cartItemsUl.appendChild(li);
            total += item.price * item.quantity;
        });
    }

    cartTotalSpan.textContent = total.toFixed(2);
}

// 5. Open/Close Modal
viewCartBtn.onclick = () => {
    updateCartDisplay(); // Ensure cart is up-to-date before opening
    cartModal.style.display = 'block';
}

closeBtn.onclick = () => {
    cartModal.style.display = 'none';
}

window.onclick = (event) => {
    if (event.target == cartModal) {
        cartModal.style.display = 'none';
    }
}

// 6. Simulated Checkout
checkoutBtn.onclick = () => {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before checking out.");
        return;
    }

    // --- SIMULATION STEP ---
    alert(`Order placed successfully for $${cartTotalSpan.textContent}! (This is a simulation. No real payment was processed.)`);
    
    // Clear the cart
    cart = [];
    saveCart();
    updateCartDisplay();
    cartModal.style.display = 'none';
}

// --- Initialization ---
renderProducts();
updateCartDisplay();

// Function to render items specifically on the cart.html page
function updateCartPage() {
    const cartPageItemsUl = document.getElementById('cart-items');
    const cartPageTotalSpan = document.getElementById('cart-total');
    
    // Check if the required elements for the cart page exist
    if (!cartPageItemsUl || !cartPageTotalSpan) return; 

    cartPageItemsUl.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartPageItemsUl.innerHTML = '<li>Your cart is empty. <a href="index.html">Start shopping!</a></li>';
        document.getElementById('proceed-to-checkout-btn').disabled = true;
    } else {
        document.getElementById('proceed-to-checkout-btn').disabled = false;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.className = 'cart-item-detail';
            li.innerHTML = `
                ${item.name} 
                (Qty: ${item.quantity}) 
                - $${(item.price * item.quantity).toFixed(2)}
                <button onclick="removeItem(${item.id})">Remove</button>
            `;
            cartPageItemsUl.appendChild(li);
            total += item.price * item.quantity;
        });
    }

    cartPageTotalSpan.textContent = total.toFixed(2);
}

// Function to remove an item from the cart
window.removeItem = function(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartDisplay();
    updateCartPage(); // Refresh the cart page content
}

// Function for the final simulated checkout on checkout.html
window.simulatedCheckout = function() {
    if (cart.length === 0) {
        alert("Cannot checkout: Your cart is empty.");
        return;
    }

    // --- SIMULATION STEP ---
    alert(`Order placed successfully for $${document.getElementById('final-total').textContent}! (This is a simulation. No real payment was processed.)`);
    
    // Clear the cart
    cart = [];
    saveCart();
    updateCartDisplay();
    // Redirect user back to the home page after "purchase"
    window.location.href = 'index.html';
}

// Ensure the product cards link to product.html (update this in renderProducts)
function renderProducts() {
    // ... (existing code for rendering products) ...
    card.innerHTML = `
        <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    // ...
}
