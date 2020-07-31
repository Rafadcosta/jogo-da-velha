var rodada = 1;
var matriz_jogo = Array(3);

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;

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
        var id_field = this.id;
        $('#'+id_field).off();
        move(id_field);
    });

    function move(id){
        var icone = '';
        var ponto = 0;

        // var origin = window.location.origin;
        // console.log(origin);
        // var pathname = window.location.pathname;
        // console.log(pathname);

        if((rodada % 2 == 1)){
            icone = 'url("images/m1.png")';
            // icone = 'url("'+origin+pathname+'images/m1.png")';
            ponto = -1;
        } else {
            icone = 'url("images/m2.png")';
            // icone = 'url("'+origin+pathname+'images/m1.png")';
            ponto = 1;
        }

        rodada++;

        $('#'+id).css('background-image',icone);

        var linha_coluna = id.split('-');

        matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;

        check();
    }

    function check(){
        // horizontal
        var pontos = 0;
        for(var i=1;i<=3;i++){
            pontos = pontos + matriz_jogo['a'][i];
        }

        winner(pontos);
        pontos = 0;

        for(var i=1;i<=3;i++){
            pontos = pontos + matriz_jogo['b'][i];
        }

        winner(pontos);
        pontos = 0;
        
        for(var i=1;i<=3;i++){
            pontos = pontos + matriz_jogo['c'][i];
        }

        winner(pontos);
        
        // vertical
        for(var l=1;l<=3;l++){
            pontos = 0;

            pontos += matriz_jogo['a'][l];
            pontos += matriz_jogo['b'][l];
            pontos += matriz_jogo['c'][l];

            winner(pontos);
        }

        // diagonal
        pontos = 0;
        pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];
        winner(pontos);

        pontos = 0;
        pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];

        winner(pontos);

    }

    function winner(pontos){
        if(pontos == -3){
            var move_1 = $('#nick1').val();
            alert(move_1 + ' venceu!');
            $('.jogada').off();
            refreshPage();
        }

        else if(pontos == 3){
            var move_2 = $('#nick2').val();
            alert(move_2 + ' venceu!');
            $('.jogada').off();
            refreshPage();
        }
    }

    function refreshPage(){
        window.location.reload();
    } 

});