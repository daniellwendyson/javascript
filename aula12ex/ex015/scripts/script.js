function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    }else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        var genero = "";
        var fasevida = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");


        if (fsex[0].checked) {
            genero = "homem";
        } else if (fsex[1].checked) {
            genero = "mulher";
        }

        if(idade >= 0 && idade < 10) {
            fasevida = "bebe";
        } else if (idade < 21) {
            fasevida = "jovem";
        } else if (idade < 50) {
            fasevida = "adulto";
        }else {
            fasevida = "idoso";
        }

        var foto_res = `imagens/foto-${fasevida}-${genero}.png`
        img.setAttribute("src", foto_res);
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);

    }
 }