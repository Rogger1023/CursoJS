function contar(){
    let inicio = document.getElementById('contIni');
    let fim = document.getElementById('contFim');
    let passo = document.getElementById('contP');
    let res = document.getElementById('res');
   if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML = 'Impossivel contar'
        //window.alert('[ERROR] Faltam dados!')
   }else {
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if(p <=0){
            window.alert('Passo invalido! considerando PASSO 1')
            p = 1;
        }

        if (i<f){
            //Contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` \u{1F449} ${c}`
            }
        }else {
            //Contagem decrescente
            for(let c = i; c >= f; c-= p){
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }
        res.innerHTML += `${c} \u{1F3C1}`
        
   }
} 