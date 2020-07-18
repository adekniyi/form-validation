const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log('cliced')
    checkInput()
})

var checkInput = () =>{
    usernameValue = username.value.trim()
    emailValue = email.value.trim()
    passwordValue = password.value.trim()
    password2Value = password2.value.trim()

    if(usernameValue === ''){
        displayError(username,"Username can't be blank")
    }else{
        displaySuccess(username)
    }
    if(emailValue === ''){
        displayError(email,"Email can't be blank")
    }
    else{
        displaySuccess(email)
    }
    if(passwordValue === ''){
        displayError(password,"password can't be blank")
    }else if(passwordValue.length < 7){
        displayError(password,"password is too weak")
    }
    else{
        displaySuccess(password)
    }
    if(password2Value === ''){
        displayError(password2,"password can't be blank")
    }else if(password2Value != passwordValue){
        displayError(password2,"password does not match")
    }
    else{
        displaySuccess(password2)
    }
    
}

var displayError = (input,message) =>{
    const formControl = input.parentElement
    const small = formControl.querySelector('.small')
    small.innerHTML = message
    formControl.className = 'form-control error'

}

var displaySuccess = (input) => {
    const formControl = input.parentElement
    // const small = formControl.querySelector('.small')
    formControl.className = 'form-control success'
}