function alterarStatus(id) {
    let jogoEscolhido = document.getElementById(`game-${id}`);
    let imagem = jogoEscolhido.querySelector('.dashboard__item__img');
    let botao = jogoEscolhido.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')){

        let confirmarDevolucao = prompt("Tem certeza que quer devolver? Y para sim o N para cancelar devolução");

        if (confirmarDevolucao == "Y" || confirmarDevolucao == "y"){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = "Alugar";
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return')
        botao.textContent = "Devolver";
    }

}

