var botaoCalcula = document.getElementById('botaoCalcula')
botaoCalcula.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.getElementById('form')
    var nome = form.nome.value
    var altura = form.altura.value
    var peso =  form.peso.value 

    //Valida os campos do form
    var nomeValid = validaNome(nome)
    var alturaValid = validaAltura(altura)
    var pesoValid = validaPeso(peso)

    if(nomeValid && alturaValid && pesoValid){
        
        //Calcula o IMC e define o resultado do teste
        var imc = calculaIMC(peso, altura)
        var resultado = defineResultadoIMC(imc)

        var pesoIdeal = calculaPesoIdeal(peso, altura, imc)
    
        var saudar = saudacao()

        //Oculta o formulário
        form.classList.add("d-none")
        
        //Torna visivel a div de Resultado
        var divResultado = document.getElementById("divResultado")
        divResultado.classList.remove("d-none")
        
        criarTagHTML(saudar, nome, imc, resultado, pesoIdeal, peso)

        //Torna visível o botão de refazer teste e o Dropdown
        var divDropdown = document.getElementById("divDropdown")
        var botaoVoltar = document.getElementById("botaoVoltar")
        divDropdown.classList.remove("d-none")
        botaoVoltar.classList.remove("d-none")

        //Cria e inseri texto dos itens no Dropdown
        dropdownResultado(imc)
        
        form.reset()  
    }
});