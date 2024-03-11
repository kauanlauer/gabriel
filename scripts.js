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

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("galeria-item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
