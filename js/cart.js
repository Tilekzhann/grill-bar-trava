function clearCart() {
  const modal = document.getElementById("confirm-modal");
  modal.classList.remove("hidden");

  const okBtn = document.getElementById("confirm-ok");
  const cancelBtn = document.getElementById("confirm-cancel");

  okBtn.onclick = () => {
    localStorage.removeItem("cart");
    renderCart();
    updateCartCount();
    modal.classList.add("hidden");
  };

  cancelBtn.onclick = () => {
    modal.classList.add("hidden");
  };
}


function closeConfirm() {
  document.getElementById('customConfirm').style.display = 'none';
}

// Получаем корзину
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Сохраняем корзину
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Рендер корзины
function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const subtotalElem = document.getElementById("subtotal");
    const serviceFeeElem = document.getElementById("service-fee");
    const totalElem = document.getElementById("total");

    const cart = getCart();
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<div class="empty-cart">Корзина пуста</div>`;
        subtotalElem.textContent = `0 ₸`;
        serviceFeeElem.textContent = `0 ₸`;
        totalElem.textContent = `0 ₸`;
        return;
    }

    let subtotal = 0;

    cart.forEach((item, index) => {
subtotal += item.price * (item.quantity || 1);

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

     cartItem.innerHTML = `
    <div style="display: flex; align-items: center; width: 100%;">
        <div class="item-details" style="flex:1;">
            <div class="item-name">${item.name}</div>
            <div class="item-price">${(item.price * (item.quantity || 1)).toFixed(0)} ₸</div>
        </div>
        <div class="item-controls">
            <button class="qty-btn" onclick="decreaseQty(${index})">−</button>
            <span class="qty-count">${item.quantity || 1}</span>
            <button class="qty-btn" onclick="increaseQty(${index})">+</button>
        </div>
    </div>
`;



        cartItemsContainer.appendChild(cartItem);
    });

    const serviceFee = subtotal * 0.10;
    const total = subtotal + serviceFee;

    subtotalElem.textContent = `${subtotal.toFixed(0)} ₸`;
    serviceFeeElem.textContent = `${serviceFee.toFixed(0)} ₸`;
    totalElem.textContent = `${total.toFixed(0)} ₸`;
}

// Удалить товар из корзины
function removeFromCart(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
    updateCartCount();
}

// Очистить корзину
function clearCart() {
  const modal = document.getElementById("confirm-modal");
  modal.classList.remove("hidden");

  const okBtn = document.getElementById("confirm-ok");
  const cancelBtn = document.getElementById("confirm-cancel");

  okBtn.onclick = () => {
    localStorage.removeItem("cart");
    renderCart();
    updateCartCount();
    modal.classList.add("hidden");
  };

  cancelBtn.onclick = () => {
    modal.classList.add("hidden");
  };
}


// Отправка заказа в WhatsApp
function sendOrderToWhatsApp(event) {
    event.preventDefault();

    const cart = getCart();
    if (cart.length === 0) {
        alert("Корзина пуста!");
        return;
    }

    let message = "Здравствуйте! Хочу оформить заказ:\n\n";

    cart.forEach(item => {
        const qty = item.quantity || 1;
        const itemTotal = item.price * qty;
        message += `• ${item.name} × ${qty} — ${itemTotal} ₸\n`;
    });

    const subtotal = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
    const serviceFee = subtotal * 0.10;
    const total = subtotal + serviceFee;

    message += `\nСумма заказа: ${subtotal.toFixed(0)} ₸`;
    message += `\nОбслуживание (10%): ${serviceFee.toFixed(0)} ₸`;
    message += `\nИтого к оплате: ${total.toFixed(0)} ₸`;

    const phone = "77718198080"; // <-- Твой номер без плюса
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}

// Обновить счётчик корзины
function updateCartCount() {
    const cart = getCart();
    const cartCountElem = document.getElementById("cart-count");
    if (cartCountElem) {
        cartCountElem.textContent = cart.length;
    }
}
function increaseQty(index) {
    const cart = getCart();
    cart[index].quantity = (cart[index].quantity || 1) + 1;
    saveCart(cart);
    renderCart();
    updateCartCount();
}

function decreaseQty(index) {
    const cart = getCart();
    if ((cart[index].quantity || 1) > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1); // Удалить, если 0
    }
    saveCart(cart);
    renderCart();
    updateCartCount();
}

// Запуск при загрузке
document.addEventListener("DOMContentLoaded", () => {
    renderCart();
    updateCartCount();

    const clearCartBtn = document.getElementById("clear-cart");
    if (clearCartBtn) {
        clearCartBtn.addEventListener("click", clearCart);
    }

    const whatsappOrderBtn = document.getElementById("whatsapp-order");
    if (whatsappOrderBtn) {
        whatsappOrderBtn.addEventListener("click", sendOrderToWhatsApp);
    }
});
