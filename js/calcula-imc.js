
//.querySelector --> ferramenta para buscar uma informação desejada
var titulo = document.querySelector(".titulo");
titulo.textContent = "Calculadora IMC";

var titulo2 = document.querySelector(".titulo2");
titulo2.textContent = "Exemplos"


//querySelectAll busca todos os elementos relacionados à pesquisa, em todas as linhas. Diferentemente do querySelector (que só busca uma linha)
var pacientes = document.querySelectorAll(".paciente")

//for (cria variável com valor = 0; estabelece a condição; incrementa)
for (var i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso= tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdGordura = paciente.querySelector(".info-gordura");
    var gordura = tdGordura.textContent;
    
    
    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    // //condição peso -- ! significa 'não'// inverte valores... se era true, se tornará false
    if (!pesoEhValido){
        console.log("peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
        //é bom tratar de estilização no CSS, então se criou uma classe para linhas com erro de peso ou altura
        //classList --> retorna uma lista de classes que a var possui.
        //classList.add --> adiciona uma classe à var
        paciente.classList.add("paciente-invalido");
    }
    
    // Condição Altura -- ! inverte valores
    if (!alturaEhValida){
        console.log("altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida!";

        //classList --> retorna uma lista de classes que a var possui.
        //classList.add --> adiciona uma classe à var
        paciente.classList.add("paciente-invalido") ;
    }
    if (alturaEhValida && pesoEhValido){
        // var imc = tdImc.textContent = peso /(altura * altura);

        //.toFixed(2) --> apresenta apenas duas casas decimais (escolher o número de casas)
        // tdImc.textContent = imc.toFixed(2);
        tdImc.textContent = calculaImc(peso,altura); //substitui o código acima pela função calculaImc
    }
    if (alturaEhValida == false && pesoEhValido == false){
         tdImc.textContent = "Altura e Peso Inválidos";
    }
    
}

//var.addEventListener --> adiciona eventos. Neste caso faz o JS perceber quando algo é clicado.
//quando alguém clica no título, aparece no console a mensagem da função

// titulo.addEventListener("click", mostraMensagem);
//quer capturar clicks, e depois aplica a function


//para criar uma função, é só escrever inicialmente'function' e nomeá-la, como mostrado abaixo
// function mostraMensagem(){
//     console.log("Olá, eu fui clicado!");
// }

function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
function validaPeso(peso){
    if(peso >= 0 && peso < 500){
        return true;
    }else{
        return false;
    }

}
function validaAltura(altura){
    if(altura >=0 && altura <= 3.0){
        return true;
    }else {
        return false;

    }
}