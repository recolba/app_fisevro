function getUsers(){

    const url = "http://localhost:3000/fisevros/users"

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);

    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

}