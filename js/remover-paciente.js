var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    // console.log(event.target); // printa quem foi o alvo do click
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode.classList.add("fadeOut"); // remover o tr ao invés dos td... remover o pai dos TD(.parentNode)

    setTimeout(function(){ //pede para o JS dar uma pausa em milisegundos até fazer a proxima ação dentro da função
        event.target.parentNode.remove(); 
    }, 600); //esperar 500 milissegundos
    


// é possível fazer tudo em uma linha:

// event.target.parentNode.remove();


});



//adiciona evento de click --- quando tiver duplo click ("dblclick")
// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         console.log("fui clicado com duplo click");
//         this.remove();// remove o paciente que foi clicado duas vezes (this -- está atrelado a quem acionou o evento)
//     });

// });