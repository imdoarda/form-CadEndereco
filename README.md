
# ÍNDICE
 
°[Descrição](#descri%C3%A7%C3%A3o)  
°[Introdução](#introdu%C3%A7%C3%A3o)  
°[Funcionalidades](#funcionalidades)  
°[Tecnologias Utilizadas](#tecnologias-utilizadas)  
°[Fontes Consultadas](#fontes-consultadas)  
°[Autores](#autores)  

## Descrição

O formulário de endereço serve para realizar o cadastro de um certo endereço e, quando inserido o CEP, campos como "rua", "bairro", "cidade" e "estado" são preenchidos automaticamente.

    
## Introdução

 Neste projeto aprendemos a utilizar Arrow Function fazendo um formulário de endereço.  No formulário, quando se digita o CEP de alguma rua, acontece o preenchimento automático de outros campos de endereço. Para que isso acontecesse, utilizei várias funções do tipo Arrow.

## Funcionalidades

Possuí funcionalidade inicial de ajudar os alunos a aprofundarem o conhecimento em Arrow Function, utilizando os seguintes códigos:

    const limparFormulario = () =>{
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

    const preencherForumulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

    const eNumero = (numero) => /^[0-9]+$/.test(numero);

    const cepValido = (cep) => cep.length == 8 && eNumero(cep);

    const pesquisarCep = async() => {
    limparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    
    if(cepValido(cep.value)){
        const dados = await fetch(url); 
        const addres = await dados.json(); 
        
        if(addres.hasOwnProperty('erro')){ 
            alert('CEP não encontrado!');
        }else {
            preencherForumulario(addres);
        }
    }else{
        alert('CEP incorreto!');
    } 
}

### Tecnologias utilizadas


* ``CSS3``
* ``VSCODE``
*  ``Bootstrap5``
*  ``GitHub``
*  ``Git``
* ``API``
* ``Regex Pal``

## Fontes Consultadas

[Regex Pal](https://www.regexpal.com/) - Testando funções

[Via CEP]( https://viacep.com.br/) - Consulte CEPs de todo o Brasil


## Autores

Maria Eduarda Mendes 