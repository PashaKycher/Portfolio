const projects = [
    {
        name: "Yummy",
        type: "lg",
        image: "../assets/project/image_1.png",
        href: "https://pashakycher.github.io/Yummy",
        info: {
            en: {
                project_Yummy:
                    "Yummy is a stylish one-page website dedicated to desserts and sweets. It highlights clean layout design and responsive elements, created to refine my HTML and CSS fundamentals.",
            },
            ua: {
                project_Yummy:
                    "Yummy — це стильний односторінковий сайт, присвячений десертам та солодощам. Продемонстровано акуратну верстку та адаптивний дизайн, створений для вдосконалення навичок HTML і CSS.",
            },
        },
    },
    {
        name: "Photographer",
        type: "lg",
        image: "../assets/project/image_2.png",
        href: "https://pashakycher.github.io/Photographer",
        info: {
            en: {
                project_Photographer:
                    "A clean and elegant one-page portfolio for a professional photographer. Focused on composition, visual hierarchy, and modern responsive design.",
            },
            ua: {
                project_Photographer:
                    "Охайне та елегантне портфоліо для професійного фотографа. Акцент зроблено на композиції, візуальній ієрархії та сучасному адаптивному дизайні.",
            },
        },
    },
    {
        name: "Analytics",
        type: "lg",
        image: "../assets/project/image_3.png",
        href: "https://pashakycher.github.io/Analytics",
        info: {
            en: {
                project_Analytics:
                    "A modern landing page concept for an analytics platform. Features a clean UI, modular SCSS structure, and responsive layout.",
            },
            ua: {
                project_Analytics:
                    "Сучасна лендінг-сторінка для аналітичного сервісу. Має мінімалістичний інтерфейс, модульну структуру SCSS та адаптивну верстку.",
            },
        },
    },
    {
        name: "Restoran",
        type: "lg",
        image: "../assets/project/image_1.png",
        href: "https://pashakycher.github.io/Restoran",
        info: {
            en: {
                project_Restoran:
                    "A responsive website template for a restaurant with sections for menu, chefs, and reservations. Designed to practice layout building and style consistency.",
            },
            ua: {
                project_Restoran:
                    "Адаптивний сайт ресторану з розділами меню, шеф-кухарів та бронювання. Створений для практики верстки та послідовного стилю.",
            },
        },
    },
    {
        name: "Body_Shape",
        type: "lg",
        image: "../assets/project/image_2.png",
        href: "https://pashakycher.github.io/Body_Shape",
        info: {
            en: {
                project_Body_Shape:
                    "A dark-themed landing page for a fitness brand. Built with HTML and SCSS, highlighting trainers, programs, and contact form.",
            },
            ua: {
                project_Body_Shape:
                    "Лендінг у темній стилістиці для фітнес-бренду. Виконано з використанням HTML і SCSS, із блоками про тренерів, програми та форму зворотного зв’язку.",
            },
        },
    },
    {
        name: "Game_Page",
        type: "lg",
        image: "../assets/project/image_3.png",
        href: "https://pashakycher.github.io/Game_Page",
        info: {
            en: {
                project_Game_Page:
                    "A static landing page for a 3D game studio. Built with HTML, CSS, and SASS to showcase a clean and bold design.",
            },
            ua: {
                project_Game_Page:
                    "Статичний лендінг для студії 3D-ігор. Створено за допомогою HTML, CSS і SASS, із чистим і виразним дизайном.",
            },
        },
    },
    {
        name: "2D_Artist",
        type: "lg",
        image: "../assets/project/image_1.png",
        href: "https://pashakycher.github.io/2D_Artist",
        info: {
            en: {
                project_2D_Artist:
                    "A simple responsive portfolio for a 2D artist. Clean layout, bright visuals, and smooth responsiveness.",
            },
            ua: {
                project_2D_Artist:
                    "Просте адаптивне портфоліо для 2D-художника. Охайна структура, яскраві візуали та плавна адаптивність.",
            },
        },
    },
    {
        name: "News",
        type: "lg",
        image: "../assets/project/image_2.png",
        href: "https://pashakycher.github.io/News",
        info: {
            en: {
                project_News:
                    "A blog-style news layout built with Tailwind CSS. Includes articles, sidebar topics, and pagination for easy navigation.",
            },
            ua: {
                project_News:
                    "Новинний сайт у стилі блогу, створений за допомогою Tailwind CSS. Містить статті, бокову панель із темами та пагінацію для зручності перегляду.",
            },
        },
    },
    {
        name: "Manhattan",
        type: "lg",
        image: "../assets/project/image_3.png",
        href: "https://pashakycher.github.io/Manhattan",
        info: {
            en: {
                project_Manhattan:
                    "A modern and responsive restaurant website featuring an elegant design and interactive map integration.",
            },
            ua: {
                project_Manhattan:
                    "Сучасний адаптивний сайт ресторану з елегантним дизайном і інтерактивною картою.",
            },
        },
    },
    {
        name: "ToDo",
        type: "fr",
        image: "../assets/project/image_1.png",
        href: "https://to-do-opal-alpha.vercel.app",
        info: {
            en: {
                project_ToDo:
                    "A minimalistic To-Do app built with React. Supports task creation, completion, and deletion with data stored in Local Storage.",
            },
            ua: {
                project_ToDo:
                    "Мінімалістичний To-Do застосунок на React. Дозволяє створювати, виконувати та видаляти завдання, зберігаючи дані у Local Storage.",
            },
        },
    },
    {
        name: "MoviesDB",
        type: "fr",
        image: "../assets/project/image_2.png",
        href: "https://movies-db-iota-lime.vercel.app",
        info: {
            en: {
                project_MoviesDB:
                    "A movie browser app built with React and Redux Toolkit Query using TMDB API. Includes search, filters, and detailed info pages.",
            },
            ua: {
                project_MoviesDB:
                    "Застосунок для перегляду фільмів, створений на React і Redux Toolkit Query із використанням TMDB API. Містить пошук, фільтри та сторінки з деталями.",
            },
        },
    },
    {
        name: "Shop",
        type: "fr",
        image: "../assets/project/image_3.png",
        href: "https://shop-rust-one.vercel.app",
        info: {
            en: {
                project_Shop:
                    "A React single-page shop app with product list and cart functionality. Built using SCSS modules and Redux Toolkit.",
            },
            ua: {
                project_Shop:
                    "Односторінковий React-застосунок магазину з каталогом товарів та кошиком. Використано SCSS-модулі та Redux Toolkit.",
            },
        },
    },
    {
        name: "Weather",
        type: "fr",
        image: "../assets/project/image_1.png",
        href: "https://weather-red-three.vercel.app",
        info: {
            en: {
                project_Weather:
                    "A simple React app displaying current weather data using OpenWeatherMap API with a clean, intuitive interface.",
            },
            ua: {
                project_Weather:
                    "Простий React-застосунок, що показує поточні погодні дані через OpenWeatherMap API. Має чистий і зручний інтерфейс.",
            },
        },
    },
    {
        name: "Movies_market",
        type: "fr",
        image: "../assets/project/image_2.png",
        href: "https://movies-market.vercel.app",
        info: {
            en: {
                project_Movies_market:
                    "A React app using TMDB API with pages for trending, top-rated, and now-playing movies, plus infinite scroll and details view.",
            },
            ua: {
                project_Movies_market:
                    "React-застосунок із TMDB API, сторінками популярних, найрейтинговіших і поточних фільмів, нескінченним скролом і переглядом деталей.",
            },
        },
    },
    {
        name: "Chat",
        type: "fl",
        image: "../assets/project/image_3.png",
        href: "https://chat-client-hsiq.onrender.com/",
        info: {
            en: {
                project_Chat:
                    "A real-time chat app built with React, Node.js, and Socket.IO. Features user registration, private chats, and media sharing.",
            },
            ua: {
                project_Chat:
                    "Реальний чат у режимі реального часу, створений із React, Node.js і Socket.IO. Підтримує реєстрацію користувачів, приватні чати та обмін медіа.",
            },
        },
    },
    {
        name: "Ecommerce",
        type: "fl",
        image: "../assets/project/image_1.png",
        href: "https://ecommerce-frontend-iota-one.vercel.app",
        info: {
            en: {
                project_Ecommerce:
                    "A small e-commerce app with React frontend and Node.js backend. Includes authentication, product management, cart, and Stripe payments.",
            },
            ua: {
                project_Ecommerce:
                    "Невеликий e-commerce застосунок із фронтендом на React і бекендом на Node.js. Реалізовано авторизацію, керування товарами, кошик і оплату через Stripe.",
            },
        },
    },
    {
        name: "ATB_market",
        type: "fl",
        image: "../assets/project/image_2.png",
        href: "https://atb-market-7c6m.vercel.app",
        info: {
            en: {
                project_ATB_market:
                    "A full-stack e-commerce template built with React + Vite and Express + MongoDB. Includes authentication, Stripe checkout, and Cloudinary uploads.",
            },
            ua: {
                project_ATB_market:
                    "Повнофункціональний шаблон e-commerce, створений на React + Vite і Express + MongoDB. Має авторизацію, оплату Stripe і завантаження через Cloudinary.",
            },
        },
    },
    {
        name: "Live_Journal",
        type: "fl",
        image: "../assets/project/image_3.png",
        href: "https://live-journal-blush.vercel.app",
        info: {
            en: {
                project_Live_Journal:
                    "A social journaling app with posts, profiles, and real-time updates. Built with React + Node.js using Clerk and Inngest.",
            },
            ua: {
                project_Live_Journal:
                    "Соціальний застосунок-щоденник із постами, профілями та оновленнями в реальному часі. Створений на React і Node.js з використанням Clerk та Inngest.",
            },
        },
    },
    {
        name: "Car_Rental",
        type: "fl",
        image: "../assets/project/image_1.png",
        href: "https://car-rentalclient.vercel.app",
        info: {
            en: {
                project_Car_Rental:
                    "A car rental web app with booking, listings, and owner dashboard. Built with React, Express, MongoDB, and ImageKit integration.",
            },
            ua: {
                project_Car_Rental:
                    "Застосунок оренди авто з бронюванням, списками автомобілів та панеллю власника. Створено на React, Express і MongoDB із інтеграцією ImageKit.",
            },
        },
    },
    {
        name: "QuickGPT",
        type: "fl",
        image: "../assets/project/image_2.png",
        href: "",
        info: {
            en: {
                project_QuickGPT:
                    "QuickGPT is a lightweight AI chat platform for text and image generation. Built with React, Node.js, and MongoDB.",
            },
            ua: {
                project_QuickGPT:
                    "QuickGPT — легкий AI-чат із підтримкою генерації тексту та зображень. Створений на React, Node.js і MongoDB.",
            },
        },
    },
];

let currentType = "fl"; // тип, який зараз вибрано
let currentPage = 0;
const perPage = 3;

// Контейнер
const projectsContainer = document.querySelector(".projects-container");

// Фільтр і кнопки
const filterButtons = document.querySelectorAll(".filter-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function getFilteredProjects() {
    return projects.filter((p) => p.type === currentType);
}

function renderProjects(lang) {
    const filtered = getFilteredProjects();
    const start = currentPage * perPage;
    const end = start + perPage;
    const visible = filtered.slice(start, end);

    projectsContainer.innerHTML = "";

    visible.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
        <a href="${project.href}" target="_blank" class="project-card-img">
            <img src="${project.image}" alt="${project.name}" />
        </a>
        <a href="${project.href}" target="_blank" class="project-card-info">
            <h3>${project.name}</h3>
            <p>${project.info[lang][`project_${project.name}`]}</p>
        </a>
    `;

        projectsContainer.appendChild(card);
    });

    updatePaginationButtons(filtered.length);
}

function updatePaginationButtons(total) {
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = (currentPage + 1) * perPage >= total;
}

function changeLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[lang][key];
    });

    renderProjects(lang);
}

// ======= Події =======
changeLanguage(currentLang);
// Перемикач типів
filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentType = btn.getAttribute("data-type");
        currentPage = 0;
        renderProjects(currentLang);
    });
});

// Перемикання сторінок
prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        renderProjects(currentLang);
    }
});

nextBtn.addEventListener("click", () => {
    const total = getFilteredProjects().length;
    if ((currentPage + 1) * perPage < total) {
        currentPage++;
        renderProjects(currentLang);
    }
});

// Початкове відображення
renderProjects(currentLang);

