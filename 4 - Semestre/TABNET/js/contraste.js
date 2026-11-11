// ==========================================================================
// CONTROLE DE ACESSIBILIDADE: ALTO CONTRASTE & VLIBRAS (e-MAG / Gov.br)
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
    // 1. Estado salvo do Alto Contraste
    const estadoSalvo = localStorage.getItem('alto-contraste');
    if (estadoSalvo === 'true') {
        document.body.classList.add('alto-contraste');
        document.documentElement.classList.add('alto-contraste');
    }

    // 2. Clique no botão de Alto Contraste
    const botoesContraste = document.querySelectorAll('#btn-contraste, [title="Alto Contraste"], [data-toggle="contraste"]');
    botoesContraste.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alternarAltoContraste();
        });
    });

    // 3. Clique no botão de VLibras na navbar (abre o widget oficial)
    const botoesVlibras = document.querySelectorAll('#btn-vlibras, [title="VLibras"], [title="Vlibras"]');
    botoesVlibras.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const accessBtn = document.querySelector('[vw-access-button]');
            if (accessBtn) {
                accessBtn.click();
            }
        });
    });
});
