var rodada = 1;
var matriz_jogo = Array(3);

$(document).ready( function (){

    $('#btn_play').click ( function () {

        if($('#nick1').val() == '') {
            alert('Falta o apelido player 1');
            return false;
        }

        if($('#nick2').val() == '') {
            alert('Falta o apelido player 1');
            return false;
        }

        $('#nick_1').html($('#nick1').val());
        $('#nick_2').html($('#nick2').val());

        $('#home').hide();
        $('#game').show();
    });

    $('.move').click(function(){
        var id_campo = this.id;
        move(id_campo);
    });

    function move(id){
        var icone = '';
        var ponto = 0;

        if((rodada % 2 == 1)){
            icone = 'url("../images/m1.png")';
            ponto = -1;
        } else {
            icone = 'url("../images/m2.png")';
            ponto = 1;
        }

        rodada++;

        $('#'+id).css('background-image',icone);
    }

});