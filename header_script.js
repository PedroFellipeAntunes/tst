// Carrega o header dinamicamente
fetch("header.html")
    .then(response => response.text())
    .then(data => {
        // Insere o HTML do header na página
        document.getElementById("header").innerHTML = data;
        
        // Agora que o conteúdo foi carregado, podemos adicionar o evento de clique
        const logoutButton = document.querySelector('.user-options');
        if (logoutButton) {
            logoutButton.addEventListener('click', function() {
                // Redireciona para a página index.html
                window.location.href = "index.html";
            });
        }
    })
    .catch(error => console.error('Erro ao carregar o header:', error));
