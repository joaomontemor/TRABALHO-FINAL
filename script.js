const botaoTema = document.getElementById('botao-tema');

function alternarTema() {
    document.body.classList.toggle('escuro');
    if (document.body.classList.contains('escuro')) {
        botaoTema.textContent = 'Modo claro';
    } else {
        botaoTema.textContent = 'Modo escuro';
    }
}

botaoTema.addEventListener('click', alternarTema);

const formulario = document.getElementById('formulario');
if (formulario) {
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();
        const resposta = document.getElementById("resposta");

        if (nome === "" || email === "" || mensagem === "") {
            resposta.textContent = "Preencha todos os campos.";
            resposta.style.color = "red";
        }else {
            resposta.textContent = "Mensagem enviada! Obrigado, " + nome + ".";
            resposta.style.color = "green";
            formulario.reset();
        }
    });
}