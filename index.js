var camposObrigatorios = document.querySelectorAll('[required]')

camposObrigatorios.forEach(function (campo) {
    campo.addEventListener('change', function (event) {
        if (campo.value.trim() !== '') {
            campo.classList.remove('erro');
            campo.classList.add('preenchido');
            campo.parentElement.querySelectorAll('.mensagem-erro').forEach(function (mensagemErro) {
                mensagemErro.remove();
            });
        }
    });
});

document.getElementById('formulario').addEventListener('submit', function(event){
    //Verificar se campos foram preenchidos
    var camposVazios = []

    camposObrigatorios.forEach(function(campo){
        if(!campo.value.trim()) camposVazios.push(campo);
    });

    //Verificar se houveram campos vazios e impedir o envio do formulário
    if (camposVazios.length > 0) {
        event.preventDefault();

        //remove mensagens de erros antigas
        document.querySelectorAll('.mensagem-erro').forEach(function (mensagemErro) {
            mensagemErro.remove();
        });
        document.querySelectorAll('.erro').forEach(function (erro) {
            erro.classList.remove('erro');
        });

        camposVazios.forEach(function(campo){
            campo.classList.remove('preenchido')
            campo.classList.add('erro')
            mostrarMensagemErro(campo, 'campo obrigatório')
        });
    }
})

function mostrarMensagemErro(campo, mensagem){
    var mensagemErro = document.createElement('div');
    mensagemErro.classList.add('mensagem-erro');
    mensagemErro.textContent = mensagem;

    campo.parentNode.appendChild(mensagemErro);
}
