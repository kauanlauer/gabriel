document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', function () {
        const password = prompt('Digite a senha:'); // Solicitação de senha

        // Verifica se a senha está correta (substitua 'suaSenha' pela senha desejada)
        if (password === '123') {
            window.location.href = 'https://mcsistema.netlify.app/'; // Redireciona para o site após a autenticação
        } else {
            alert('Senha incorreta. Tente novamente.');
        }
    });
});
