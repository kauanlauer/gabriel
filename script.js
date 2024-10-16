document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    alert(`Obrigado pelo seu contato, ${nome}!`);
    
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
});