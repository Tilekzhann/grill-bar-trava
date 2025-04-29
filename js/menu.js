// Массив всех блюд
const menuItems = [
    // Горячие блюда
    {
        id: 1,
        name: "Бефстроганов",
        description: "Говяжья вырезка, лук, корнишон, гарнир пюре",
        price: 3450,
        category: "горячие-блюда"
    },
    {
        id: 2,
        name: "Курица в кисло-сладком соусе с рисом",
        description: "Курица, крахмал, свит-чили, гарнир рис",
        price: 3150,
        category: "горячие-блюда"
    },
    {
        id: 3,
        name: "Куриный шницель",
        description: "Курица отбивная, панировочные сухари, гарнир пюре",
        price: 3150,
        category: "горячие-блюда"
    },
    {
        id: 4,
        name: "Телятина в азиатском стиле",
        description: "Телятина, помидоры, огурцы, болгарский перец, кунжут, гарнир рис",
        price: 3850,
        category: "горячие-блюда"
    },
    {
        id: 5,
        name: "Wok с курицей",
        description: "Курица, фунчоза, болгарский перец, морковь, лук, соевый соус, свит-чили",
        price: 2850,
        category: "горячие-блюда"
    },
    {
        id: 6,
        name: "Wok с говядиной",
        description: "Говядина, фунчоза, болгарский перец, морковь, лук, соевый соус, свит-чили",
        price: 2950,
        category: "горячие-блюда"
    },
    {
        id: 7,
        name: "Wok с креветками",
        description: "Креветки, фунчоза, болгарский перец, морковь, лук, соевый соус, свит-чили",
        price: 2950,
        category: "горячие-блюда"
    }
];

function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Рендеринг всех блюд
function renderMenuItems(category = "all") {
    const container = document.getElementById("menu-items");
    container.innerHTML = "";

    const filteredItems = category === "all" 
        ? menuItems 
        : menuItems.filter(item => item.category === category);

    if (filteredItems.length === 0) {
        container.innerHTML = "<p style='text-align:center;'>Блюда не найдены.</p>";
        return;
    }

    filteredItems.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("menu-item");

      card.innerHTML = `
    <div class="item-details">
        <div class="item-name">${item.name}</div>
        <div class="item-description">${item.description || ""}</div>
        <div class="item-price-row">
            <div class="item-price">${item.price} ₸</div>
            <button class="add-to-cart" onclick="addToCart(${item.id})">
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
    </div>
`;


        container.appendChild(card);
    });
}

// Добавление товара в корзину
function addToCart(id, event) {
    const product = menuItems.find(item => item.id === id);
    const cart = getCart();
    cart.push(product);
    saveCart(cart);
    updateCartCount();
    showNotification(`${product.name} добавлено в корзину!`);

    // Анимация карточки
    const button = event.target;
    const card = button.closest('.menu-item');
    if (card) {
        card.classList.add('animate');
        setTimeout(() => {
            card.classList.remove('animate');
        }, 300);
    }
}

// Обновление счётчика корзины
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").textContent = cart.length;
}

// Обработчики нажатия на категории
const tabs = document.querySelectorAll(".tab-btn");
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        const category = tab.getAttribute("data-category");
        renderMenuItems(category);
    });
});
function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.style.display = "block";

    setTimeout(() => {
        notification.style.opacity = "1";
    }, 50);

    setTimeout(() => {
        notification.style.opacity = "0";
        setTimeout(() => {
            notification.style.display = "none";
        }, 400);
    }, 2000); // уведомление исчезнет через 2 секунды
}
function addToCart(id) {
    const product = menuItems.find(item => item.id === id);
    const cart = getCart();

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart(cart);
    updateCartCount();
    showNotification(`${product.name} добавлено в корзину!`);
}

// Первичная загрузка
document.addEventListener("DOMContentLoaded", () => {
    renderMenuItems();
    updateCartCount();
});
