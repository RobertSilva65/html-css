const converter = prompt("Escolha uma medida em metros?")
let measure = parseFloat(converter)
const choiceMeasure = prompt("Escolha uma medida para converter?\na)(mm)\nb)(cm)\nc)(dm)\nd)(dam)\ne)(hm)\nf)(km)")

switch(choiceMeasure) {

  case "a":
    alert("O valor é " + measure*1000 + " mm")
    break
  case "b":
    alert("O valor é " + measure*100 + " cm")
    break
  case "c":
    alert("O valor é " + measure*10 + " dm")
    break
  case "d":
    alert("O valor é " + measure/10 + " dam")
    break
  case "e":
    alert("O valor é " + measure/100 + " hm")
    break
  case "f":
    alert("O valor é " + measure/1000 + " km ")
    break
  default:
    alert("Opção inválida")
    break
    
}