function fazLogin(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
        if (request.status === 200 && request.email === "adminteste2@gmail.com") {
            return window.location.href = "/index_adm"
        }
        if (request.status === 200) {
            return window.location.href = "/index_user"
        } else {
            alert("Login ou Senha Incorretos!");
            return window.location.href = '/'
        }
    }
};

function logarUsuario() {
    event.preventDefault()
    let url = "http://localhost:3000/auth/authenticate"
    let email = document.getElementById("emailLogin").value
    let senha = document.getElementById("senhaLogin").value
    console.log(email)
    console.log(senha)

    body = {
        "email": email,
        "password": senha
    }


    fazLogin(url, body)
};
