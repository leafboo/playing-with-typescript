const descriptionElement = document.querySelector('.description')
const pressMeElement = document.querySelector('.pressMe')
console.log('hello')

if (descriptionElement && pressMeElement) { 
  pressMeElement?.addEventListener('click', () => {
    descriptionElement.textContent = "You pressed the button"
  })
}
