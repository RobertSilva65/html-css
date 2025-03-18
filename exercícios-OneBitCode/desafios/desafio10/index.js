let money = parseFloat(0)

const app = prompt("Deseja consultar seu banco? (S/N)")

while(app === "S") {

let bankassistent = prompt(

  "Dinheiro disponível: " + money + 
  "\n1|Depósito|" +
  "\n2|Retirada|" +
  "\n3|Sair|" +
  "\n\nO que voce deseja fazer?"

)

if (bankassistent === "1") {

  let deposit = parseFloat(prompt("Qual o valor do depósito"))
  money += deposit

}else if(bankassistent === "2") {

  let subtract = parseFloat(prompt("Qual o valor da retirada?"))
  money -= subtract

}else if(bankassistent === "3") {

  break

}

}