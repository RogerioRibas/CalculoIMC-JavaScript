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

        
        form.classList.add("d-none")
       
        var divResultado = document.getElementById("divResultado")
        divResultado.classList.remove("d-none")
        criarTagHTML(saudar, nome, imc, resultado)
        console.log(imc)
        

        var divDropdown = document.getElementById("divDropdown")
        divDropdown.classList.remove("d-none")
        
        var botaoVoltar = document.getElementById("botaoVoltar")
        botaoVoltar.classList.remove("d-none")

        var divDropdown = document.getElementById("divDropdown")
        divDropdown.classList.remove("d-none")

        dropdownResultado(imc)
        

        form.reset()  
});

var botaoVoltar = document.getElementById("botaoVoltar")
botaoVoltar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.getElementById('form')
    
    var divResultado = document.getElementById("divResultado")
    while (divResultado.firstChild) {
        divResultado.removeChild(divResultado.firstChild);
    }
   
    form.classList.remove("d-none")
           
    var divDropdown = document.getElementById("divDropdown")
    divDropdown.classList.add("d-none")

    removeTextoDropdown()

    botaoVoltar.classList.add("d-none")

});

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
    var divResultado = document.querySelector("#divResultado")
    
    var nomeDisplay = document.createElement("p")
    nomeDisplay.classList.add("display-4")
  
    var imcDisplay = document.createElement("p")
    imcDisplay.classList.add("display-4")
  
    var resultadoDisplay = document.createElement("p")
    resultadoDisplay.classList.add("display-4")

    var nomeString = document.createTextNode(saudar + " " + nome + ",")
    var imcString = document.createTextNode("o seu IMC é de " + imc + ",")
    var resultadoString = document.createTextNode("e você está " + resultado + ".")

    nomeDisplay.appendChild(nomeString)
    imcDisplay.appendChild(imcString)
    resultadoDisplay.appendChild(resultadoString)
    divResultado.appendChild(nomeDisplay)
    divResultado.appendChild(imcDisplay)
    divResultado.appendChild(resultadoDisplay)
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

function removeTextoDropdown(){
    var dropResultado1 = document.getElementById("dropResultado1").innerHTML=""
    var dropResultado2 = document.getElementById("dropResultado2").innerHTML=""
    var dropResultado3 = document.getElementById("dropResultado3").innerHTML=""
}

function dropdownResultado(resultado){
    var dropResultado1 = document.getElementById("dropResultado1")
    var dropResultado2 = document.getElementById("dropResultado2")
    var dropResultado3 = document.getElementById("dropResultado3")
    var stringResultado1
    var stringResultado2
    var stringResultado3
     
    if(resultado <= 16.9 ){
        stringResultado1 = document.createTextNode("- Queda de cabelo")
        stringResultado2 = document.createTextNode("- Infertilidae")
        stringResultado3 = document.createTextNode("- Ausência Menstrual")
        
        dropResultado1.appendChild(stringResultado1)
        dropResultado2.appendChild(stringResultado2)
        dropResultado3.appendChild(stringResultado3)
    
    }else if(resultado >= 17 && resultado <= 18.4 ){
        stringResultado1 = document.createTextNode("- Fadiga")
        stringResultado2 = document.createTextNode("- Stress")
        stringResultado3 = document.createTextNode("- Ansiedade")
        
        dropResultado1.appendChild(stringResultado1)
        dropResultado2.appendChild(stringResultado2)
        dropResultado3.appendChild(stringResultado3)

    }else if(resultado >= 18.5 && resultado <= 24.9 ){
        stringResultado1 = document.createTextNode("- Menos risco de doenças")
        stringResultado2 = document.createTextNode("cardíacas e vasculares.")
        stringResultado3 = document.createTextNode("Parabéns :D")
        
        dropResultado1.appendChild(stringResultado1)
        dropResultado2.appendChild(stringResultado2)
        dropResultado3.appendChild(stringResultado3)
    
    }else if(resultado >= 25 && resultado <= 29.9 ){
        stringResultado1 = document.createTextNode("- Fadiga")
        stringResultado2 = document.createTextNode("- Má Circulação")
        stringResultado3 = document.createTextNode("- Varizes")
        
        dropResultado1.appendChild(stringResultado1)
        dropResultado2.appendChild(stringResultado2)
        dropResultado3.appendChild(stringResultado3)
    
    }else if(resultado >= 30 && resultado <= 34.9 ){
        stringResultado1 = document.createTextNode("- Diabetes")
        stringResultado2 = document.createTextNode("- Infarto")
        stringResultado3 = document.createTextNode("- Angina")
        
        dropResultado1.appendChild(stringResultado1)
        dropResultado2.appendChild(stringResultado2)
        dropResultado3.appendChild(stringResultado3)
   
    }else if(resultado >= 35 && resultado <= 40 ){
        stringResultado1 = document.createTextNode("- Apneia do Sono")
        stringResultado2 = document.createTextNode("- Falta de ar")
        stringResultado3 = document.createTextNode("- Doenças Coronárias")
        
        dropResultado1.appendChild(stringResultado1)
        dropResultado2.appendChild(stringResultado2)
        dropResultado3.appendChild(stringResultado3)
   
    }else if(resultado > 40 ){
        stringResultado1 = document.createTextNode("- Refluxo")
        stringResultado2 = document.createTextNode("- Escaras")
        stringResultado3 = document.createTextNode("- AVC")
        
        dropResultado1.appendChild(stringResultado1)
        dropResultado2.appendChild(stringResultado2)
        dropResultado3.appendChild(stringResultado3)
    }
}