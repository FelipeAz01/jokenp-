const optionsImages = document.querySelectorAll(".options-image")
const container = document.querySelector(".container")
const resultText = document.querySelector(".result-text")
const userResult = document.querySelector(".user-result img")
const computerResult = document.querySelector(".computer-result img")


const computerSrcImages = ["images/pedra.png", "images/papel.png", "images/tesoura.png"];


const winner = {
    RR: "Empate",
    RP: "Computador",
    RS: "Você",
    PP: "Empate",
    PR: "Você",
    PS: "Computador",
    SS: "Empate",
    SR: "Computador",
    SP: "Você"

}

/*
0 - (R)Rock - pedra
1 - (P)Paper - papel
2 - (S)Scissors - tesoura

Pedra - ganha de Tesoura, perde para papel
Papel - Ganha de pedra, perde para tesssoura
Tesoura - Ganha de papel, perde para pedra
*/


function handleOptionClick(event) {
    const clickedImage = event.currentTarget
    const userIndex = Array.from(optionsImages).indexOf(clickedImage)



    container.classList.add("start")
    resultText.innerHTML = "Carregando..."

    userResult.src = computerResult.src = "images/pedra.png"


    setTimeout(() => {
        container.classList.remove("start")

        userResult.src = computerSrcImages[userIndex]

        const randomNumber = Math.floor(Math.random() * computerSrcImages.length)
        computerResult.src = computerSrcImages[randomNumber]

        const userValue = ['R', 'P', 'S'][userIndex]
        const computerValue = ['R', 'P', 'S'][randomNumber]
        const userComputerResult = userValue + computerValue
        const finalResult = winner[userComputerResult]

        resultText.innerHTML = userValue === computerValue ? 'Empate' : finalResult + ' Ganhou!'
    }, 2000); //1000ms = 1s
}







optionsImages.forEach(img => {
    img.addEventListener("click", handleOptionClick)
})
