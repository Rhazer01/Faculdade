// ==========================================================================
// CONTROLE DE ALTO CONTRASTE (Padrão e-MAG / Gov.br)
// ==========================================================================

function alternarAltoContraste() {
    const body = document.body;
    const html = document.documentElement;
    const ativo = body.classList.toggle('alto-contraste');
    html.classList.toggle('alto-contraste', ativo);

    // Salva a preferência do usuário no navegador
    localStorage.setItem('alto-contraste', ativo ? 'true' : 'false');
}

// Inicializa a preferência do usuário ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
    const estadoSalvo = localStorage.getItem('alto-contraste');
    if (estadoSalvo === 'true') {
        document.body.classList.add('alto-contraste');
        document.documentElement.classList.add('alto-contraste');
    }

    // Seleciona os botões/links de alto contraste em todas as páginas
    const botoes = document.querySelectorAll('#btn-contraste, [title="Alto Contraste"], [data-toggle="contraste"]');

    botoes.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alternarAltoContraste();
        });
    });
});
