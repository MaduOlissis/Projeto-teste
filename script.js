const body = document.body;

// Função para alternar entre temas
function toggleTheme() {
    body.classList.toggle('dark');
    updateThemeButtonText();
}

// Função para atualizar o texto do botão de alternância
function updateThemeButtonText() {
    const themeToggleButton= document.querySelector("#btn")
    if (body.classList.contains('dark')) {
        themeToggleButton.textContent = 'Mudar para Tema Claro';
    } else {
        themeToggleButton.textContent = 'Mudar para Tema Escuro';
    }
}

// Função para atualizar a data e hora
function updateDateTime() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    };
     document.getElementById('data-hora').textContent = now.toLocaleString('pt-BR', options);
}

setInterval(updateDateTime, 1000);  
document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Aqui você pode adicionar lógica para enviar os dados para um servidor
    // Por enquanto, apenas exiba uma mensagem de sucesso
    document.getElementById('mensagem-status').textContent = 
        `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;

    // Limpa o formulário
    this.reset();
});

 



