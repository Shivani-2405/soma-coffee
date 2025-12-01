document.addEventListener("DOMContentLoaded", function() {

  const popup = document.getElementById("cartPopup");
  const closeBtn = document.getElementById("closePopup");
  const viewCartBtn = document.getElementById("goCart");
  const addBtn = document.querySelector(".pd-btn");

  // ADD ARABICA TO CART
  function addArabicaToCart() {
    let product = {
      name: "Arabica Gold Roast",
      price: 12.99,
      image: "image.png",
      qty: 1
    };

    let cart = JSON.parse(localStorage.getItem("somaCart")) || [];
    cart.push(product);
    localStorage.setItem("somaCart", JSON.stringify(cart));
  }

  if(addBtn){
    addBtn.addEventListener("click", () => {
      addArabicaToCart(); 
      popup.classList.add("show");
    });
  }

  closeBtn.addEventListener("click", () => popup.classList.remove("show"));
  viewCartBtn.addEventListener("click", () => window.location.href = "cart.html");

});
