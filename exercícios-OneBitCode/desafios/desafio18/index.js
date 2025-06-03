const escalationteam = []

function addPerson() {

  const nameSection = document.getElementById('name').value
  const positionSection = document.getElementById('position').value
  const numberSection = document.getElementById('number').value

  if(nameSection && positionSection && numberSection){

    const player = {
    name: nameSection, 
    position: positionSection,
    number: numberSection

  }

  const confirmation = confirm("Deseja confirmar a Escalação?")

  if(confirmation) {

    const escalationSection = document.getElementById('escalation-list')
    const playerList = document.createElement('p')
    playerList.classList.add("playerStyle");
    playerList.innerHTML = "<br><br>Nome: " + nameSection + 
    "<br><br>Posição: " + positionSection +
    "<br><br>Número da Camisa: " + numberSection
    escalationSection.appendChild(playerList)

    escalationteam.push(player)
    alert("Jogador escalado!")

    document.getElementById('name').value = "";
    document.getElementById('position').value = "";
    document.getElementById('number').value = "";


  }

  }else {
    alert("Preencha todos os campos")
  }

}

function removePerson() {

  const remove = parseFloat(prompt("Insira o número do jogador que Deseja remover?"))
  const indice = escalationteam.findIndex(player => parseFloat(player.number) === remove);

  if(indice !== -1) {

    const confirmation = confirm("Deseja remover o jogador escolhido?")

    if(confirmation){

      escalationteam.splice(indice, 1);
      const escalationSection = document.getElementById('escalation-list');
      const players = escalationSection.getElementsByTagName('p');

      for (let i = 0; i < players.length; i++) {
      
        if (players[i].innerHTML.includes(`Número da Camisa: ${remove}`)) {

          escalationSection.removeChild(players[i]);
          break

        }

      }

    }
    
  }else {

    alert("Jogador Não encontrado")

  }

}