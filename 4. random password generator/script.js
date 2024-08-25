const passwordBox = document.getElementById("password");
const length = 16;

//the characters that are allowed to be in the password
const upperCase = "ABCDEFGHIJKLMNOPQRSTUFWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0987654321";
const symbol = "~!@#$%^&*()_+=-`|}{][;:/.,><?";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}



function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}