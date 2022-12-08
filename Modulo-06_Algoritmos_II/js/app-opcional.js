var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

// Encripta el mensaje
var encrypt = () => {
    var decryptedText = document.getElementById("decrypted").value.toLowerCase();
    var encryptedText = "";
    for (var letter of decryptedText) {
        encryptedText += plainAlphabet.indexOf(letter) > -1 ? encryptedAlphabet[plainAlphabet.indexOf(letter)] : letter;     
    }
    document.getElementById("encrypted").value = encryptedText;
}

// Desencripta el mensaje
var decrypt = () => {
    var encryptedText = document.getElementById("encrypted").value.toLowerCase();
    var decryptedText = "";
    for (var letter of encryptedText) {
        decryptedText += encryptedAlphabet.indexOf(letter) > -1 ? plainAlphabet[encryptedAlphabet.indexOf(letter)] : letter;     
    }
    document.getElementById("decrypted").value = decryptedText;
}

// Event listeners para los botones
document.getElementById("encrypt-btn").addEventListener("click", encrypt);
document.getElementById("decrypt-btn").addEventListener("click", decrypt);
