function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} Horas.`
    if (hora >= 0 && hora < 12){
        //Bom dia 
        img.src = 'fotos/manha.png'
        document.body.style.background = '#2ca5ff';
    }else if (hora >=12 && hora < 18 ){
        //Boa Tarde
        img.src = 'fotos/tarde.png'
        document.body.style.background = '#ddff51' ;
    }else {
        //Boa noite
        img.src = 'fotos/noite.png'
        document.body.style.background = '#082d4e';
    }
}