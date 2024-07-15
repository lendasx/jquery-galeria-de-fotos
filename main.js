$(document).ready(function(){
    $('header button').click(function() {
       $('form').slideDown(); // para descer o formulario quando clicar em nova imagem
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp(); //para suber o formulario quando clicar em nova imagem
    })

    $('form').on('submit',function(e){ //para adicionar uma imagem nova no site
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(5000);
        $('#endereco-imagem-nova').val('') //limpar o formulário depois de enviado
    })

})
