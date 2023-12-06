function realizarDevolucao() {
    const nomeUsuario = document.getElementById('nomeUsuario').value;
    const livroDevolvido = document.getElementById('livroDevolvido').value;
    const dataDevolucao = document.getElementById('dataDevolucao').value;

    if (nomeUsuario && livroDevolvido && dataDevolucao) {
        alert(`Devolução realizada com sucesso para ${nomeUsuario}. Livro: ${livroDevolvido}, Data: ${dataDevolucao}`);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}