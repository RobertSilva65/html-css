const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Frodo", "Gimli"]
console.log(arr)

// Adicionar Elementos
//push
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// unshift

tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

// Remover Elementos
//pop
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//shift 
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// Pesquisar por um Elemento
// includs
const inclui = arr.includes("Gandalf o Grande")
console.log(inclui)

// indexOf
const indice = arr.indexOf("Gandalf")
console.log(indice)

// Cortar e Concatenar
//slice
const hobbits = arr.slice(3, 5)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

// Substituição dos Elementos
// splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf o Cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

// Iterar sobre os Elementos
for (let indice = 0; indice < sociedade.length; indice++) {

  const elemento = sociedade[indice]
  console.log(elemento + "se encontra na Posição " + indice)
  
}
