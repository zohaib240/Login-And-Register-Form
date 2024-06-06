const Name1= document.querySelector('#name1')
const email1= document.querySelector('#email1')
const password1= document.querySelector('#password1')
const form1 =document.querySelector('#form1')

// const cartItems = JSON.parse(localStorage.getItem('cartItems'));

const Name= localStorage.getItem('Name')
const email= localStorage.getItem('email')
const password= localStorage.getItem('password')

form1.addEventListener('submit',function (login) {
   login.preventDefault()
   if (Name1.value == Name && 
    email1.value == email && password1.value == password){
    console.log('you are register')
    
 window.location.href='quiz.html'
} else{
    window.location.href='register.html'

  } 
  Name1.value=''
  email1.value=''
  password1.value=''

})




