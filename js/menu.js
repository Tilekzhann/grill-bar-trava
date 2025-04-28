// Массив всех блюд
const menuItems = [
    // Стейки
    { id: 1, name: "Клаб стейк", price: 8550, image: "assets/steak-club.png", category: "стейки" },
    { id: 2, name: "Пиканья", price: 6550, image: "assets/picanha.png", category: "стейки" },
    { id: 3, name: "Медальоны", price: 6550, image: "assets/medallions.png", category: "стейки" },
    { id: 4, name: "Стейк Нью-Йорк", price: 6550, image: "assets/steak-newyork.png", category: "стейки" },
    { id: 5, name: "Стейк Томагоццу", price: 5550, image: "assets/steak-tomag.png", category: "стейки" },
    { id: 6, name: "Стейк Рибай (Травяной)", price: 5550, image: "assets/steak-ribeye-grass.png", category: "стейки" },
    { id: 7, name: "Стейк Рибай (Зерновой)", price: 6550, image: "assets/steak-ribeye-grain.png", category: "стейки" },

    // Горячие блюда
    { id: 8, name: "Бефстроганов с картофелем", price: 3950, image: "assets/beefstroganoff.png", category: "горячие-блюда" },
    { id: 9, name: "Курица гриль на углях", price: 3550, image: "assets/chicken-grill.png", category: "горячие-блюда" },
    { id: 10, name: "Цыпленок табака", price: 3550, image: "assets/chicken-tabaka.png", category: "горячие-блюда" },
    { id: 11, name: "Куриные крылышки на углях", price: 3250, image: "assets/chicken-wings.png", category: "горячие-блюда" },
    { id: 12, name: "Курица в соусе терияки", price: 3350, image: "assets/chicken-teriyaki.png", category: "горячие-блюда" },
    { id: 13, name: "Бараньи ребрышки", price: 6350, image: "assets/lamb-ribs.png", category: "горячие-блюда" },
    { id: 14, name: "Курица по-азиатски", price: 3950, image: "assets/chicken-asian.png", category: "горячие-блюда" },

    // Первые блюда
    { id: 15, name: "Рамен с курицей", price: 2850, image: "assets/ramen-chicken.png", category: "первые-блюда" },
    { id: 16, name: "Рамен с говядиной", price: 3250, image: "assets/ramen-beef.png", category: "первые-блюда" },
    { id: 17, name: "Суп Харчо", price: 2850, image: "assets/soup-kharcho.png", category: "первые-блюда" },
    { id: 18, name: "Суп Солянка", price: 2850, image: "assets/soup-solyanka.png", category: "первые-блюда" },
    { id: 19, name: "Куриный суп", price: 2250, image: "assets/soup-chicken.png", category: "первые-блюда" },
    { id: 20, name: "Крем-суп из шампиньонов", price: 2850, image: "assets/soup-mushroom.png", category: "первые-блюда" },

    // Гарниры
    { id: 21, name: "Рис отварной", price: 650, image: "assets/rice.png", category: "гарниры" },
    { id: 22, name: "Картофель фри", price: 950, image: "assets/fries.png", category: "гарниры" },
    { id: 23, name: "Овощи гриль", price: 1250, image: "assets/grilled-vegetables.png", category: "гарниры" },
    { id: 24, name: "Картофельное пюре", price: 850, image: "assets/mashed-potatoes.png", category: "гарниры" },
    { id: 25, name: "Картофельные дольки", price: 950, image: "assets/potato-wedges.png", category: "гарниры" },
    { id: 26, name: "Булгур", price: 850, image: "assets/bulgur.png", category: "гарниры" },

    // Колбаски на гриле
    { id: 27, name: "Колбаски куриные", price: 3750, image: "assets/sausages-chicken.png", category: "колбаски" },
    { id: 28, name: "Колбаски из говядины", price: 3750, image: "assets/sausages-beef.png", category: "колбаски" },
    { id: 29, name: "Колбаски из баранины", price: 3750, image: "assets/sausages-lamb.png", category: "колбаски" },

    // Салаты
    { id: 30, name: "Салат Цезарь с курицей", price: 3950, image: "assets/caesar-salad.png", category: "салаты" },
    { id: 31, name: "Салат с лососем", price: 4250, image: "assets/salmon-salad.png", category: "салаты" },
    { id: 32, name: "Греческий салат", price: 3550, image: "assets/greek-salad.png", category: "салаты" },
    { id: 33, name: "Овощной салат", price: 3250, image: "assets/vegetable-salad.png", category: "салаты" },
    { id: 34, name: "Салат с тунцом", price: 4250, image: "assets/tuna-salad.png", category: "салаты" },
    { id: 35, name: "Салат с рукколой и креветками", price: 4550, image: "assets/shrimp-salad.png", category: "салаты" },

    // Паста
    { id: 36, name: "Паста Болоньезе", price: 2850, image: "assets/pasta-bolognese.png", category: "паста" },
    { id: 37, name: "Паста Карбонара", price: 2850, image: "assets/pasta-carbonara.png", category: "паста" },

    // Закуски
    { id: 38, name: "Сырная тарелка", price: 2250, image: "assets/cheese-platter.png", category: "закуски" },
    { id: 39, name: "Мясная нарезка", price: 3250, image: "assets/meat-platter.png", category: "закуски" },
    { id: 40, name: "Рыбная нарезка", price: 3250, image: "assets/fish-platter.png", category: "закуски" },
    { id: 41, name: "Овощная нарезка", price: 2250, image: "assets/vegetable-platter.png", category: "закуски" },

    // К пиву
    { id: 42, name: "Куриные крылышки", price: 3350, image: "assets/beer-wings.png", category: "к-пиву" },
    { id: 43, name: "Кольца кальмаров", price: 3550, image: "assets/squid-rings.png", category: "к-пиву" },
    { id: 44, name: "Сухарики ассорти", price: 1250, image: "assets/croutons.png", category: "к-пиву" },
    { id: 45, name: "Орехи ассорти", price: 2250, image: "assets/nuts.png", category: "к-пиву" },

    // Напитки
    { id: 46, name: "Bonaqua (0.5 л)", price: 800, image: "assets/bonaqua.png", category: "напитки" },
    { id: 47, name: "Perrier", price: 1500, image: "assets/perrier.png", category: "напитки" },
    { id: 48, name: "Соки Rich", price: 1200, image: "assets/rich-juice.png", category: "напитки" },
    { id: 49, name: "Эспрессо", price: 1000, image: "assets/espresso.png", category: "напитки" },
    { id: 50, name: "Американо", price: 1000, image: "assets/americano.png", category: "напитки" },
    { id: 51, name: "Капучино", price: 1500, image: "assets/cappuccino.png", category: "напитки" },
    { id: 52, name: "Латте", price: 1500, image: "assets/latte.png", category: "напитки" },

    // Десерты
    { id: 53, name: "Медовик", price: 2500, image: "assets/honey-cake.png", category: "десерты" },
    { id: 54, name: "Наполеон", price: 2500, image: "assets/napoleon-cake.png", category: "десерты" },
    { id: 55, name: "Мороженое ассорти", price: 2500, image: "assets/ice-cream.png", category: "десерты" }
];


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
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-details">
                <div class="item-name">${item.name}</div>
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
function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = menuItems.find(item => item.id === id);
    if (product) {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        showNotification(`${product.name} добавлено в корзину!`);
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

// Первичная загрузка
document.addEventListener("DOMContentLoaded", () => {
    renderMenuItems();
    updateCartCount();
});
