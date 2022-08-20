const result = document.querySelector(".result");
const length = document.querySelector(".length")
const uppercase = document.querySelector(".uppercase");
const lowercase = document.querySelector(".lowercase");
const symbol = document.querySelector(".symbols");
const number = document.querySelector(".numbers")
const button = document.querySelector(".generate");

const numbers = [1,2,3,4,5,6,7,8,9,0];
const symbols = ["@", "#", "$", "%"];

const characterCodes = Array.from(Array(26)).map( (_, i) => i + 97)
const lowercaseLetters = characterCodes.map(code => String.fromCharCode(code))
const uppercaseLetters = characterCodes.map(code => String.fromCharCode(code).toUpperCase())

const generatePassword = (length, hasNumbers, hasSymbols, hasLowerCase, hasUpperCase) => {
    const availableCharacters = [
        ...(hasSymbols ? symbols : []),
        ...(hasNumbers ? numbers : []),
        ...(hasUpperCase ? uppercaseLetters : []),
        ...(hasLowerCase ? lowercaseLetters : []),
    ];

    let password = "";

    if(availableCharacters.length === 0) return "";

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * availableCharacters.length)
        password += availableCharacters[randomIndex];
    }
    return password;
}

button.addEventListener("click", () => {
    result.innerHTML = generatePassword(length.value, number.checked, symbol.checked, lowercase.checked, uppercase.checked);
})