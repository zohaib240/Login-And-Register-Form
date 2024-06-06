const Name= document.querySelector('#name')
const email= document.querySelector('#email')
const password= document.querySelector('#password')
const form =document.querySelector('#form')

// const cartItems = JSON.parse(localStorage.getItem('cartItems'));



form.addEventListener('submit',function (login) {
   login.preventDefault()
   if (Name.value){
    console.log(Name.value)
    localStorage.setItem('Name',Name.value)
}
   if(email.value){
    console.log(email.value)
    localStorage.setItem('email',email.value)
  }
  if(password.value){
    console.log(password.value)
    localStorage.setItem('password',password.value)
    }  
  window.location.href='quiz.html'

  Name.value=''
  email.value=''
  password.value=''

})



