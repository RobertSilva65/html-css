let menu = ""
let vagas = [{vaga:"Auxiliar Geral(Micropro)", candidatos:1}]
let mostrarVagas = function mVagas(){

  alert("\nVaga: " + vagas[vaga] + "Candidatos: " + vagas[candidatos])
  return mVagas

}
do{

  menu = prompt(

    "Seleção de Empregos" +
    "\n\n|1|Listar vagas disponíveis" +
    "\n\n|2|Criar uma nova vaga" +
    "\n\n|3|Visualizar Vaga" +
    "\n\n|4|Inscrever um candidato em uma vaga" +
    "\n\n|5|Excolher uma vaga" +
    "\n\n|6|Sair"

  )

  switch(menu) {

    case "1":

    console.log(mostrarVagas)

    break
    case "2":

    break
    case "3":

    break
    case "4":

    break
    case "5":

    break
    case "6":
    break
    default:
      alert("Opção incorreta")
  }

}while(menu !== "6")