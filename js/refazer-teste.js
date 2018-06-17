var botaoVoltar = document.getElementById("botaoVoltar")
botaoVoltar.addEventListener("click", function(event) {
    event.preventDefault();

    //Remove elementos filhos do Dropdown
    var divResultado = document.getElementById("divResultado")
    while (divResultado.firstChild) {
        divResultado.removeChild(divResultado.firstChild);
    }
   
    //Faz o formulário ficar visível na página novamante
    var form = document.getElementById('form')
    form.classList.remove("d-none")
        
    //Oculta o Dropdown
    var divDropdown = document.getElementById("divDropdown")
    divDropdown.classList.add("d-none")

    /*Remove conteudo das tags <p> do Dropdown, para que se o teste for feito novamente,
      o texto do teste anterior não continue aparecendo na tag, junto com o do novo. */
    removeTextoDropdown()

    //Oculta o botão de Refazer Teste
    botaoVoltar.classList.add("d-none")

    //Oculta a mensagem de erro da pesquisa anterior
    var msgErroNome = document.getElementById("msgErroNome")
    var msgErroAltura = document.getElementById("msgErroAltura")
    var msgErroPeso = document.getElementById("msgErroPeso")
    msgErroNome.classList.add("d-none")
    msgErroAltura.classList.add("d-none")
    msgErroPeso.classList.add("d-none")


});