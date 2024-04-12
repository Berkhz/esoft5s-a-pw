let procura = new URLSearchParams(location.search)
var nomePokemon = procura.get("name")

function AlteraTitulo() {
    document.title = "Página do " + nomePokemon
}

async function ImagemPokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + nomePokemon)

        const data = await response.json()
        const url = data.sprites.front_default

        let leImagem = document.getElementById('pokemonImagem')
        leImagem.src = url
        leImagem.alt = nomePokemon

        let leInformacoes = document.getElementById('informacoes')
        leInformacoes.innerHTML = "Informações sobre " + nomePokemon
    } catch (e) {
        console.error('Erro ao buscar informações do Pokémon:', e);
    }
}

AlteraTitulo()
ImagemPokemon()