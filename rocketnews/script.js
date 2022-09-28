function send() {
    let input = document.getElementById('email-input').value
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if(emailRegex.test(input) === false) {
        alert("EMAIL INVALIDO!!")
    }
    else {
        alert("EMAIL ENVIADO COM SUCESSO!! \n Email: " + input)
    }
}
