// Массив всех блюд
const menuItems = [
    // Салаты
{
    id: 1,
    name: "Цезарь с курицей",
    description: "Куриная грудка, айсберг, перепелиные яйца, черри, сухарики, пармезан, соус Цезарь",
    price: 3150,
    category: "салаты"
},
{
    id: 2,
    name: "Цезарь с креветками",
    description: "Креветки, айсберг, перепелиные яйца, черри, сухарики, пармезан, соус Цезарь",
    price: 3350,
    category: "салаты"
},
{
    id: 3,
    name: "Цезарь с семгой",
    description: "Семга, айсберг, перепелиные яйца, черри, сухарики, пармезан, соус Цезарь",
    price: 3550,
    category: "салаты"
},
{
    id: 4,
    name: "Греческий",
    description: "Огурцы, помидоры, болгарский перец, фетакса, лист салата, маслины, красный лук",
    price: 3150,
    category: "салаты"
},
{
    id: 5,
    name: "Теплый салат из конины",
    description: "Вырезка из конины, огурцы, помидоры, салат микс, шампиньоны, фирменный соус",
    price: 3550,
    category: "салаты"
},
{
    id: 6,
    name: "Столичный",
    description: "Куриная грудка, огурцы, сладкий перец, маринованные огурцы, яйцо, картофель пай, майонез",
    price: 3150,
    category: "салаты"
},
{
    id: 7,
    name: "Курица с ананасами",
    description: "Куриное филе, ананас, арахис, салатный микс, черри, авторский соус",
    price: 3550,
    category: "салаты"
},
{
    id: 8,
    name: "Салат с хрустящими баклажанами",
    description: "Баклажаны, черри, микс салата, творожный сыр, кисло-сладкий соус",
    price: 3250,
    category: "салаты"
},
{
    id: 9,
    name: "Салат «Чикен»",
    description: "Курица, кукуруза, огурцы, черри, ананас, красный лук, авторский соус",
    price: 3250,
    category: "салаты"
},
// Горячие блюда (Паста + Гарниры тоже здесь)

{
    id: 10,
    name: "Бефстроганов",
    description: "Говяжья вырезка, лук, корнишон, гарнир пюре",
    price: 3450,
    category: "горячие-блюда"
},
{
    id: 11,
    name: "Курица в кисло-сладком соусе с рисом",
    description: "Курица, крахмал, свит-чили, гарнир рис",
    price: 3150,
    category: "горячие-блюда"
},
{
    id: 12,
    name: "Куриный шницель",
    description: "Куриная отбивная, панировочные сухари, гарнир пюре",
    price: 3150,
    category: "горячие-блюда"
},
{
    id: 13,
    name: "Телятина в азиатском стиле",
    description: "Телятина, помидоры, огурцы, болгарский перец, кунжут, гарнир рис",
    price: 3850,
    category: "горячие-блюда"
},
{
    id: 14,
    name: "Wok с курицей",
    description: "Курица, фунчоза, болгарский перец, морковь, лук, соевый соус, свит-чили",
    price: 2850,
    category: "горячие-блюда"
},
{
    id: 15,
    name: "Wok с говядиной",
    description: "Говядина, фунчоза, болгарский перец, морковь, лук, соевый соус, свит-чили",
    price: 2950,
    category: "горячие-блюда"
},
{
    id: 16,
    name: "Wok с креветками",
    description: "Креветки, фунчоза, болгарский перец, морковь, лук, соевый соус, свит-чили",
    price: 2950,
    category: "горячие-блюда"
},

// Паста
{
    id: 17,
    name: "Паста Альфредо",
    description: "",
    price: 2850,
    category: "горячие-блюда"
},
{
    id: 18,
    name: "Паста Карбонара",
    description: "",
    price: 2850,
    category: "горячие-блюда"
},
{
    id: 19,
    name: "Паста с морепродуктами",
    description: "",
    price: 3150,
    category: "горячие-блюда"
},

// Гарниры
{
    id: 20,
    name: "Рис",
    description: "",
    price: 750,
    category: "горячие-блюда"
},
{
    id: 21,
    name: "Картофельное пюре",
    description: "",
    price: 850,
    category: "горячие-блюда"
},
{
    id: 22,
    name: "Картофель фри",
    description: "Подается с кетчупом",
    price: 1050,
    category: "горячие-блюда"
},
{
    id: 23,
    name: "Картофельные дольки",
    description: "Подается с кетчупом",
    price: 1250,
    category: "горячие-блюда"
},
{
    id: 24,
    name: "Овощи гриль",
    description: "",
    price: 1550,
    category: "горячие-блюда"
},
{
    id: 25,
    name: "Шампиньоны на гриле",
    description: "",
    price: 1250,
    category: "горячие-блюда"
}
// Горячие блюда (Паста + Гарниры тоже здесь)

{
    id: 10,
    name: "Бефстроганов",
    description: "Говяжья вырезка, лук, корнишон, гарнир пюре",
    price: 3450,
    category: "горячие-блюда"
},
{
    id: 11,
    name: "Курица в кисло-сладком соусе с рисом",
    description: "Курица, крахмал, свит-чили, гарнир рис",
    price: 3150,
    category: "горячие-блюда"
},
{
    id: 12,
    name: "Куриный шницель",
    description: "Куриная отбивная, панировочные сухари, гарнир пюре",
    price: 3150,
    category: "горячие-блюда"
},
{
    id: 13,
    name: "Телятина в азиатском стиле",
    description: "Телятина, помидоры, огурцы, болгарский перец, кунжут, гарнир рис",
    price: 3850,
    category: "горячие-блюда"
},
{
    id: 14,
    name: "Wok с курицей",
    description: "Курица, фунчоза, болгарский перец, морковь, лук, соевый соус, свит-чили",
    price: 2850,
    category: "горячие-блюда"
},
{
    id: 15,
    name: "Wok с говядиной",
    description: "Говядина, фунчоза, болгарский перец, морковь, лук, соевый соус, свит-чили",
    price: 2950,
    category: "горячие-блюда"
},
{
    id: 16,
    name: "Wok с креветками",
    description: "Креветки, фунчоза, болгарский перец, морковь, лук, соевый соус, свит-чили",
    price: 2950,
    category: "горячие-блюда"
},

// Паста
{
    id: 17,
    name: "Паста Альфредо",
    description: "",
    price: 2850,
    category: "горячие-блюда"
},
{
    id: 18,
    name: "Паста Карбонара",
    description: "",
    price: 2850,
    category: "горячие-блюда"
},
{
    id: 19,
    name: "Паста с морепродуктами",
    description: "",
    price: 3150,
    category: "горячие-блюда"
},

// Гарниры
{
    id: 20,
    name: "Рис",
    description: "",
    price: 750,
    category: "горячие-блюда"
},
{
    id: 21,
    name: "Картофельное пюре",
    description: "",
    price: 850,
    category: "горячие-блюда"
},
{
    id: 22,
    name: "Картофель фри",
    description: "Подается с кетчупом",
    price: 1050,
    category: "горячие-блюда"
},
{
    id: 23,
    name: "Картофельные дольки",
    description: "Подается с кетчупом",
    price: 1250,
    category: "горячие-блюда"
},
{
    id: 24,
    name: "Овощи гриль",
    description: "",
    price: 1550,
    category: "горячие-блюда"
},
{
    id: 25,
    name: "Шампиньоны на гриле",
    description: "",
    price: 1250,
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
// Показать/скрыть кнопку
window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollTopBtn');
    if (window.scrollY > 300) {
        btn.style.display = 'flex';
    } else {
        btn.style.display = 'none';
    }
});

// Клик по кнопке — прокрутка наверх
document.getElementById('scrollTopBtn').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Первичная загрузка
document.addEventListener("DOMContentLoaded", () => {
    renderMenuItems();
    updateCartCount();
});
