let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart");
}

// display cart page
if (location.pathname.includes("cart.html")) {
  let table = document.getElementById("cartTable");
  let total = 0;

  cart.forEach(item => {
    let row = table.insertRow();
    row.insertCell(0).innerHTML = item.name;
    row.insertCell(1).innerHTML = "₹" + item.price;
    total += item.price;
  });

  document.getElementById("total").innerHTML = "Total: ₹" + total;
}
jQuery("#content1-headline1").fitText(1.0);
jQuery("#content1-headline2").fitText(1.0);
jQuery("#content1-headline3").fitText(1.0);
jQuery("#content2-1").fitText(2.0);
jQuery("#content2-2").fitText(2.0);
jQuery("#footer1").fitText(1.2);
jQuery("#footer2").fitText(1.2);
jQuery("#footer3").fitText(1.2);

window.addEventListener("resize", function(){
     if (document.documentElement.clientWidth <= 430) {
    $(".navbar-brand").html("<img src='https://res.cloudinary.com/dbqqjaqqa/image/upload/v1489761620/logo_mini_pou3vz.png'>");
	} else {
    $(".navbar-brand").html("<img src='https://res.cloudinary.com/dbqqjaqqa/image/upload/v1489836162/smaller_size_logo_wigzr1.png'>");
  }
});
