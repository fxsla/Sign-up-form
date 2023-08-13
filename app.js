const button = document.querySelector(".submit-button")

button.addEventListener('click', () => {
    const password = document.querySelector("#password")
    const confirmPassword = document.querySelector("#password_confirm")
    const spanTag = document.querySelector(".hidden")

    if(password.value != confirmPassword.value){
        spanTag.classList.add("show")
        
       
    } else {
        spanTag.classList.remove("show")
        spanTag.classList.add("hidden")
        
    }
})