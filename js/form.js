
//criando evento quando clicar no botão
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){

    //evitar que a página recarregue quando clicar no botão (comportamento padrão)
    //que é recarregar a página e enviar o form
    //não queremos enviar formulário, queremos apenas adicionar dados na tabela...
    event.preventDefault();
     
    
    var form = document.querySelector("#form-adiciona");

    //printar a var form.name.value (todo input tem name). Essa é a forma de acessar a caixa de input
    //value pega o valor colocado dentro do input
    // console.log(form.altura.value);
   

    //pega os dados informados nos campos de input e printa no console
    
    // var nome = form.nome.value;
    // var peso = form.peso.value;
    // var altura = form.altura.value;
    // var gordura = form.gordura.value;
    // console.log(nome);
    // console.log(peso);
    // console.log(altura);
    // console.log(gordura);
    
    //Substituido pela função que se segue...

    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    // cria variável erro e coloca a condição de que se o tamanho da string for maior que zero (pois a string seria vazia se estivesse correto)
    //então printa no console uma mensagem de erro
    var erros = validaPaciente(paciente);
    
    if (erros.length > 0){ // vai ser necessário mudar essa parte        
        exibeMensagensDeErro(erros);
        return; //return sai de dentro da função principal
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    
    
    //cria um elemento desejado no html(criando uma linha na tabela)
    var pacienteTr = document.createElement("tr");

    //Se o peso não for válido, ele sai imediatamente da função adicionar por causa do 'return'
    // if(!validaPaciente(paciente)){
    //     console.log("Paciente inválido");
    //     return;
    // }


    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    
    //acessa o id tabela-pacientes do html e adiciona um elemento dentro dele
    //adiciona o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

  // função para criar uma td (células dentro da tr)
function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    
    return td;

}

//atribui o conteudo da célula ao que foi posto no input lá na aplicação
// nomeTd.textContent = nome;
// pesoTd.textContent = peso;
// alturaTd.textContent = altura;
// gorduraTd.textContent = gordura;

//utiliza a função criada em calcula-imc.js
imcTd.textContent = calculaImc(peso,altura);

//appendChild() adiciona elementos dentro de elementos hierarquicamente superiores
pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);


function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    // cria as TD's e adiciona dentro da TR
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    //retorna a TR
    return pacienteTr;

}

function obtemPacienteDoFormulario(form){
    //criar um objeto em JS. Usa-se chaves e : da seguinte forma:
    
    var paciente = {
        //propriedades do objeto são representadas com : e separados com ,
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    //retorna o valor dentro da variável paciente e encerra a função
    return paciente;
}



function validaPaciente(paciente){

    var erros = []; //cria uma array


    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido!"); // .push joga a informação dentro do parêntesis pra dentro do array erros
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é Inválida!");
    }

    if(paciente.nome.length == 0){
        erros.push("ERRO: Nome em branco!");
    }

    if(paciente.gordura.length == 0){
        erros.push("ERRO: Gordura em branco!");
    }

    if(paciente.peso.length == 0){
        erros.push("ERRO: Peso em branco!");
    }

    if(paciente.altura.length == 0){
        erros.push("ERRO: Altura em branco!");
    }
    return erros;
}
function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = "";
    // umas das formas de percorrer cada erro dentro da array é:
    // for (i = 0; i < erros.length; i++){
    //     var erro = erros[i];

    //existe a forma forEach que ja faz automaticamente sem precisar dizer os parâmetros:

    erros.forEach(function(erro){ /*item de interação do array -- ´pode ser qualquer nome*/
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li); //coloca a li dentro da ul
    }); //fechamento da function
}

// quando o if ocupa apenas uma linha, é possível montar tudo em linha reta
//ex: if(!validaPeso(paciente.peso)) erros.push("Peso é inválido!")
//só precisa tirar as chaves!

