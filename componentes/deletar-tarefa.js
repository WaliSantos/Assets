const BotaoDeletar = () =>{
    const botaoDeletar = document.createElement('button');
    botaoDeletar.innerHTML = 'Deletar';

    botaoDeletar.addEventListener('click',DeletarTarefa);

    return botaoDeletar
}

const DeletarTarefa = (evento) =>{
    const botaoDeletar = evento.target;
    const paiBotaoDeletar = botaoDeletar.parentElement;

    paiBotaoDeletar.remove()

    return botaoDeletar
}

export default BotaoDeletar