//No 'if', o programa vai executar um bloco de código SE algo acontecer, onde ALGO é a conddição imposta por um statement que resulta em um boolean (true ou false)

let idade = 19;

if (idade > 18) {
    console.log('Você é maior de idade');
}

if (idade > 25) {
    console.log('A idade é maior que 25');
}
//Se a condição não entrar no if, ele nem executa.

let nome = "Pedro"

if (nome == "Pedro" && idade > 18) {
    console.log("Liberado");
}