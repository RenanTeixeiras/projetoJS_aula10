function adicionarTarefa(){
    tarefa = document.getElementById('TAREFA').value

    div_tarefa = document.createElement('div')
    
    qtd_tarefas = document.getElementsByTagName('li')
    id_tarefa_gerada = `Tarefa ${qtd_tarefas.length + 1}`
    div_tarefa.setAttribute('id',id_tarefa_gerada)
    
    nova_tarefa = document.createElement('li');
    
    nova_tarefa.textContent = tarefa;
    
    tarefas = document.querySelector('.tarefas');
    
    tarefas.appendChild(div_tarefa)    

    botao_deletar = document.createElement('button')
    botao_deletar.setAttribute('id',id_tarefa_gerada)
    botao_deletar.textContent = 'REMOVER TAREFA'
    botao_deletar.addEventListener(
        'click' , 
        () => {botao_deletar.parentNode.remove()}
        )
    div_tarefa.appendChild(nova_tarefa)
    div_tarefa.appendChild(botao_deletar)
    input_checkbox = document.createElement('input');
    input_checkbox.setAttribute('type','checkbox');
    input_checkbox.addEventListener('change', () => {
        if (input_checkbox.checked) {
            nova_tarefa.style.textDecoration = 'line-through';
        } else {
            nova_tarefa.style.textDecoration =  'none'
        }
    } )
    div_tarefa.appendChild(input_checkbox)


}





botaoAdicionarTarefa = document.getElementById('adicionarTarefa');
botaoAdicionarTarefa.addEventListener('click', adicionarTarefa)



