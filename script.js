const email = document.getElementById('email')

const password = document.getElementById('password')
const passwordconf = document.getElementById('passwordconf')

const message = document.getElementById('message')

const submit = document.querySelector('button')
submit.addEventListener('click', function(e) {
    e.preventDefault()
    if (email.value && password.value) {
        if (password.value == passwordconf.value) {
            message.innerHTML = "Form submitted successfully!"
            message.style.color = "purple"
        }
        else {
            message.innerHTML = "Passwords do not match"
            message.style.color = "red"
        }
    }
})
