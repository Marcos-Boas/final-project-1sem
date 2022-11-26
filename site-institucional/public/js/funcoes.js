// sessão
function validarSessao() {
    // aguardar();

    
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
        
    } else {
        b_usuario.innerHTML = 'visitante';
    }
}

function limparSessao() {
    
    sessionStorage.clear();
    
    window.location = "../login.html";
}



function finalizarAguardar(texto) {

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}

