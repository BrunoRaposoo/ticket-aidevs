const input = document.querySelector('input')
const inputCamp = document.querySelector('.input')
const button = document.querySelector('button')
const nameElement = document.querySelector('#name')
const photoElement = document.querySelector('#photo')
const errorElement = document.querySelector('#error')
const icon = document.querySelector('#icon')
const successMessage = document.querySelector('#success-message')

input.addEventListener('keydown', (event) => {
  if(event.key === 'Enter') {
    event.preventDefault()
    button.click()
  }
})

button.addEventListener('click', async () => {
  const username = input.value
  const response = await fetch(`https://api.github.com/users/${username}`)
  const data = await response.json()
  const name = data.name
  const photo = data.avatar_url
  const isConfirm = 'assets/confirm.svg'
  
  if (data !== undefined && data.message === 'Not Found' || input.value === '') {
    errorElement.style.display = 'block'
    nameElement.style.display = 'block'
    photoElement.style.display = 'block'
    icon.style.display = 'flex'
    input.style.display = 'block'
    successMessage.style.display = 'none'
  } else {
    errorElement.style.display = 'none'
    nameElement.style.display = 'block'
    photoElement.style.display = 'block'
    input.style.display = 'none'
    icon.style.display = 'flex'
    icon.setAttribute('src', isConfirm)
    nameElement.innerHTML = name
    photoElement.setAttribute('src', photo)
    inputCamp.style.background = 'transparent'
  }
})
