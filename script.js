// script.js

function moverCaixa() {
    const caixa = document.getElementById("minhaCaixa");
    const limiteX = window.innerWidth - 200;
    const limiteY = window.innerHeight - 100;

    // Calcula uma posição aleatória dentro da área central
    const margemX = 50; // Margem horizontal
    const margemY = 50; // Margem vertical
    const posX = Math.random() * (limiteX - margemX * 2) + margemX;
    const posY = Math.random() * (limiteY - margemY * 2) + margemY;

    caixa.style.transform = `translate(${posX}px, ${posY}px)`;
}
