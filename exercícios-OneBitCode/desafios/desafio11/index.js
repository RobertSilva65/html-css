const number = parseFloat(prompt("Escolha um número: "))
let contador = parseFloat(0)
let tabuada = ""

for(; contador <= 20; contador++){

  tabuada += " -> " + number + " x " + contador + " = " + (number*contador) + "\n"

}

alert("Números multiplicados: " + "\n" + tabuada
)