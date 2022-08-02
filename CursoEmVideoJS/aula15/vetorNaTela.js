let valores = [1,2,3,4,5,6,7,8]


//modo 1 de fazer array
/*for (let i = 0; i < valores.length; i ++){
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}
*/

//Modo simplificado da mesma coisa
for (let i in valores){
    console.log(`O valor de ${i} é ${valores[i]}`)
}