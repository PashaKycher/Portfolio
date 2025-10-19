
const translations = {
    en: {
        header_logo: "Portfolio",
        header_aboutMe: "About Me",
        header_skills: "Skills",
        header_project: "Project",
        header_contactMe: "Contact Me",

        hero_normal_1: "Hello I’am",
        hero_bold_1: "Pavel.",
        hero_bold_2: "Frontend",
        hero_transparent: "Developer",
        hero_normal_2: "Based In",
        hero_bold_3: "Ukraine",
        hero_p: "I specialize in creating modern, responsive web interfaces focused on usability and clean code. Experienced in HTML, CSS, JavaScript, and React. Continuously improving my skills and striving to develop solutions that combine aesthetic design with functional precision.",

        skills_normal: "My",
        skills_bold: "Skills",
    },
    ua: {
        header_logo: "Портфоліо",
        header_aboutMe: "Про мене",
        header_skills: "Навички",
        header_project: "Проєкти",
        header_contactMe: "Контакти",

        hero_normal_1: "Привіт я",
        hero_bold_1: "Павло.",
        hero_bold_2: "Frontend ",
        hero_transparent: "Розробник",
        hero_normal_2: "Базуюсь в",
        hero_bold_3: "Україні",
        hero_p: "Я спеціалізуюся на створенні сучасних, адаптивних вебінтерфейсів із фокусом на зручність користувача та чистий код. Маю досвід роботи з HTML, CSS, JavaScript і React. Постійно вдосконалюю свої навички та прагну реалізовувати ідеї, що поєднують естетику й функціональність.",

        skills_normal: "Мої",
        skills_bold: "Навички",
    },
};

let currentLang = "en";

const toggleBtn = document.querySelectorAll(".translations");

function changeLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[lang][key];
    });
}

toggleBtn.forEach((el) => {
    el.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "ua" : "en";
        toggleBtn.textContent = currentLang === "en" ? "EN" : "UA";
        changeLanguage(currentLang);
    })
});

changeLanguage(currentLang);



