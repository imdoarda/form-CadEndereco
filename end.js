'use strict'; //Modo Restrito
//Consumindo API de CEP, do ViaCep
// https://viacep.com.br/

//Função para limpar o formulário
//Arrow function
const limparFormulario = () =>{
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}
//antes de preencher outro cep essa função limpa o formulário

//Preenche os campos relacionados ao CEP...
const preencherForumulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}
//

//Verifica se o CEP é válido...
const eNumero = (numero) => /^[0-9]+$/.test(numero); //Expressão Regular
// É possível testar e entender a RegEx em https://www.regexpal.com/
//conferir se é só número, + é pra marcar q o numero pode ser marcado uma ou mais vezes, cifrão é pra mostrar q encerrou, ponto de encerramento, função regular
const cepValido = (cep) => cep.length == 8 && eNumero(cep);
//length é tamanho

//Função para consumo de API da Via CEP
const pesquisarCep = async() => {
    limparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    
    if(cepValido(cep.value)){
        const dados = await fetch(url); //await = esperar fetch = promessa
        const addres = await dados.json(); // retorna dados no formato JSON
        
        // hasOwnProperty  retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão
        if(addres.hasOwnProperty('erro')){ 
            // document.getElementById('rua').value = 'CEP não encontrado!';
            alert('CEP não encontrado!');
            //se tiver erro
        }else {
            preencherForumulario(addres);
        }
        //se não tiver erro
    }else{
        // document.getElementById('rua').value = 'CEP incorreto!';
        alert('CEP incorreto!');
    } 
}

//Adicionando um evento DOM, no input CEP... 1- passo
//dom = hierarquia de elementos
document.getElementById('cep').addEventListener('focusout', pesquisarCep);