let procura = new URLSearchParams(location.search)
document.title = "Página do " + procura.get("name")

const body = document.getElementById("body")
let pokeImage = fetch('https://pokeapi.co/api/v2/pokemon/' + procura.get("name"))
let criaImage = document.createElement('img')
criaImage.src = (pokeImage + "sprites.front_default")
body.appendChild(criaImage)