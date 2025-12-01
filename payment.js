// load amount from localStorage (cart total)
function getCartTotal(){
  const cart = JSON.parse(localStorage.getItem("somaCart")) || [];
  let total = 0;
  cart.forEach(i => total += (i.price * (i.qty||1)));
  return total.toFixed(2);
}

document.addEventListener("DOMContentLoaded", () => {
  const payAmountEl = document.getElementById("payAmount");
  payAmountEl.textContent = getCartTotal();

  document.getElementById("paidBtn").addEventListener("click", () => {
    // simulate verification delay
    document.getElementById("paidBtn").innerText = "Verifying...";
    document.getElementById("paidBtn").disabled = true;

    setTimeout(() => {
      // clear cart and go to success
      localStorage.removeItem("somaCart");
      window.location.href = "sucess.html";
    }, 1400);
  });

  document.getElementById("cancelBtn").addEventListener("click", () => {
    window.location.href = "checkout.html";
  });
});
