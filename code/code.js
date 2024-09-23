const generatePasswordButton = document.querySelector("button")
const outputLabel = document.querySelector("p")

generatePasswordButton.addEventListener("click", () => {
    outputLabel.innerText = generatePassword(12)
})

function generatePassword(length){
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
    const numbers = [0,1,2,3,4,5,6,7,8,9]
    let combined = [...alphabet,...numbers]

    let password = ""
    for (let i = 0; i < length; i++) {
        let randomInt = Math.floor(Math.random() * (combined.length))
        password += combined[randomInt]
    }
   
    return password
}