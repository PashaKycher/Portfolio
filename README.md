# Портфоліо / Portfolio

---

## Українська

Назва: Портфоліо — особистий сайт з інформацією про навички, досвід і приклади проєктів.

Коротко:
- Статичний веб-сайт (HTML, SCSS/CSS, JavaScript) з багатомовною локалізацією (EN/UA).
- Містить розділи: Hero, Skills, Experience, About Me, Projects, Testimonials, Contact.
- Форма зворотнього зв'язку працює через Formspree (action встановлено в `index.html`).
- Проєкти, навички та тексти локалізовані у JavaScript-файлах (`JS/project.js`, `JS/skills.js`, `JS/translations.js`).

Структура (коротко):
- `index.html` — головна сторінка.
- `CSS/index.css` — зкомпільований або основний CSS.
- `SCSS/` — модульні SCSS-файли, імпортовані з `index.scss`.
- `JS/` — логіка сайту: локалізація, вивід проєктів, мобільне меню, навички.
- `assets/` — зображення та медіа для секцій.

Як запустити локально:
1. В репозиторії відкрийте `index.html` у браузері (подвійний клік або правий клік → Open with → браузер).
2. Рекомендація: встановити Live Server у VS Code для автоматичного оновлення при зміні файлів.

Редагування контенту:
- Додавання/редагування проєктів: `JS/project.js` (масив `projects`).
- Навички: `JS/skills.js` (масив `skills`).
- Тексти та переклади: `JS/translations.js` (об'єкт `translations`).
- Стилі: редагувати SCSS в `SCSS/` та зкомпілювати в `CSS/index.css` (або використати налаштування зборки).

Примітки:
- Контактна форма використовує Formspree: перевірте `action` в формі, якщо потрібно змінити прийом повідомлень.
- Деякі проєкти у `JS/project.js` — це посилання на зовнішні хости (GitHub Pages, Vercel тощо).

Ліцензія: немає вказаної ліцензії. Додайте `LICENSE` при потребі.

---

## English

Title: Portfolio — personal website showcasing skills, experience and project examples.

Summary:
- Static website (HTML, SCSS/CSS, JavaScript) with bilingual localization (EN/UA).
- Sections include: Hero, Skills, Experience, About Me, Projects, Testimonials, Contact.
- Contact form uses Formspree (action is set in `index.html`).
- Projects, skills and translations are defined in JavaScript files (`JS/project.js`, `JS/skills.js`, `JS/translations.js`).

Project structure (short):
- `index.html` — main page.
- `CSS/index.css` — primary stylesheet (output or main CSS).
- `SCSS/` — modular SCSS partials imported from `index.scss`.
- `JS/` — site logic: i18n, projects rendering, mobile menu, skills rendering.
- `assets/` — images and media used by sections.

How to run locally:
1. Open `index.html` in a browser from the repository root (double-click or "Open with" from file manager).
2. Recommended: use the Live Server extension in VS Code for auto-reload while editing.

Content editing:
- Add/edit projects in `JS/project.js` (the `projects` array).
- Edit skills in `JS/skills.js` (the `skills` array).
- Update text and translations in `JS/translations.js` (the `translations` object).
- Modify styles in `SCSS/` and compile to `CSS/index.css` if you use an SCSS toolchain.

Notes:
- Contact form posts to Formspree — update the `action` attribute in the form tag if you want responses sent elsewhere.
- Project items often link to external deployments (GitHub Pages, Vercel, Render).

License: no license specified. Add a `LICENSE` file if you want to set licensing terms.

