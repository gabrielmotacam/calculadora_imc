
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
    console.log(paciente);

    
    //cria um elemento desejado no html(criando uma linha na tabela)
    var pacienteTr = document.createElement("tr");
    
    //Se o peso não for válido, ele sai imediatamente da função adicionar por causa do 'return'
    if(!validaPaciente(paciente)){
        console.log("Paciente inválido");
        return;
    }


    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    //atribui o conteudo da célula ao que foi posto no input lá na aplicação
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    //utiliza a função criada em calcula-imc.js
    imcTd.textContent = calculaImc(peso,altura);

    //appendChild() adiciona elementos dentro de elementos hierarquicamente superiores
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);



    //acessa o id tabela-pacientes do html e adiciona um elemento dentro dele
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);


});

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
    if(validaPeso(paciente.peso)){
        return true;
    }else {
        return false;
    }
}