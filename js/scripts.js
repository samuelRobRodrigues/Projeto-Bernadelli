function checkCb(id, status){
    console.log(id);
    console.log(status);

    var cb1 = document.getElementById('cb1');
    var cb2 = document.getElementById('cb2');

    if(cb2.checked){
        if(id == "cb1" && status == true){
            cb1.checked = true;
            cb2.checked = false;
        } else if(id == cb2 && status == false){
            cb2.checked = false;
        }
    }

    if(cb1.checked){
        if(id == "cb2" && status == true){
            cb2.checked = true;
            cb1.checked = false;
        } else if(id == "cb1" && status == false){
            cb1.checked = false;
        }
    }
}
function toggleDiv() {
    var menuLateralDiv = document.getElementById("menu__lateral");
    var mostrarEsconderBtn = document.getElementById("mostrarEsconder");
    var fecharBtn = document.getElementById("fechar");

    if (menuLateralDiv.style.display === "none" || menuLateralDiv.style.display === "") {
      // Se a div estiver escondida, mostra
      menuLateralDiv.style.display = "block";
      mostrarEsconderBtn.style.display = "none"; // Oculta o botão mostrar/esconder
      fecharBtn.style.display = "inline"; // Exibe o botão de fechar
    } else {
      // Se a div estiver visível, esconde
      menuLateralDiv.style.display = "none";
      mostrarEsconderBtn.style.display = "inline"; // Exibe o botão mostrar/esconder
      fecharBtn.style.display = "none"; // Esconde o botão de fechar
    }
  }

  // Função para fechar a div
  function fecharDiv() {
    var menuLateralDiv = document.getElementById("menu__lateral");
    var mostrarEsconderBtn = document.getElementById("mostrarEsconder");
    var fecharBtn = document.getElementById("fechar");

    menuLateralDiv.style.display = "none";
    mostrarEsconderBtn.style.display = "inline"; // Exibe o botão mostrar/esconder
    fecharBtn.style.display = "none"; // Esconde o botão de fechar
  }

function mostrarCalendario() {
      document.getElementById('dataSelecionada').click();
    }
