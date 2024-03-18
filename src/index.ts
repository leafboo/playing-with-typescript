const descriptionElement = document.querySelector('.description')
const yoneyamaPostsElement = document.querySelector('.yoneyamaPosts')
const pressMeElement = document.querySelector('.pressMe')
console.log('hello')

if (descriptionElement && pressMeElement) { 
  pressMeElement?.addEventListener('click', () => {
    descriptionElement.textContent = "You pressed the button"
  })
}

yoneyamaPostsElement?.addEventListener('click', fetchData)


// api calls
async function fetchData() {
  try {
    const response = await fetch('https://danbooru.donmai.us/posts.json?tags=yoneyama_mai')

    const data: any = await response.json()
    console.log(data)
  } catch(err) {
    console.error(`Error fetching data: ${err}`)
  }
}

