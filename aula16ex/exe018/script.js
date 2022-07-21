let num = document.querySelector('input#fnum')
let lista = document.getElementById('flista')
let res = document.querySelector('div#res')
let valores = []

function isNumber(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}
function adicionar(){
    if (isNumber(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores para finalizar!')
    }else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let i in valores){
            soma += valores[i]
            if (valores[i] > maior)
            maior = valores[i]

            if (valores[i] < menor)
            menor = valores[i]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>ao todo temos ${total} valores cadastrados </p>` 
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>` 
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>` 
        res.innerHTML += `<p>A soma do valor informado foi ${soma}.</p>` 
        res.innerHTML += `<p>A media do valor informado foi ${media}.</p>` 

    }
}