const cadastroAssis = prompt(

  "Expert Imóveis" +
  "\n\nBem vindo ao nosso site de Imóveis" +
  "Deseja entrar no site? S/N"

)
let lojaAssis = ""
let contador = parseFloat(0)
let storage = {}

while(cadastroAssis === "S") {

  lojaAssis = prompt(

    "Expert Imóveis" +
    "\n\nBem vindo!" +
    "\nImóveis cadastrados: " + contador +
    "\n|1|Cadastrar Imóvel" +
    "\n|2|Imóveis Salvos" +
    "\n|3|Sair"
  
  )
  if(lojaAssis === "1") {

    storage.name = prompt("Nome de Proprietário?")
    contador++
    storage.bed = prompt("Quantidade de Quartos?")
    storage.bath = prompt("Quantidade de banheiros?")
    storage.room = prompt("Possui Garagem? S/N")

  }else if(lojaAssis === "2") {

    alert(

      "Informações dos Imóveis:" + 
      "\n\nNome: " + JSON.stringify(storage.name, null, 2) +
      "\n\nQuantidade de Quartos: " + JSON.stringify(storage.bed, null, 2) +
      "\n\nQuantidade de banheiros: " + JSON.stringify(storage.bath, null, 2) +
      "\n\nPossui garagem: " + JSON.stringify(storage.room, null, 2)

    );

  }else if (lojaAssis === "3") {
    
    alert("Tchau até a Próxima")
    break

  }else {

    alert("Opção incorreta")

  }
  
  
}