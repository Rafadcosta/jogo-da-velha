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
    });

});