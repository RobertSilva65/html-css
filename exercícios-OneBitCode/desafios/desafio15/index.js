const imoveis = []
const confirma = ""
let opcao = ""

do {

  opcao = prompt(

    "Bem-Vindo ao Cadastro de Imóveis." +
    "\nTotal de imóveis: " + imoveis.length +
    "\n\nEscolha uma Opção:" +
    "\n1. Novo Imóvel" +
    "\n2. Listar Imóveis" +
    "\n3. Sair"

  )

  switch(opcao) {

    case "1":

      const imovel = {}

      imovel.owner = prompt("Informe o nome do Proprietário do Imóvel:")
      imovel.room = parseFloat(prompt("Quantos quartos possui o Imóvel?"))
      imovel.bath = parseFloat(prompt("Quantos banheiros possui o imóvel?"))
      imovel.garage = prompt("O imóvel possui Garagem?")

      const confirma = confirm(

        "Salvar este Imóvel" +
        "\nProprietário: " + imovel.owner +
        "\nQuartos: " + imovel.room +
        "\nBanheiros: " + imovel.bath +
        "\nPossui Garagem? " + imovel.garage

      )

      if(confirma) {

        imoveis.push(imovel)
        alert("Imóvel cadastrado com sucesso")

      } else {

        alert("Voltando a tela inicial")
        break

      }
      break

    case "2":

      for (let i = 0; i < imoveis.length; i++) {

        alert(
          "Imóvel " + (i + 1) +
          "\nProprietário: " + imoveis[i].owner +
          "\nQuartos: " + imoveis[i].room +
          "\nBanheiros: " + imoveis[i].bath +
          "\nPossui Garagem? " + imoveis[i].garage
        )
      }
      break

    case "3":

      alert("Saindo")
      break

    default:

      alert("Opção inválida")
      break

  }

} while(opcao !== "3")