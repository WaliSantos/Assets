import BotaoConclui from './componentes/concluir-tarefa.js'
import BotaoDeletar from './componentes/deletar-tarefa.js'
    
    const PegarValorInput= (evento) =>{
    evento.preventDefault();
    
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    

    const lista = document.querySelector('[data-list]');
    const criarItem = document.createElement('li');
    const conteudo = `<p class="content">${valor}</p>`;
    
    criarItem.innerHTML = conteudo;
    criarItem.classList.add('task');


    lista.appendChild(criarItem);
    criarItem.appendChild(BotaoConclui());
    criarItem.appendChild(BotaoDeletar());

    input.value = " "
}


const button = document.querySelector('[data-form-button]');

button.addEventListener('click', PegarValorInput);

