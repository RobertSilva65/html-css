const idade = prompt("Informe a sua Idade: ")

const resultado = (6 === 6) ? "Verdadeiro" : "Falso"

if (idade >= 18) {
    alert("Você já é maior de idade!")
} else if (idade > 12) {
    alert("Voce é menor de idade")
} else if (idade > 4) {
    alert("Voce é Criança")
} else {
    alert("..")
}
