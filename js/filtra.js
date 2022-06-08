var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){    
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];            
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            // criando um filtro com expressão regular (RegExp)
            var expressao = new RegExp(this.value,"i"); //'i'= insensitive, busca tanto maiusculas qnto minusculas
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");//atribui a classe invisivel feita no CSS para esse condicional
            }else {
                paciente.classList.remove("invisivel");
            }
        }

    }else{
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});