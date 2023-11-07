// EX 1

function dividirNumeros(){
    let n1 = Number(document.querySelector('#numero-1').value);
    let n2 = Number(document.querySelector('#numero-2').value);

    if (n1 != '' && n2 != ''){
        document.querySelector('#resultado-divisao').value = n1 / n2
    }else{
        alert('Preencha todos os campos!');
    }
        
    
}
document.querySelector('#botao-divisao').addEventListener('click', dividirNumeros);


// EX 2

function gerenciarContatos(){
    let nome = document.querySelector('#nome').value;
    let telefone = document.querySelector('#telefone').value;
    let tabelaLista = document.querySelector('#tabela-contatos tbody');
    let novaLinha = document.createElement('tr');

    
    if (nome != '' && telefone != ''){
    let colunaNome = document.createElement('td');
    colunaNome.textContent = nome;

    let colunaTelefone = document.createElement('td');
    colunaTelefone.textContent = telefone

    let colunaAcoes = document.createElement('td');
    let botaoRemover = document.createElement('Button');
    botaoRemover.textContent = 'Excluir';
    botaoRemover.classList.add('btn');
    botaoRemover.classList.add('btn-danger');
    botaoRemover.onclick = function () {
        tabelaLista.removeChild(novaLinha);
    }

    colunaAcoes.appendChild(botaoRemover);

    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaTelefone);
    novaLinha.appendChild(colunaAcoes);

    tabelaLista.appendChild(novaLinha);

    document.querySelector('#nome').value = '';
    document.querySelector('#telefone').value = '';
    }else{
        alert('Preencha todos os campos!');
    }

}
document.querySelector('#botao-cadastrar-contato').addEventListener('click',gerenciarContatos);


// EX 3 

function adicionarElementos(){
    let formato = document.querySelector('#forma').value;
    let cor = document.querySelector('#cor').value;
    
    
    


}
document.querySelector('#botao-adicionar-elemento').addEventListener('click',adicionarElementos);