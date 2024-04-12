
async function QuantidadeVisitas() {
    let contador = 0
    let ultimaData = new Date().getDate()

    if (localStorage.length <= 0) {
        let visitaObject = { count: contador, data: ultimaData}

        let contadorVisita = localStorage.setItem(contador, JSON.stringify(visitaObject))
        let dataVisita = localStorage.setItem(ultimaData.toString(), JSON.stringify(visitaObject))

        let lerContador = JSON.parse(localStorage.getItem(contadorVisita))
        let lerDataVisita = JSON.parse(localStorage.getItem(dataVisita))
    }
    else {
        let lerContador = JSON.parse(localStorage.getItem(contadorVisita))
        let lerDataVisita = JSON.parse(localStorage.getItem(dataVisita))
    }
    
    let qtdVisitas = document.getElementById('qtdAcessos')
    qtdVisitas.innerHTML = "Está página foi visitada ${} vezes. A Última visita foi:"
}

QuantidadeVisitas()