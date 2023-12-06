document.addEventListener('DOMContentLoaded', function () {
    const relatorioForm = document.getElementById('relatorioForm');

    relatorioForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Relatório gerado com sucesso!');
    });
});
