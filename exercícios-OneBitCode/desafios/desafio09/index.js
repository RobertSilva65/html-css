
while (true) {

  let menu = prompt(

      "Menu de Jogos" +
      "\n1- Fortnite" +
      "\n2- Minecraft" +
      "\n3- Lol" +
      "\n4- Mortal Kombat" +
      "\n5- Encerrar" +
      "\nEscolha uma das opções a seguir"

  )

  switch(menu) {

    case "1":

      alert("Voce escolheu o jogo Fortnite")
      break
    case "2":

      alert("Voce escolheu o jogo Minecraft")
      break
    case "3":

      alert("Voce escolheu o jogo Lol")
      break
    case "4":

      alert("Voce escolheu o jogo Mortal Kombat")
      break

  }

  if (menu === "5") {

    alert("Voce escolheu sair do Menu")
    break

  }
  
}