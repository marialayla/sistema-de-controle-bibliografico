function realizarEmpréstimoVirtual() {
    const nomeUsuario = document.getElementById('nomeUsuario').value;
    const livroSelecionado = document.getElementById('livroSelecionado').value;

    if (nomeUsuario && livroSelecionado) {
        alert(`Empréstimo virtual realizado para ${nomeUsuario}. Livro: ${livroSelecionado}`);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}