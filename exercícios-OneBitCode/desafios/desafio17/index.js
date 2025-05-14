let menu = ""
const vagas = []

function listarVagas() {

  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {

    textoFinal += indice + ". "
    textoFinal += vaga.nome
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
    return textoFinal
    
  }, "")

  alert(vagasEmTexto)

}

function novaVaga() {

  const nome = prompt("Informe um nome para a vaga:")
  const descricao = prompt("Informe uma Descrição para a vaga:")
  const dataLimite = (prompt("Informe uma data limite (dd/mm/aaaa) para a vaga:"))

  const confirmacao = confirm(

    "Deseja criar uma nova vaga com essas Informações:" +
    "\nNome: " + nome + "\nDescrição:" + descricao + "\nData Limite:" + dataLimite

  )

  if (confirmacao) {

    const novaVaga = {nome, descricao, dataLimite, candidatos: [] }
    vagas.push(novaVaga)
    alert("Vaga criada")

  }

}

function exibirVaga() {

  const indice = prompt("Informe o índice da Vaga que deseja exibir:")

  if (indice >= vagas.length || indice < 0) {

    alert("Indice Invalido")
    return

  }
  
  const vaga = vagas[indice]

  const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {

    return textoFinal + "\n - " + candidato

  }, "")

  alert(
    
    "Vaga n - " + indice +
    "\nNome: " + vaga.nome +
    "\nDescrição: " + vaga.descricao +
    "\nData Limite:" + vaga.dataLimite +
    "Quantidade de candidatos: " + vaga.candidatos.length +
    "\nCandidatos inscritos: " + candidatosEmTexto
  )
}

function inscreverCandidato() {

  const candidato = prompt("Informe o nome do(a) candidato(a): ")
  const indice = prompt("Informe o índice da vaga para qual o(a) candidato(a) deseja se inscrever: ")
  const vaga = vagas[indice]

  const confirmacao = confirm(
 
    "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "/\n" +
    "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite

  )

  if (confirmacao) {

    vaga.candidatos.push(candidato)
    alert("Inscrição realizada.")

  }

}

function excluirVaga() {

  const indice = prompt("Informe o índice da vaga que deseja excluir: ")
  const vaga = vagas[indice]

  const confirmacao = confirm(

    "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
    "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite

  )

  if (confirmacao) {

    vagas.splice(indice, 1)
    alert("Vaga excluída.")

  }
}

do{

  menu = prompt(

    "Seleção de Empregos" +
    "\n\n|1|Listar vagas disponíveis" +
    "\n\n|2|Criar uma nova vaga" +
    "\n\n|3|Visualizar Vaga" +
    "\n\n|4|Inscrever um candidato em uma vaga" +
    "\n\n|5|Excluir uma vaga" +
    "\n\n|6|Sair"

  )

  switch(menu) {

    case "1":

    listarVagas()
    break

    case "2":

    novaVaga()
    break

    case "3":

    exibirVaga()
    break

    case "4":

    inscreverCandidato()
    break

    case "5":

    excluirVaga()
    break

    case "6":
    break
    default:
      alert("Opção incorreta")
  }

}while(menu !== "6")