function enviar(e) {
    e.preventDefault()

    const form = e.target;
    const formData = new FormData(form);

    const meuStorage = localStorage

    meuStorage.setItem('tituloTarefa', formData.get('tituloTarefa'))
    meuStorage.setItem('descricaoTarefa', formData.get('descricaoTarefa'))

    console.log(formData.get('tituloTarefa'))
    console.log(formData.get('descricaoTarefa'))
    alert('Mensagem enviada com sucesso!')
}