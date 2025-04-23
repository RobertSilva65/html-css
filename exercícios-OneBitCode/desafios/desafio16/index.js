function triangulo (base, altura) {

  alert(base * altura / 2)
  return base * altura / 2

}
function retangulo (base, altura) {

  alert(base * altura)
  return base * altura
  
}
function quadrado (lado) {

  alert(lado * lado)
  return lado * lado
  
}
function trapezio (basemaior, basemenor, altura) {

  basemaior = parseFloat(basemaior)
  basemenor = parseFloat(basemenor)
  altura = parseFloat(altura)

  const area = (basemaior + basemenor) * altura / 2
  alert(area)
  return area
  
}
function circulo (raio, pi = 3.14) {

  alert((raio * raio) * pi)
  return (raio * raio) * pi
  
}

let calculadora = ""

do {

    calculadora = prompt(

    "CALCULADORA GEOMÉTRICA" +
    "\n\nEscolha uma das Opções abaixo:" +
    "\n1 | área de um Triângulo" +
    "\n2 | área de um Retângulo" +
    "\n3 | área de um Quadrado" +
    "\n4 | área de um Trapézio" +
    "\n5 | área de um Círculo" +
    "\n6 | Sair" 
    
  )

  switch (calculadora) {

    case "1":

      triangulo(
        prompt("Escolha o Valor da Base:"),
        prompt("Escolha o valor da Altura")
      )
      break

    case "2":

      retangulo(
        prompt("Escolha o Valor da Base:"),
        prompt("Escolha o valor da Altura")
      )
      break

    case "3":

      quadrado(
        prompt("Escolha o Valor do lado:")
      )
      break

    case "4":

      trapezio(
        prompt("Escolha o Valor da Base Maior:"),
        prompt("Escolha o valor da Base Menor"),
        prompt("Escolha o valor da Altura")
      )
      break

    case "5":

      circulo(
        prompt("Escolha o Valor do Raio")
      )
      break

    case "6":

      alert("Fechando programa")
      break

    default:

      alert("Opção inválida")
      break

  }

 } while(calculadora !== "6")
