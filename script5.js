document.addEventListener('DOMContentLoaded', function () {
    const mostrarMaisBtn = document.getElementById('mostrarMaisBtn');
    const informacoesAdicionais = document.getElementById('informacoesAdicionais');

    mostrarMaisBtn.addEventListener('click', function () {
        if (informacoesAdicionais.style.display === 'none') {
            informacoesAdicionais.style.display = 'block';
            mostrarMaisBtn.textContent = 'Mostrar Menos';
        } else {
            informacoesAdicionais.style.display = 'none';
            mostrarMaisBtn.textContent = 'Mostrar Mais';
        }
    });
});