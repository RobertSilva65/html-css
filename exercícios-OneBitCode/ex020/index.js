let pessoa = {

  nome: "Robert",
  idade: 19,
  dizerOla() {

    console.log("Olá Mundo! Meu nome é " + this.nome)

  }

}

console.log(pessoa)

pessoa.dizerOla()