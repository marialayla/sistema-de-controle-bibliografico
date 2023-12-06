document.getElementById('btnEscolherLivro').addEventListener('click', function() {
    alert('Escolha seu livro desejado!');
});

document.getElementById('btnEmprestimo').addEventListener('click', function() {
    alert('Empréstimo virtual realizado. Confira seu comprovante.');
});

document.getElementById('btnDevolucao').addEventListener('click', function() {
    let dataDevolucao = prompt('Informe a data de devolução (DD/MM/AAAA):');
    alert(`Devolução registrada. Data de Devolução: ${dataDevolucao}`);
});

document.getElementById('btnRelatorio').addEventListener('click', function() {
    alert('Relatório gerado. Confira suas operações recentes.');
});