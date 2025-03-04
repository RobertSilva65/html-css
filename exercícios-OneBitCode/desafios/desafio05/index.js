const car1 = prompt("Insira o Nome do Veículo")
const vel1 = prompt("Insira a Velocidade do Veículo")
const vehicle1 = car1 + vel1

const car2 = prompt("Insira o Nome do Veículo")
const vel2 = prompt("Insira a Velocidade do Veículo")
const vehicle2 = car2 + vel2

if (vel1 > vel2) {
    alert(car1 + " É mais rapido que " + car2)
} else if (vel1 === vel2) {
    alert("Os dois carros tem a mesma velocidade")
} else {
    alert(car2 + " É mais rapido que " + car1)
}