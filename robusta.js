document.addEventListener("DOMContentLoaded", function() {

  const popup = document.getElementById("cartPopup");
  const closeBtn = document.getElementById("closePopup");
  const viewCartBtn = document.getElementById("goCart");
  const addBtn = document.querySelector(".pd-btn");

  // ADD ROBUSTA TO CART
  function addRobustaToCart() {
    let product = {
      name: "Robusta Dark Roast",
      price: 14.99,
      image: "ROBUSTA.png",
      qty: 1
    };

    let cart = JSON.parse(localStorage.getItem("somaCart")) || [];
    cart.push(product);
    localStorage.setItem("somaCart", JSON.stringify(cart));
  }

  if(addBtn){
    addBtn.addEventListener("click", () => {
      addRobustaToCart(); 
      popup.classList.add("show");
    });
  }

  closeBtn.addEventListener("click", () => popup.classList.remove("show"));
  viewCartBtn.addEventListener("click", () => window.location.href = "cart.html");

});
