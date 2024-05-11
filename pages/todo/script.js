function enviar(e) {
    e.preventDefault()

    const form = e.target;
    const formData = new FormData(form);

    const tarefa = {
        titulo: formData.get('tituloTarefa'),
        descricao: formData.get('descricaoTarefa')
    };

    const tarefaJSON = JSON.stringify(tarefa);
    localStorage.setItem('tarefa', tarefaJSON);

    form.reset();
    console.log(tarefa);
}