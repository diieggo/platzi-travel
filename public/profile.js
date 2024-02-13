const userNameElement = document.querySelector("#user-name")
const userUsernameElement = document.querySelector("#user-username")

if (localStorage.user) {
    currentUser = JSON.parse(localStorage.getItem('user'))
    userNameElement.innerHTML = currentUser.name
    userUsernameElement.innerHTML = "@" + currentUser.username
}

const profileFormElement = document.querySelector("#profile-form")
const nameInput = document.querySelector("#name")
const usernameInput = document.querySelector("#username")
const emailInput = document.querySelector("#email")

profileFormElement.addEventListener('submit', (e) => {
    e.preventDefault()
    formInfo = {
        name: nameInput.value,
        username: usernameInput.value,
        email: emailInput.value
    }
    localStorage.setItem('user', JSON.stringify(formInfo))
    location.reload()
})