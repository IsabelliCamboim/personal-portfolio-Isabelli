class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <h1>Meu Portfólio</h1>
                <nav>
                    <a href="#inicio">Início</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#skills">Skills</a>
                    <a href="#contato">Contato</a>
                </nav>
            </header>
        `;
    }       
}

customElements.define('site-header', SiteHeader);   