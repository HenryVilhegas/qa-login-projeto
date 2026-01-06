document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const cpf = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;
    const mensagemErro = document.getElementById("mensagemErro");

    // Usuário fake (simulação)
    const cpfValido = "12345678900";
    const senhaValida = "1234";

    if (cpf === "" || senha === "") {
        mensagemErro.textContent = "Preencha todos os campos.";
        return;
    }

    if (cpf === cpfValido && senha === senhaValida) {
        alert("Login realizado com sucesso!");
    } else {
        mensagemErro.textContent = "CPF ou senha inválidos.";
    }
});
