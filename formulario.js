var botaoCalcula = document.getElementById('botaoCalcula')

botaoCalcula.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.getElementById('form')
    var nome = form.nome.value
    
    if(nome == null || nome == ""){
        alert("O campo nome precisa ser preenchido.")
        return false
    }

    var altura = form.altura.value
    if(altura == null || altura == "") {
        alert("O campo altura precisa ser preenchido.")
        return false
    }
    if(altura > 300){
        alert("A altura máxima é de 3.00 metros ( 300 cm.)")
        return false 
    }
    if(isNaN(altura)){
        alert("Digite sua altura real, sem pontos e sem vírgulas. Ex.: 175 ( 1,75m).")
        return false
    }

    var peso =  form.peso.value  
    if (peso == null || peso == "") {
       alert("O campo Peso precisa ser preenchido.")
        return false;
    }
    if(peso >= 300){
        alert("O peso máximo é de 300 kilos.")
        return false  
    }
    if(isNaN(peso)){
        alert("Digite seu peso real, sem pontos e sem vírgulas. Ex.: 85.")
        return false
    }
  
        var imc = calculaIMC(peso, altura)
        var resultado = defineResultadoIMC(imc)
        var saudar = saudacao()
    
        criarTagHTML(saudar, nome, imc, resultado)
    
        form.classList.add("d-none")
        form.reset()  
});

/*function validaNome(nome){

    if(nome == null || nome == "" || nome.lenght > 20){
        return false
    }else{
        return true
    }
}
+
function validaPeso(peso) {
    
    if (peso == null || peso == "" || peso >= 300 ) {
        return false;
    } else {
        return true
    }
}

function validaAltura(altura) {

    if(altura == null || altura == "" || altura > 300) {
        return false
    } else {
        return true

    }
}*/

function calculaIMC(peso, altura) { 
    var imc = peso / ((altura / 100) * (altura/100))

    return imc.toFixed(2)
}

function saudacao(){
    var data = new Date()
    var horario = data.getHours()
    var saudacao = 0

    if(horario < 12 && horario >= 4){
        saudacao = "Bom dia "
    }else if(horario >= 12 && horario < 18){
        saudacao ="Boa tarde "
    }else{
        saudacao="Boa noite "
    }

    return saudacao;
}

function criarTagHTML(saudar, nome, imc, resultado){
    var container = document.querySelector(".container")
    
    var nomeDisplay = document.createElement("p")
    nomeDisplay.classList.add("display-4")
    
    var imcDisplay = document.createElement("p")
    imcDisplay.classList.add("display-4")
    
    var resultadoDisplay = document.createElement("p")
    resultadoDisplay.classList.add("display-3")
    
    var nomeString = document.createTextNode(saudar + " " + nome + ",")
    var imcString = document.createTextNode("o seu IMC é de " + imc + ",")
    var resultadoString = document.createTextNode("e você está " + resultado + ".")

    nomeDisplay.appendChild(nomeString)
    imcDisplay.appendChild(imcString)
    resultadoDisplay.appendChild(resultadoString)
    container.appendChild(nomeDisplay)
    container.appendChild(imcDisplay)
    container.appendChild(resultadoDisplay)
}

function defineResultadoIMC(imc){
    var imc = imc
    var resultado 
        
    if(imc < 17)
        resultado = "muito abaixo do peso."    
    else if(imc >= 17 && imc <= 18.49 )
        resultado = "abaixo do peso"
    else if(imc >= 18.5 && imc <= 24.99)
        resultado = "com o peso normal"
    else if(imc >= 25 && imc <= 29.99)
        resultado = "acima do peso"
    else if(imc >= 30 && imc <= 34.99)
        resultado = "com Obesidade I"
    else if(imc >= 35 && imc <= 39.99)
        resultado = "com Obesidade II (Severa)"
    else if(imc >= 40)
        resultado = "com Obesidade III (Mórbida)"
   
    return resultado;
}