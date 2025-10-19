
const skills = [
    {
        title: "HTML5",
        image: "../assets/skills/html5.svg",
    },
    {
        title: "SASS / SCSS",
        image: "../assets/skills/scss.svg",
    },
    {
        title: "JavaScript",
        image: "../assets/skills/javascript.svg",
    },
    {
        title: "React",
        image: "../assets/skills/react.svg",
    },
    {
        title: "Node.js",
        image: "../assets/skills/node-js.svg",
    },
    {
        title: "MongoDB",
        image: "../assets/skills/mongodb.svg",
    },
    {
        title: "Vercel",
        image: "../assets/skills/vercel.svg",
    },
    {
        title: "Figma",
        image: "../assets/skills/figma.svg",
    },
    {
        title: "Git",
        image: "../assets/skills/git.svg",
    },
    {
        title: "JSON",
        image: "../assets/skills/json.svg",
    },
]

const skillsDiv = document.querySelector(".skills_skills")

function mySkills(elem) {
    elem.innerHTML = '';

    skills.map((skill) => {
        const skillsCard = document.createElement("div");
        const cardImg = document.createElement("img");
        const cardTitle = document.createElement("p");

        skillsCard.className = 'skills_card';

        cardImg.className = 'skills_card_img';
        cardImg.alt = `${skill.title}`;
        cardImg.src = `${skill.image}`;

        cardTitle.className = 'skills_card_p';
        cardTitle.innerHTML = `${skill.title}`;

        skillsCard.append(cardImg);
        skillsCard.append(cardTitle);

        elem.append(skillsCard)
    })
}

mySkills(skillsDiv)
