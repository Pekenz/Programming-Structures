//As vezes precisamos parar o loop antes que complete todo seu ciclo, para isso utilizamos o Break.
//Ele não é tão comum de se usar, porém pode ser bastante útil em algumas situações. Exemplo:

let nome = 'Pedro'

for(i = 0; i < 10; i = i + 1){
    if(i == 3){
        nome = 'Lucas';
    }
    if(i == 5 && nome == 'Lucas'){
        console.log('Seu nome agora é: ' + nome + ' podemos parar')
        break;
    }
    console.log(i);
}