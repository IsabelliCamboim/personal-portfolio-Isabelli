const links = document.querySelectorAll('nav a[data-page]');
const pages = document.querySelectorAll('.page');

function irParaPagina(id) {
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

links.forEach((link) => {
    link.addEventListener('click', (e) => {

        console.log('Link clicked:', link.getAttribute('data-page'));
        e.preventDefault();

        const targetId = link.getAttribute('data-page');
        const targetPage = document.getElementById(targetId);

        if (!targetPage) return;

        pages.forEach((page) => page.classList.remove('active'));
        targetPage.classList.add('active');
    });
});

function enviarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');
    const retorno = document.getElementById('retorno');

    const nomeTratado = nome.value.trim();
    const mensagemTratada = mensagem.value.trim();

    if (!nomeTratado || !email || !mensagemTratada) {
        retorno.textContent = "Preencha todos os campos corretamente";
        retorno.style.color = "red";
        retorno.style.textAlign = "center";
        return;
    }

    if (!email.checkValidity()) {
        retorno.textContent = "Digite um e-mail válido.";
        retorno.style.color = "red";
        retorno.style.textAlign = "center";
        return;
    }

    const formData = {
        nomeTratado,
        email,
        mensagemTratada
    };

    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso!');

    // document.getElementById('formulario-contato').reset();
    nome.value = '';
    email.value = '';
    mensagem.value = '';
}


