let nome = prompt("Digite o seu nome: ");
let idade = prompt("Digite a sua idade: ");
let cnh = prompt("Possui CNH? S/N");

if(idade >= 18 && cnh == "S") {
    console.log("Parabéns " + nome +", você pode dirigir!")
}else if(idade >= 18 && cnh == "N") {
    console.log("Você não possui CNH, portanto não pode dirigir")
}else{
    console.log("Você não tem idade suficiente ou não possui CNH, portanto não pode dirigir!")
}