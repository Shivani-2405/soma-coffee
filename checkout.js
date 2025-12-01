let cart = JSON.parse(localStorage.getItem("somaCart")) || [];

const summaryBox = document.querySelector(".summary-items");
const finalTotal = document.getElementById("finalTotal");

function loadCheckout() {
  summaryBox.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;

    summaryBox.innerHTML += `
      <div>
        <span>${item.name} (x${item.qty})</span>
        <span>$${(item.price * item.qty).toFixed(2)}</span>
      </div>
    `;
  });

  finalTotal.innerText = total.toFixed(2);
}

loadCheckout();

// PLACE ORDER BUTTON FUNCTIONALITY
document.getElementById("placeOrder").addEventListener("click", () => {

  // collect selected payment method
  const payMethod = document.querySelector('input[name="pay"]:checked').value;

  if (payMethod === "UPI") {
      // redirect to mock payment page
      window.location.href = "payment.html";
  } 
  else {
      // Cash on Delivery → clear cart and show success
      localStorage.removeItem("somaCart");
      window.location.href = "sucess.html";
  }

});

