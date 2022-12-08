var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

// Encripta el mensaje
var encrypt = () => {
    var decryptedText = document.getElementById("decrypted").value.toLowerCase();
    var encryptedText = "";
    for (var letter of decryptedText) {
        encryptedText += (indexSeek(plainAlphabet, letter) > -1) ? encryptedAlphabet[indexSeek(plainAlphabet, letter)] : letter;     
    }
    document.getElementById("encrypted").value = encryptedText;
}

// Desencripta el mensaje
var decrypt = () => {
    var encryptedText = document.getElementById("encrypted").value.toLowerCase();
    var decryptedText = "";
    for (var letter of encryptedText) {
        decryptedText += (indexSeek(encryptedAlphabet, letter) > -1) ? plainAlphabet[indexSeek(encryptedAlphabet, letter)] : letter;     
    }
    document.getElementById("decrypted").value = decryptedText;
}

// Devuelve el indice de la ocurrencia del caracter en el string, o -1 si no existe
var indexSeek = (str, char) => {
    for (var i = 0 ; i < str.length ; i++) {
        if (str[i] === char) return i;
    }
    return -1;
}

// Event Listeners para los botones
document.getElementById("encrypt-btn").addEventListener("click", encrypt);
document.getElementById("decrypt-btn").addEventListener("click", decrypt);