//Para pularmos a execução do loop, uitilizamos o continue. Isto é, dependendo da nossa lógica podemos pular o resto da execução do loop utilizando 'Continue'.

 let x = 0

 while(x < 11){
     x = x + 1;
     if(x % 2 == 0){
         continue;
     }
     console.log(x);
     x = x + 1;
}

// for(let x = 0; x < 11; x = x + 1){
//     if(x % 2 == 0){
//         continue;
//     }
//     console.log(x);
//     x = x + 1;
// }