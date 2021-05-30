function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
        if (request.status === 200)
            return alert("Login realizado com sucesso!");
            window.open("views/index_user.ejs")
            if (senha === "admin" && email === "admin@gmail.com")
                window.location.href = "views/index_admin.ejs   "
        else (request.status === 400) 
            return alert("Senha ou email incorretos! Por favor verificar.");
    }

    return request.responseText
}

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



    fazPost(url, body)
};
