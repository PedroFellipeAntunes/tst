document.addEventListener("DOMContentLoaded", function () {
    // Definição de usuário e senha genéricos
    const usuarioCorreto = "admin";
    const senhaCorreta = "123456";

    // Captura o formulário
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Obtém os valores dos inputs
        const usuario = document.getElementById("usuario").value.trim();
        const senha = document.getElementById("senha").value.trim();

        // Verifica se os dados são corretos
        if (usuario === usuarioCorreto && senha === senhaCorreta) {
            window.location.href = "home.html"; // Redireciona para outra página
        } else {
            alert("Usuário ou senha inválidos!");
        }
    });
});