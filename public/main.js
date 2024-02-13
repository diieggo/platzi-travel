const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

const htmlElement = document.querySelector("html")
const toggleDarkButton =  document.querySelector("#toggle-dark")
const toggleDarkButtonSm =  document.querySelector("#toggle-dark-sm")

if (localStorage.theme === "dark" || (!('theme' in localStorage) && darkMode)) {
    htmlElement.classList.add("dark")
} else {
    htmlElement.classList.remove("dark")
}

function toggleDarkMode () {
    htmlElement.classList.toggle("dark")
    if (htmlElement.classList.contains("dark")) {
        localStorage.setItem('theme', "dark")
    } else {
        localStorage.setItem('theme', "light")
    }
}

toggleDarkButton.addEventListener('click', () => toggleDarkMode())
toggleDarkButtonSm.addEventListener('click', () => toggleDarkMode())