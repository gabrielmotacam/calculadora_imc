//REQUISIÇÃO AJAX


var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
     
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){ //quando a resposta estiver carregada, executa uma função
        
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){ // codigo 200 = acesso bem sucedido
            erroAjax.classList.add("invisivel");
            // console.log(xhr.responseText); //texto da resposta
            var resposta = xhr.responseText;
            console.log(resposta);
            console.log(typeof resposta);

            var pacientes = JSON.parse(resposta); // JSON.parse vai analisar a string vinda do site acima, e vai converter em um objeto (pois tem forma de array)
            console.log(pacientes);
            console.log(typeof pacientes);

            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);

            });


        }else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            
            erroAjax.classList.remove("invisivel");
        }
       
        
               
    });
    xhr.send();
     
});