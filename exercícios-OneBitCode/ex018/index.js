function calcularMedia(a, b) {
 
  const media = (a + b) / 2
  return media

}

const resultado = calcularMedia(7, 2)

//console.log(resultado)

function criarProduto(nome, preco){

  const produto = {
    
    nome,
    preco,
    estoque: 1

  }
  return produto

}

const notebook = criarProduto("Notebook intel core i5 16GB", 2500)

//console.log(notebook)

function areaRetangular(base, altura) {

  return base * altura

}

//console.log(areaRetangular(3,5))

function areaQuadrada(lado){

  return lado * lado
  
}

//console.log(areaQuadrada(9))

function ola() {

  let texto = ". . ."
  return texto
  
}

//console.log(ola())

function maioridade(idade){

  if (idade >= 18) {

    return "Maior de Idade"

  }else {

    return "Voce é menor de idade"

  }
}

console.log(maioridade(19))