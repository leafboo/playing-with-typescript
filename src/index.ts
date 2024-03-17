const descriptionElement = document.querySelector('.description')
const pressMeElement = document.querySelector('.pressMe')
console.log('hello')

if (descriptionElement && pressMeElement) { 
  pressMeElement?.addEventListener('click', () => {
    descriptionElement.textContent = "You pressed the button"
    fetchData()
  })
}


// api calls
async function fetchData() {
  try {
    const response = await fetch('https://danbooru.donmai.us/artists/67359.json')

    const data: any = await response.json()
    console.log(data)
  } catch(err) {
    console.error(`Error fetching data: ${err}`)
  }
}

