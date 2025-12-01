document.addEventListener("DOMContentLoaded", function() {

  const popup = document.getElementById("cartPopup");
  const closeBtn = document.getElementById("closePopup");
  const viewCartBtn = document.getElementById("goCart");
  const addBtn = document.querySelector(".pd-btn");

  // ADD SIGNATURE BLEND TO CART
  function addBlendToCart() {
    let product = {
      name: "Signature House Blend",
      price: 16.49,
      image: "download.jpg",
      qty: 1
    };

    let cart = JSON.parse(localStorage.getItem("somaCart")) || [];
    cart.push(product);
    localStorage.setItem("somaCart", JSON.stringify(cart));
  }

  if(addBtn){
    addBtn.addEventListener("click", () => {
      addBlendToCart(); 
      popup.classList.add("show");
    });
  }

  closeBtn.addEventListener("click", () => popup.classList.remove("show"));
  viewCartBtn.addEventListener("click", () => window.location.href = "cart.html");

});
