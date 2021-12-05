function mascData(objeto, evento) {

    if (evento.keycode ==8 || evento.keycode == 46){
        return true;
    }

    if (evento.keycode <48 || evento.keycode > 57){
        alert("somente números")
        return false;
    }

    if (objeto.value.length == 10) {
        return false;
    }

    if ((objeto.value.length == 2)||(objeto.value.length == 5)){
      objeto.value = objeto.value + '/';
    }

    return true;
}

function verificarFormulario() {
    var mensagemErro = "";

    if (nome.value == "") {
        mensagemErro += "informe o nome.<br>";
    }

    if (email.value == "") {
        mensagemErro += "informe o email.<br>";
    }

    if (datanasc.value == "") {
        mensagemErro += "informe a data de nascimento.<br>";
    }

    if (escolaridade.value == "") {
        mensagemErro += "informe a escolaridade.<br>";
    }


var sexoPreenchido = false;
var opcoesSexo = document.getElementsByName("sexo");
for (var i = 0; i< opcoesSexo.length; i++) {
  if (opcoesSexo[i].checked) {
     sexoPreenchido = true;
     break;
    }
}

if (sexoPreenchido == false) {
    mensagemErro += "informe o sexo.<br>";
}

if (mensagemErro == "") {
    alert ("Funcionário cadastrado com sucesso!");
    return true;
} else {
    Response.innerHTML = mensagemErro;
   }
}