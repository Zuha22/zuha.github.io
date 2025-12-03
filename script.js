const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");
const slides = document.querySelectorAll(".home .slides-container .slide");
const header = document.querySelector(".header");

let index = 0;

// JavaScript to toggle the
// visibility of the navigation menu
document.addEventListener("DOMContentLoaded",
	function () {
		const hamburger = document.getElementById("hamburger");
		const navbar = document.querySelector(".navbar");

		hamburger.addEventListener("click", function () {
			navbar.classList.toggle("active");
		});
	});

window.addEventListener("scroll", () => {
	navbar.classList.remove("active");
});

function showSlide(nextIndex) {
	slides[index].classList.remove("active");
	index = (nextIndex + slides.length) % slides.length;
	slides[index].classList.add("active");
}

function next() {
	showSlide(index + 1);
}

function prev() {
	showSlide(index - 1);
}
// ADD TO CART EVENT
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {

    let name = button.getAttribute("data-name");
    let price = button.getAttribute("data-price");

    // Get current cart
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add new item
    cart.push({ name, price });

    // Save back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
  });
});
