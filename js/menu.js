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
},
// Горячие блюда (Паста + Гарниры тоже здесь)
{
    id: 26,
    name: "Том Ям",
    description: "Морепродукты, шампиньоны, черри, гарнир рис, кинза",
    price: 3850,
    category: "первые-блюда"
},
{
    id: 27,
    name: "Рамен из курицы",
    description: "Курица, яйцо, древесные грибы, огурцы, лапша, соевый соус",
    price: 3050,
    category: "первые-блюда"
},
{
    id: 28,
    name: "Рамен из говядины",
    description: "Говядина, яйцо, древесные грибы, огурцы, лапша, соевый соус, острый",
    price: 3150,
    category: "первые-блюда"
},
{
    id: 29,
    name: "Куриный суп",
    description: "Курица, лапша, морковь, лук, укроп",
    price: 1950,
    category: "первые-блюда"
},
// Гриль меню

{
    id: 30,
    name: "Баранина на гриле",
    description: "Баранина, приготовленная на гриле",
    price: 3750,
    category: "гриль"
},
{
    id: 31,
    name: "Утка на гриле",
    description: "Утка, приготовленная на гриле",
    price: 3550,
    category: "гриль"
},
{
    id: 32,
    name: "Курица на гриле",
    description: "Курица, приготовленная на гриле",
    price: 2950,
    category: "гриль"
},
{
    id: 33,
    name: "Люля-кебаб",
    description: "Фирменный люля-кебаб из баранины",
    price: 2700,
    category: "гриль"
},
{
    id: 34,
    name: "Ассорти колбасок",
    description: "Ассорти колбасок, приготовленных на гриле",
    price: 13950,
    category: "гриль"
},
{
    id: 35,
    name: "Колбаски из баранины",
    description: "Домашние колбаски из баранины",
    price: 3950,
    category: "гриль"
},
{
    id: 37,
    name: "Колбаски из говядины",
    description: "Домашние колбаски из говядины",
    price: 3950,
    category: "гриль"
},
{
    id: 38,
    name: "Медальоны",
    description: "Нежные медальоны из говядины",
    price: 4950,
    category: "гриль"
},
{
    id: 39,
    name: "Стейк T-Bon говядина",
    description: "Классический стейк T-Bone из говядины",
    price: 5550,
    category: "гриль"
},
{
    id: 40,
    name: "Стейк Рибай говядина",
    description: "Стейк Рибай из говядины",
    price: 5550,
    category: "гриль"
},
{
    id: 41,
    name: "Стейк из семги",
    description: "Стейк из свежей семги, приготовленный на гриле",
    price: 6550,
    category: "гриль"
},
{
    id: 42,
    name: "Мясной микс гриль на 5-6 персон",
    description: "Говядина, конина, куриное филе, крылышки, колбаски, овощи гриль, картофельные дольки, рис, фирменный соус",
    price: 27000,
    category: "гриль"
},
{
    id: 43,
    name: "Мясной сет на 6-8 персон",
    description: "Говядина, конина, каре баранины, куриное филе, крылышки, колбаски, утка, овощи гриль, шампиньоны, картофельные дольки, рис",
    price: 32000,
    category: "гриль"
},
// Fast Food

{
    id: 44,
    name: "Пицца Пепперони",
    description: "Классическая пицца с пепперони и сыром",
    price: 3150,
    category: "fastfood"
},
{
    id: 45,
    name: "Пицца Маргарита",
    description: "Пицца с томатным соусом, сыром моцарелла и базиликом",
    price: 2850,
    category: "fastfood"
},
{
    id: 46,
    name: "Пицца Болоньезе",
    description: "Пицца с мясным соусом болоньезе и сыром",
    price: 3450,
    category: "fastfood"
},
{
    id: 47,
    name: "Пицца Курица с грибами",
    description: "Пицца с куриным филе, грибами и сыром",
    price: 3450,
    category: "fastfood"
},
{
    id: 48,
    name: "Пицца 4 сезона",
    description: "Пицца с четырьмя видами начинок",
    price: 3450,
    category: "fastfood"
},
{
    id: 49,
    name: "Хачапури",
    description: "Классический хачапури",
    price: 3250,
    category: "fastfood"
},
{
    id: 50,
    name: "Куриный бургер",
    description: "Бургер с куриной котлетой и свежими овощами",
    price: 2450,
    category: "fastfood"
},
{
    id: 51,
    name: "Говяжий бургер",
    description: "Бургер с сочной говяжьей котлетой",
    price: 2750,
    category: "fastfood"
},
{
    id: 52,
    name: "Куриные крылья в панировке (8 шт)",
    description: "Хрустящие куриные крылья в панировке",
    price: 2450,
    category: "fastfood"
},
{
    id: 53,
    name: "Наггетсы (6 шт)",
    description: "Куриные наггетсы в хрустящей панировке",
    price: 2200,
    category: "fastfood"
},
{
    id: 54,
    name: "Сырные палочки (6 шт)",
    description: "Жареные палочки из моцареллы в панировке",
    price: 2800,
    category: "fastfood"
},
// Продолжение menuItems

// Закуски
{
    id: 56,
    name: "Мясное ассорти",
    description: "Қазы, жая, язык, сыр",
    price: 9250,
    category: "закуски"
},
{
    id: 57,
    name: "Рыбное ассорти",
    description: "Семга, белорыбица, лимон, тарталетки с икрой",
    price: 9250,
    category: "закуски"
},
{
    id: 58,
    name: "Куриное ассорти",
    description: "Голень, крылышки, ножки, куриный рулет",
    price: 7250,
    category: "закуски"
},
{
    id: 59,
    name: "Овощное ассорти",
    description: "Помидоры, огурцы, болгарский перец, брынза, зелень",
    price: 3250,
    category: "закуски"
},
{
    id: 60,
    name: "Закуска по-русски",
    description: "Селедка, маринованные огурцы, яйцо, картофельные дольки, лук, лимон",
    price: 3550,
    category: "закуски"
},
{
    id: 61,
    name: "Ассорти разносолов",
    description: "Маринованные помидоры, корнишоны, грибы, патиссоны",
    price: 3550,
    category: "закуски"
},

// Соусы и хлеб
{
    id: 62,
    name: "Кетчуп",
    description: "",
    price: 350,
    category: "соусы-и-хлеб"
},
{
    id: 63,
    name: "BBQ",
    description: "",
    price: 350,
    category: "соусы-и-хлеб"
},
{
    id: 64,
    name: "Сырный соус",
    description: "",
    price: 350,
    category: "соусы-и-хлеб"
},
{
    id: 65,
    name: "Тар-тар соус",
    description: "",
    price: 350,
    category: "соусы-и-хлеб"
},
{
    id: 66,
    name: "Хлебная корзина",
    description: "",
    price: 850,
    category: "соусы-и-хлеб"
},
{
    id: 67,
    name: "Баурсаки (10 шт)",
    description: "",
    price: 700,
    category: "соусы-и-хлеб"
},
{
    id: 68,
    name: "Самса (10 шт)",
    description: "",
    price: 3500,
    category: "соусы-и-хлеб"
},

// Предзаказ
{
    id: 69,
    name: "Бешбармак ассорти на 5–6 человек",
    description: "",
    price: 25000,
    category: "предзаказ"
},
{
    id: 70,
    name: "Плов на 5–6 человек",
    description: "",
    price: 20000,
    category: "предзаказ"
},
{
    id: 71,
    name: "Куырдак на 5–6 человек",
    description: "",
    price: 23000,
    category: "предзаказ"
},
{
    id: 72,
    name: "Курица с овощами в сливочном соусе на 5–6 человек (гарнир на выбор)",
    description: "",
    price: 20000,
    category: "предзаказ"
},
// Продолжение menuItems

// Прочее
{
    id: 73,
    name: "Медовик",
    description: "",
    price: 1000,
    category: "десерты"
},
{
    id: 74,
    name: "Наполеон",
    description: "",
    price: 1000,
    category: "десерты"
},
{
    id: 75,
    name: "Орехи солёные",
    description: "",
    price: 800,
    category: "прочее"
},
{
    id: 76,
    name: "Фисташки",
    description: "",
    price: 1200,
    category: "прочее"
},
{
    id: 77,
    name: "Чипсы",
    description: "",
    price: 1200,
    category: "прочее"
},
{
    id: 78,
    name: "Жевательная резинка",
    description: "",
    price: 350,
    category: "прочее"
},
{
    id: 80,
    name: "Сигареты в ассортименте",
    description: "",
    price: 1700,
    category: "прочее"
},
{
    id: 81,
    name: "Лимонад клубничный",
    description: "",
    price: 2500,
    category: "бар"
},
{
    id: 82,
    name: "Лимонад мохито/клубничный",
    description: "",
    price: 2500,
    category: "бар"
},
{
    id: 83,
    name: "Лимонад ягодный",
    description: "",
    price: 2500,
    category: "бар"
},
{
    id: 84,
    name: "Coca-Cola, Sprite 0.25",
    description: "",
    price: 700,
    category: "бар"
},
{
    id: 85,
    name: "Coca-Cola, Sprite 0.5",
    description: "",
    price: 850,
    category: "бар"
},
{
    id: 86,
    name: "Натуральный сок 1л",
    description: "",
    price: 1200,
    category: "бар"
},
{
    id: 87,
    name: "Ташкентский чай",
    description: "",
    price: 1500,
    category: "бар"
},
{
    id: 88,
    name: "Ягодный чай",
    description: "",
    price: 1500,
    category: "бар"
},
{
    id: 89,
    name: "Черный чай",
    description: "",
    price: 950,
    category: "бар"
},
{
    id: 90,
    name: "Зеленый чай",
    description: "",
    price: 1500,
    category: "бар"
},
{
    id: 91,
    name: "Чай с молоком",
    description: "",
    price: 1150,
    category: "бар"
},
{
    id: 92,
    name: "Пиво разливное Carslberg",
    description: "",
    price: 1400,
    category: "бар"
},
{
    id: 93,
    name: "Пиво разливное Zatecky gus",
    description: "",
    price: 1000,
    category: "бар"
},
{
    id: 94,
    name: "Колбаски из конины",
    description: "Домашние колбаски из конины",
    price: 3950,
    category: "гриль"
},
{
    id: 95,
    name: "Колбаски из курицы",
    description: "Домашние колбаски из курицы",
    price: 3950,
    category: "гриль"
},
{
    id: 96,
    name: "Мороженое",
    description: "Самое лучшее в жаркий день",
    price: 750,
    category: "десерты"
},
{
    id: 97,
    name: "Чизкейк",md
    description: "",
	price: 1350,
    category: "десерты"
},
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
