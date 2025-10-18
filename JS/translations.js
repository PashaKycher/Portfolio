
const translations = {
    en: {
        header_logo: "Portfolio",
        header_aboutMe: "About Me",
        header_skills: "Skills",
        header_project: "Project",
        header_contactMe: "Contact Me",
    },
    ua: {
        header_logo: "Портфоліо",
        header_aboutMe: "Про мене",
        header_skills: "Навички",
        header_project: "Проєкти",
        header_contactMe: "Контакти",
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



