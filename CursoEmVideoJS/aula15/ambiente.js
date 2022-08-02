let num = [1,2,4,9]
num.push(5)
num.sort()
console.log(`Nosso vetor é: ${num}`)
console.log(` O vetor tem ${num.length} posições`)
let i = num.indexOf(3)
if (i == -1){
    console.log('Numero nao encontrado!')
}else {
    console.log(`O valor está na posição: ${i}`)
}