# Personal Portfolio - Isabelli Camboim

Portfólio pessoal interativo criado com HTML, CSS e JavaScript. Este projeto demonstra um site de apresentação com navegação em página única, seção de projetos dinâmica usando a API do GitHub, formulário de contato e links para redes sociais.

## 🚀 Visão Geral

O projeto é um site de portfólio que exibe:
- Página inicial com saudação e chamada para ação
- Seção "Sobre" com descrição profissional
- Seção "Skills" com hard e soft skills
- Seção "Contato" com formulário de envio
- Seção "Projetos" com perfil e repositórios GitHub carregados dinamicamente

## 🧩 Funcionalidades

- Navegação entre seções usando `data-page` e classes CSS
- Validação básica de formulário de contato
- Abertura de links para GitHub e LinkedIn em nova aba
- Consulta à API pública do GitHub para carregar:
  - nome e bio do usuário
  - número de repositórios públicos
  - lista de repositórios com nome, descrição e estrelas
- Layout responsivo e estilo moderno em tons escuros

## 🗂️ Estrutura do Projeto

- `main` — arquivo HTML principal
- `CSS/style.css` — estilos principais da página
- `js/main.js` — lógica da navegação, formulário e carregamento GitHub
- `img/` — imagens e ícones usados no site

## 🛠️ Tecnologias

- HTML
- CSS
- JavaScript
- GitHub REST API

## ✅ Como rodar o projeto

1. Abra a pasta do projeto no seu editor.
2. Abra o arquivo `main` no navegador.


## 💡 Observações

- A seção de projetos depende de conexões externas com a API do GitHub.
- Caso os projetos não apareçam, verifique se a API não está bloqueada por CORS ou limites de requisição.
- O formulário de contato atualmente exibe apenas um alerta e não envia dados para servidor.

## 📌 Recomendações

- Mantenha o arquivo `main` como entrada principal ou renomeie para `index.html`
- Use um servidor local para evitar problemas com fetch em navegadores modernos

