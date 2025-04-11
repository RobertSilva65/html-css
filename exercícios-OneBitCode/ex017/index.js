function dobro(x) {

  alert("O dobro de " + x + " é " + (x * 2))

}

// dobro(5)
// dobro(7)
// dobro(prompt("Diga um número e o retornarei o dobro:"))

function dizerOla(name = "mundo") {

  alert("Olá, " + name + " tudo bem?")

}

// dizerOla(prompt("Qual é o seu Nome?"))
// dizerOla()

function soma(a, b) {

  alert("O resultado de " + a + " + " + b + " é " + (a + b))

}

// soma(3, 4)
// soma(parseFloat(prompt("Me diga o primeiro valor?")), parseFloat(prompt("Me diga o segundo Valor?")))
const usuario = ""
function criarUsuario(nome, email, senha, tipo = "adm") {

  const usuario = {
    nome,
    email,
    senha,
    tipo
  }

  console.log(usuario)

}

function novoUsuario(nome, tipo = "adm", email, senha) {

  const usuario = {
    nome,
    email,
    senha,
    tipo
  }

  console.log(usuario)

}

// criarUsuario("Robert", "robert@gmail.com", "1234", "adm")
// novoUsuario("Robert", "robert@gmail.com", "1234", "adm")

function muitosParametros(nome, telefone, endereço, aniversário, email, senha) {

  //..
}

function objetoComoParametro(usuario) {

  usuario.nome
  usuario.email

}

muitosParametros("nome", "telefone", "endereço", "aniversário", "email", "senha")

const dadosUsuario = {

  nome: "",
  telefone: "",
  email: "",
  senha: "",
  endereco: "",
  aniversario: ""

}

objetoComoParametro(dadosUsuario)

