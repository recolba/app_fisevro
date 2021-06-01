function fazCadastro(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
        if (request.status === 200) {
            alert("Usuário cadastrado com sucesso!");
            return window.location.href = '/'
        } else {
            alert("Cadastro não realizado!");
            return window.location.href = '/'
        }
    }
    return request.responseText
};

function cadastrarUsuario() {
    event.preventDefault()
    let url = "http://localhost:3000/auth/register"
    let nome = document.getElementById("nomeCadastro").value
    let email = document.getElementById("emailCadastro").value
    let senha = document.getElementById("senhaCadastro").value
    console.log(nome)
    console.log(email)

    body = {
        "name": nome,
        "email": email,
        "password": senha
    }
    
    fazCadastro(url, body)
};
