const word = prompt("Sensor de Palíndronos \nEscreva uma palavra para testar:")
let reverseword = ""

for (let i = word.length - 1; i >= 0; i--) {

  reverseword += word[i]

}

if (word === reverseword) {

  alert(word + " é um palíndromo!")

} else {

  alert(word + "nao é um palíndromo!\n\n" + 
  word + " !== " + reverseword) 

}