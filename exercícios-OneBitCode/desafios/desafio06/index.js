const name1 = prompt("Qual é o seu nome?")
const power1 = parseInt(prompt("Qual o seu poder de ataque?"));

const person1 = name1 + power1

const name2 = prompt("Qual é o seu nome?")
const life2 = parseInt(prompt("Quantos pontos de vida você tem?"));
const defence2 = parseInt(prompt("Quantos pontos de defesa você tem?"));
const shield2 = prompt("Seu personagem tem escudo?(s/n)")

let damage = 0

if (power1 > defence2 && shield2 === ("n")) {

  damage = power1 - defence2

} else if (power1 > defence2 && shield2 === ("s")) {

  damage = (power1 - defence2) / 2

} else if (power1 <= defence2) {

  damage = 0

} else {

  alert("error")

}

const remainingLife = life2 - damage;

    alert(
      "Personagem 1\n" + "Nome: " + name1 +
      "\nPoder: " + power1 +
      "\nPersonagem 2\n" + "Nome: " + name2 +
      "\nVida: " + remainingLife +
      "\nDefesa: " + defence2 +
      "\nEscudo: " + shield2 +
      "\nO Dano causado pelo personagem " + name1 + " no personagem " + name2 + " foi " + damage
    );
    