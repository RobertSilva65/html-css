const name = prompt("Qual é o seu Nome?")
const question1 = prompt("Voce já visitou alguma cidade? (S/N)")
let city = ""
let counter = 0

while (question1 === "S") {

  let question2 = prompt("Quais cidades que já visitou? (sair)")
  city += " - " + question2 + "\n"
  counter++

  if (question2 === "sair") {

    break

  }

}
alert("Nome: " + name + "\nNúmero de cidades: " + counter + "\nCidades Visitadas: \n" + city)