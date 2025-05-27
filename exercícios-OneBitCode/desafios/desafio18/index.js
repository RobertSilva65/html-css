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

  escalationteam.push(player)

  const escalationSection = document.getElementById('escalation-list')
  const playerList = document.createElement('p')
  playerList.innerHTML = "Nome: " + nameSection + 
  "<br><br>Posição: " + positionSection +
  "<br><br>Número da Camisa: " + numberSection
  escalationSection.appendChild(playerList)

  confirm("Deseja confirmar a Escalação?")

  }else {
    alert("Preencha todos os campos")
  }

}