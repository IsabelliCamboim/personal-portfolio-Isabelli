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

function abrirGithub() {
    window.open("https://github.com/IsabelliCamboim", "_blank");
}

function abrirLinkedin() {
    window.open("https://www.linkedin.com/in/isabelli-camboim-508725179", "_blank");
}

const usuarioGithub = "IsabelliCamboim";

async function carregarPerfilGithub() {


    const retorno = await fetch(`https://api.github.com/users/${usuarioGithub}`);


    const dados = await retorno.json();


    document.getElementById("perfil").innerHTML = `

        <div class="card">

            <h3>${dados.name}</h3>

            <p>${dados.bio}</p>

            <p>Repositórios: ${dados.public_repos}</p>

           <button onclick="abrirRepositorio('${dados.html_url}')">
                Ver perfil no github
            </button>

        </div>
    `;

}

async function carregarRepositorios(){

    const resposta = await fetch(
       `https://api.github.com/users/${usuarioGithub}/repos` 
    );

    const repositorio = await resposta.json();

    let html = "";

    repositorio.forEach(repo => {

        const data = new Date(repo.updated_at);

        const dataTratada = data.toLocaleDateString("pt-BR");

        html += `
            <div class="card">

                <h3>${repo.name}</h3>

                <p>${repo.description || "Sem descrição"}</p>

                <p> Atualizado em: ${dataTratada}</p>

                <button onclick="abrirRepositorio('${repo.html_url}')">
                    Ver Projeto
                </button>

            </div>
        `;
    });

    document.getElementById("repositorios-container").innerHTML = html;
}

function abrirRepositorio(url) {
    window.open(url, '_blank');
}

carregarPerfilGithub();
carregarRepositorios();
