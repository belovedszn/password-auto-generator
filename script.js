

const passwordBox = document.querySelector(".password");
const lenght = 12;
const passwordBtn = document.querySelector(".passwordBtn");
const copy = document.querySelector(".copy");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+?|{}[]:;></";

const allCharacters = upperCase + lowerCase + number + symbol;

function createPassword () {
    let password = "";

    // it will generate any random num/alp in each line and add together
    // it will only add 4 random character

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // this will continue to add a random character until till reaches 12
    while (lenght > password.length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];   
    }
    passwordBox.value = password;
}

passwordBtn.addEventListener('click', ()=> {
    createPassword();
})

copy.addEventListener('click', ()=> {
    copyPassword();
})

// for the copy function 

function copyPassword () {
    passwordBox.select();
    document.execCommand("copy");
}