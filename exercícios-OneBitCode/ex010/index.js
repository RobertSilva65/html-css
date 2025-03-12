let speed = 80

while(speed > 0) {

 alert("O carro está a " + speed + " km/h")
 speed -= 20
 alert("Velocidade diminuindo 20 km/h")

 if (speed === 40) {

  break
  
 }
}

alert("O carro parou")