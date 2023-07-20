const BotaoConclui = () =>{
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button')

    botaoConclui.innerHTML = 'Concluir';

    botaoConclui.addEventListener('click',ConcluirTarefa)

    return botaoConclui

}

const ConcluirTarefa = (evento)=>{
    const botaoConlui = evento.target;
    const paiDoBotaoConlui = botaoConlui.parentElement;

    paiDoBotaoConlui.classList.toggle('done');
}

export default BotaoConclui