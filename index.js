const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15
let generateButton = document.getElementById("generate-button")
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")

generateButton.addEventListener("click", generateRandomPassword)
generateButton.addEventListener("click", generateRandomPasswordTwo)

passwordOne.addEventListener("click", copyToClipboard)
passwordTwo.addEventListener("click", copyToClipboard2)

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return passwordOne.textContent = randomPassword
}

function generateRandomPasswordTwo() {
    let randomPasswordTwo = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordTwo+= getRandomCharacter()
    }
    return passwordTwo.textContent = randomPasswordTwo
} 
function copyToClipboard(){
    let copiedText = document.getElementById("password-one")
    copiedText = passwordOne.textContent
    navigator.clipboard.writeText(copiedText)
    alert("Copied Text: " + copiedText)
}

function copyToClipboard2(){
    let copiedText2 = document.getElementById("password-two")
    copiedText2 = passwordTwo.textContent
    navigator.clipboard.writeText(copiedText2)
    alert("Copied Text: " + copiedText2)
}


const generatedPasswordOne = generateRandomPassword()

console.log("Here is a random password: ", generatedPasswordOne)

