function register(element) {

 const username = element.children.username.value
 const password = element.children.password.value
 const passwordConfirmation = element.children.password.value

 console.log( {username, password, passwordConfirmation} )

 if(password === passwordConfirmation) {

  alert("Senha registrada")

 }else {

  alert("As Senhas não conferem")
  
 }

}