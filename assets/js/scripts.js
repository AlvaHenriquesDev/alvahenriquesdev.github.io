const rootHtml = document.documentElement
const toggleTheme = document.getElementById('toggleTheme')

function changeTheme(){
    const currentTheme = rootHtml.getAttribute("data-theme")

    currentTheme == "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark") // Operador Ternário

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);