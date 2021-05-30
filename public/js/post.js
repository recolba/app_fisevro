function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
        if (request.status === 200)
            return alert("Usuário cadastrado com sucesso!");
        else (request.status === 400) 
            return alert("Novo Usuário não cadastrado! Tente novamente.");
    }

    return request.responseText
}

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



    fazPost(url, body)
};
