function contador(){
    let num = document.getElementById('num');
    let sel = document.getElementById('sel');
    if (num.value.length == 0 ){
        window.alert('Por favor digite um numero!');
    }else{
        let n = Number(num.value);
        let valor = []
        if (n <= 100 && n >= 1){
            for (let i in valor){
                let item = document.createElement('option');
                item.text = `numero ${n} adicionado na posição ${i}`
                sel.appendChild(item)
            }
            
        }else{
            window.alert('Por favor digite um numero entre 1 e 100!')
        }
    }
}