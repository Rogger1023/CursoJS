function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        //res.innerHTML = `idade calculada: ${idade}`
        var genero ='';
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Masculino'
            document.body.style.background = '#16537e'
            if ( idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute('src','fotos/CriancaM.jpg')
            }else if ( idade < 21 ){
                //Jovem
                img.setAttribute('src','fotos/JovemM.jpg')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src','fotos/AdultoM.jpg')
            }else {
                //idoso
                img.setAttribute('src','fotos/IdosoM.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Feminino'
            document.body.style.background = '#f05e9e'
            if ( idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute('src','fotos/CriancaF.jpg')
            }else if ( idade < 21 ){
                //Jovem
                img.setAttribute('src','fotos/JovemF.jpg')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src','fotos/AdultoF.jpg')
            }else {
                //idoso
                img.setAttribute('src','fotos/IdosaF.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}