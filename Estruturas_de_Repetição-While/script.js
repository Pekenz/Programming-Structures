/*
While fará uma ação até que uma condição seja atingida.
Precisamos definir um fim para o loop para não termos um problema de loop infinito
Por exemplo:
*/

let x = 10

while(x > 0) {
    console.log(x);
    x = x - 1
}

//A cada 'loop' irá tirar -1 de X, que é 10. Então esta estrutura irá se repetir até x = 0 e depois parar.