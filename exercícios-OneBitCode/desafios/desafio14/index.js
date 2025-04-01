const cards = ["10 Copas", "2 Espadas", "3 Zap"]
const gameCards = prompt(
  "PILHA DE CARTAZ" +
  "\n\nDeseja iniciar o jogo?(S/N)"
)
const addCards = ""
let cardsAssistent = ""
let removecards = ""

while(gameCards === "Sim"){

  cardsAssistent = prompt(

    "PILHA DE CARTAZ" +
    "\nBem vindo!!!" +
    "\nCartas do Baralho: " + cards +
    "\n\nEscolha uma da Opções abaixo:" +
    "\n|1| Adicionar uma carta" +
    "\n|2| Puxar uma Carta" +
    "\n|3| Sair"

  )
  if(cardsAssistent === "1") {

    cards.unshift(prompt("Qual Carta que deseja adicionar?"))

  }else if(cardsAssistent === "2") {

    removecards = cards.shift()
    alert("Carta Tirada do Baralho " + removecards)

  }else if(cardsAssistent === "3") {

    alert("Encerrando Jogo")
    break

  }else {

    alert("Opção incorreta")
    
  }

}