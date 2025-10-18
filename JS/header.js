
const openBtn = document.querySelector(".open_menu");

const menuMobile = document.querySelector(".menu_mobile");

let openMenu = false

function openMobileMenu (btn) {
    btn === true ? menuMobile.style.display = "grid" : menuMobile.style.display = "none"
}

openBtn.addEventListener("click", () => {
    openMenu = openMenu === false ? true : false

    openMobileMenu(openMenu)
})

openMobileMenu(openMenu)