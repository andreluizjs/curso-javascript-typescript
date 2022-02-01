// Escreva uma função chamada ePaisagem que recebe dois argumentos, 
//largura e altura de uma imagem (number)
//Retorne true se a imagem estiver em modo paisagem.

const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1920,1080));


// function ePaisagem(largura, altura) {
//     if ( largura > altura ){
//         return true;
//     }
//     return false;
// }

// console.log(ePaisagem(100,20));
