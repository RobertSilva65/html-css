const arr = ["Paulo", "Marcelo"]
const sistemaHospital = prompt(
  "Hospital para Todos" +
  "\n\n1|Entrar" +
  "\n2|Sair"
)
let fila = ""

while(sistemaHospital === "1") {

    fila = prompt(
    "Hospital para Todos" +
    "\n\nFila de Espera: " + arr +
    "\n1|Novo Paciente|" +
    "\n2|Consultar Paciente" +
    "\n3|Sair|"
  )
  if(fila === "1") {

    arr.push(prompt("Escreva o Nome do Paciente"))

  }else if(fila === "2") {

    paciente = arr.shift()
    alert(paciente)

  }else if(fila === "3"){

    alert("Encerrando")
    break

  }else{

    alert("Opção incorreta")

  }

}