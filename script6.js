document.addEventListener('DOMContentLoaded', function () {
    const relatorioForm = document.getElementById('cadastro');

    relatorioForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Cadastro gerado com sucesso!');
    });
});
