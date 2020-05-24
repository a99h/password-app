//Пароль генерируется путем рандомного числа в диапозоне от 10 до 20
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var totalChars = "";
var lowerChars = "", upperChars = "", symbolChars = "", numberChars = "";
var elPasswordResult;
var passwordLenght;
var passwordResult = document.getElementById("passwordResult");
var generateButton = document.getElementById("generateButton");
var copyButton = document.getElementById("copyButton");

//Получаем символы через ASII код
for (let i = 97; i < 123; i++ ) lowerChars += String.fromCodePoint(i);
console.log(lowerChars);

for (let i = 65; i < 91; i++) upperChars += String.fromCodePoint(i);
console.log(upperChars);

for (let i = 33; i < 48; i++) symbolChars += String.fromCodePoint(i);
for (let i = 58; i < 65; i++) symbolChars += String.fromCodePoint(i);
for (let i = 91; i < 97; i++) symbolChars += String.fromCodePoint(i);
console.log(symbolChars);

numberChars = "0123456789";
console.log(numberChars);


//Создаем и получаем DOM адрес элементов checkbox
var elLowerChars = document.getElementById(lowerChars);
var elUpperChars = document.getElementById(upperChars);
var elSymbolChars = document.getElementById(symbolChars);
var elNumberChars = document.getElementById(numberChars);


//Описываем события
generateButton.addEventListener("click", generatePassword, false);
copyButton.addEventListener("click", copyPassword, false);


//Описываем функции
function generatePassword() {
    var checkIt = elUpperChars.checked;
    if (checkIt) alert("Hallo die Welt!");
    else alert("Funktioniert nicht");
    elPasswordResult = "";
    passwordLenght = Math.floor(Math.random()*10) + 11;
    console.log(passwordLenght);
    for(let i = 0; i < passwordLenght; i++) {
        elPasswordResult += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    console.log(elPasswordResult);
    passwordResult.textContent = elPasswordResult;
}

function copyPassword() {
    const textarea = document.createElement('textarea');
    const password = elPasswordResult;

    if(!password) { return; }
    
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard');
}

