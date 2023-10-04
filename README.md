
# ÍNDICE
 
°[Descrição](#descri%C3%A7%C3%A3o)  
°[Introdução](#introdu%C3%A7%C3%A3o)  
°[Funcionalidades](#funcionalidades)  
°[Tecnologias Utilizadas](#tecnologias-utilizadas)  
°[Fontes Consultadas](#fontes-consultadas)  
°[Autores](#autores)  

## Formulário de endereço

### TELA INICIAL
![image](https://github.com/imdoarda/form-CadEndereco/assets/127868962/3148a2f5-e269-4831-ab38-0d56f81c7fd7)


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

     
  Essa função faz com que sempre que for cadastrar um novo endereço, o formulário apague dos campos o endereço antigo.  

  
  ![gif](https://github.com/imdoarda/form-CadEndereco/assets/127868962/c45aafca-b4dc-459d-8842-2bc466a0ddd3)

  


      const preencherForumulario = (endereco) =>{
       document.getElementById('rua').value = endereco.logradouro;
       document.getElementById('bairro').value = endereco.bairro;
       document.getElementById('cidade').value = endereco.localidade;
       document.getElementById('estado').value = endereco.uf;
      }  

      

   Nessa função, o código faz com que o formulário seja preenchido automaticamente, quando inserido o CEP.  

   
   
   ![gif](https://github.com/imdoarda/form-CadEndereco/assets/127868962/8d3f3110-2fb0-438e-86f6-48d7638c821b)  


   



        //Verifica se o CEP é válido...
      const eNumero = (numero) => /^[0-9]+$/.test(numero); //Expressão Regular
      // É possível testar e entender a RegEx em https://www.regexpal.com/
      //conferir se é só número, + é pra marcar q o numero pode ser marcado uma ou mais vezes, cifrão é pra mostrar q encerrou, ponto de encerramento, função regular
      const cepValido = (cep) => cep.length == 8 && eNumero(cep);
      //length é tamanho


Essa função é para checar se o tamanho do CEP está correto e se é apenas números.



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
               alert('CEP incorreto!');
        } 
      }  

      
  Já essa última função é um pouco mais complexa, "async()" faz com que não precise ser seguida uma ordem exata e, como escrito nos comentários, é uma função para o consumo de API da Via CEO, ou seja, o código vai "checar" com a Via CEP se o CEP inserido é realmente válido. Caso o CEP não seja válido, o site retornará uma mensagem de "CEP não encontado" senão, os campos de endereço são preenchidos automaticamente, como mostrado acima.  

  ![tela3](https://github.com/imdoarda/form-CadEndereco/assets/127868962/11f5abe2-c767-46c1-839d-f16ec804c4af)  


### Tecnologias utilizadas


* ``CSS3``
* ``VSCODE``
*  ``Bootstrap5``
*  ``GitHub``
*  ``Git``
* ``API Via CEP``
* ``Regex Pal``

## Fontes Consultadas

[Regex Pal](https://www.regexpal.com/) - Testando funções

[Via CEP]( https://viacep.com.br/) - Consulte CEPs de todo o Brasil

[Alura](https://www.alura.com.br/artigos/escrever-bom-readme) - Como escrever um README incrível no seu Github


## Autores

[<img loading="lazy" src="https://avatars.githubusercontent.com/u/127868962?v=4" width=115><br><sub>Maria Eduarda Mendes</sub>](https://github.com/imdoarda)

