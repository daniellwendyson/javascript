function carregar() {
    var msg = window.document.getElementById("msg");
    var msg2 = window.document.getElementById("msg2");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        msg2.innerHTML = 'bom dia! :)';
        img.src = 'imagens/fotomanha.png';
        document.body.style.background = "#e2cd9f";
    }else if (hora >= 12 && hora < 18) {
        msg2.innerHTML = 'boa tarde! :)';
        img.src = 'imagens/fototarde.png';
        document.body.style.background = "#b9846f";
    }else {
        msg2.innerHTML = 'boa noite! :)';
        img.src = 'imagens/fotonoite.png';
        document.body.style.background = "#515154";
    }

}
