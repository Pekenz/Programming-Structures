//Quando há a necessidade de vários IF's, podemos utlizar o switch/case. Para sairmos de um case, podemos utilizar o 'break'.
//Também podemos inserir uma expressão default, pra caso nenhum valor for correspondido. (Muitos programadores optam por vários if's.)

let nome = 'Pedro'

switch(nome){
    case 'Pedro':
        console.log('Seu nome é ' + nome);
        break;
    case 'João':
        console.log('Seu nome é ' + nome);
        break;
    default:
        console.log('O nome não foi encontrado.');
        break;
}