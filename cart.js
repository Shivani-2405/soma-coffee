let cart = JSON.parse(localStorage.getItem("somaCart")) || [];

function loadCart() {
  const cartList = document.querySelector(".cart-list");
  const totalItems = document.getElementById("totalItems");
  const totalAmount = document.getElementById("totalAmount");

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    cartList.innerHTML += `
      <div class="cart-item">

        <img src="${item.image}">

        <div class="item-info">
          <h3>${item.name}</h3>
          <p>$${item.price}</p>
          <p class="remove-btn" onclick="removeItem(${index})">Remove</p>
        </div>

        <div class="qty-box">
          <button onclick="updateQty(${index}, -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="updateQty(${index}, 1)">+</button>
        </div>

        <p class="item-total">$${(item.price * item.qty).toFixed(2)}</p>
      </div>
    `;
  });

  totalItems.innerText = cart.length;
  totalAmount.innerText = total.toFixed(2);
}

function updateQty(i, change) {
    cart[i].qty += change;

    if (cart[i].qty <= 0) cart[i].qty = 1;

    saveCart();
}

function removeItem(i) {
  cart.splice(i, 1);
  saveCart();
}

function saveCart() {
  localStorage.setItem("somaCart", JSON.stringify(cart));
  loadCart();
}

loadCart();
