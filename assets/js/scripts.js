// Alternancia do Tema (Dark/Light)
const rootHtml = document.documentElement
const toggleTheme = document.getElementById('toggleTheme')

function changeTheme(){
    const currentTheme = rootHtml.getAttribute("data-theme")

    currentTheme == "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark") // Operador Ternário

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);

// Dinamismo do Menu
const menuLinks = document.querySelectorAll(".menu__link")

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    link.classList.add("active");
  })
})

// Dinamismo do campo Sobre
const accordionHeaders = document.querySelectorAll(".accordion__header")

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains('active')
        accordionActive ? accordionItem.classList.remove("active"):accordionItem.classList.add("active")
    })
})