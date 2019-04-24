function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json))
}

function fetchCharacters() {
  fetch('https://anapioficeandfire.com/api/characters')
  .then(resp => resp.json())
  .then(json => renderCharacter(json))
}

function renderCharacter(json) {
  console.log(json)
}

function renderBooks(json) {
  console.log(json)
  const main = document.querySelector('main')
  json.forEach(book => {
    const h3 = document.createElement('h3')
    h3.innerHTML = `<h3>${book.name}</h3>`
    main.appendChild(h3)
  })
  console.log(json[4].name)
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
  fetchCharacters()
})
