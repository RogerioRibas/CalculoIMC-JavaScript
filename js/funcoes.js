// Funções de validação
function validaAltura(altura){
  
    var msgErro = document.getElementById("msgErroAltura")

    if(altura == null || altura == ""){      
        msgErro.classList.remove("d-none")
        document.getElementById("msgErroAltura").innerHTML="O campo altura precisa ser preenchido."
        return false;
    
    }else if(altura > 300){
        msgErro.classList.remove("d-none")
        document.getElementById("msgErroAltura").innerHTML="A altura máxima é de 3.00 metros ( 300 cm.)"
        return false ;
    
    }else if(isNaN(altura)){
        msgErro.classList.remove("d-none")
        document.getElementById("msgErroAltura").innerHTML="Digite sua altura real, sem pontos e sem vírgulas. Ex.: 175 ( 1,75m)."
        return false;
    
    }else{
        msgErro.classList.add("d-none")
        return true;
    }
}

function validaNome(nome){
  
    var msgErro = document.getElementById("msgErroNome")

    if(nome == null || nome == ""){
        msgErro.classList.remove("d-none")
        document.getElementById("msgErroNome").innerHTML="O campo nome precisa ser preenchido."
        return false;
    }else{
        msgErro.classList.add("d-none")
        return true;
    }
}

function validaPeso(peso){
   
    var msgErro = document.getElementById("msgErroPeso")

    if (peso == null || peso == "") {
        msgErro.classList.remove("d-none")
        document.getElementById("msgErroPeso").innerHTML="O campo Peso precisa ser preenchido."
         return false;
    
    }else if(peso >= 300){
        msgErro.classList.remove("d-none")
        document.getElementById("msgErroPeso").innerHTML="O peso máximo é de 300 kilos."
         return false;
    
    }else if(isNaN(peso)){
        msgErro.classList.remove("d-none")
        document.getElementById("msgErroPeso").innerHTML="Digite seu peso real, sem pontos e sem vírgulas. Ex.: 85."
         return false;
    
    }else{
        msgErro.classList.add("d-none")
        return true;
    }
}



//Funções de cálculo do IMC
function calculaIMC(peso, altura) { 
    var imc = peso / ((altura / 100) * (altura/100))

    return imc.toFixed(2);
}

function defineResultadoIMC(imc){
    var imc = imc
    var resultado 
        
    if(imc < 17)
        resultado = "muito abaixo do peso.";    
    
    else if(imc >= 17 && imc <= 18.49 )
        resultado = "abaixo do peso";

    else if(imc >= 18.5 && imc <= 24.99)
        resultado = "com o peso normal";

    else if(imc >= 25 && imc <= 29.99)
        resultado = "acima do peso";

    else if(imc >= 30 && imc <= 34.99)
        resultado = "com Obesidade I";

    else if(imc >= 35 && imc <= 39.99)
        resultado = "com Obesidade II (Severa)";

    else if(imc >= 40)
        resultado = "com Obesidade III (Mórbida)";
   
    return resultado;
}

function calculaPesoIdeal(peso, altura, imc){
    var pesoIdeal = peso
    var imcIdeal = imc
   
    
    if(imcIdeal >= 18.50 && imcIdeal <= 24.99){
        return pesoIdeal

    }else if(imcIdeal >= 25){       
        
        while(imcIdeal >= 25){
            pesoIdeal--
            imcIdeal = calculaIMC(pesoIdeal, altura)   
        }
        return pesoIdeal
    
    }else {        
        while(imcIdeal <= 18.49){
            pesoIdeal++
            imcIdeal = calculaIMC(pesoIdeal, altura)
            
        }
        return pesoIdeal
    }

}



//Funções de Manipulação do DOM

function saudacao(){
    var data = new Date()
    var horario = data.getHours()
    var saudacao = 0

    if(horario < 12 && horario >= 4){
        saudacao = "Bom dia ";
    
    }else if(horario >= 12 && horario < 18){
        saudacao ="Boa tarde ";
    
    }else{
        saudacao="Boa noite ";
    }

    return saudacao;
}

function criarTagHTML(saudar, nome, imc, resultado ,pesoIdeal, peso){
    var divResultado = document.querySelector("#divResultado")
    
    var nomeDisplay = document.createElement("p")
    var imcDisplay = document.createElement("p")
    var resultadoDisplay = document.createElement("p")
    var pesoDisplay = document.createElement("p")
    
    //Adiciona a classe "display" do Bootstrap, nas tags <p>
    nomeDisplay.classList.add("display-4")
    imcDisplay.classList.add("display-4")
    resultadoDisplay.classList.add("display-4")
    pesoDisplay.classList.add("display-4")

    //Cria variaveis contendo os resultados
    var nomeString = document.createTextNode(saudar + " " + nome + ",")
    var imcString = document.createTextNode("o seu IMC é de " + imc + ",")
    var resultadoString = document.createTextNode("e você está " + resultado + ".")
    if(peso != pesoIdeal){
        var pesoString = document.createTextNode("Para estar no peso ideal, você deve ter pelo menos " + pesoIdeal + " kilos.")
    }else{
        var pesoString = document.createTextNode("Parabéns, continue assim :D")
    }

    //Inseri os resultados nas tags
    nomeDisplay.appendChild(nomeString)
    imcDisplay.appendChild(imcString)
    resultadoDisplay.appendChild(resultadoString)
    pesoDisplay.appendChild(pesoString)
    
    //Inseri as tags dentro da div
    divResultado.appendChild(nomeDisplay)
    divResultado.appendChild(imcDisplay)
    divResultado.appendChild(resultadoDisplay)
    divResultado.appendChild(pesoDisplay)
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
        //Atribui valor as variaveis que contem os resultado
        stringResultado1 = document.createTextNode("- Queda de cabelo")
        stringResultado2 = document.createTextNode("- Infertilidae")
        stringResultado3 = document.createTextNode("- Ausência Menstrual")
        
        //Inseri os resultados nas tags
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
        stringResultado1 = document.createTextNode("- Menos risco de doenças cardíacas e vasculares.")
        stringResultado2 = document.createTextNode("Parabéns!")
        
        dropResultado1.appendChild(stringResultado1)
        dropResultado2.appendChild(stringResultado2)
    
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
