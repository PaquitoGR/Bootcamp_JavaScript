// Cuadrado

var square = (n, char) => {
    console.log("\nCuadrado:")    
    for (var i = 0; i < n; i++){
        var rowChar = "";
        for (var j = 0; j < n; j++){
            rowChar += char;
        } 
        console.log(i, rowChar);
    }
 }

 square(5, "*");


// Cuadrado con Borde

var squareWithBorder = (n, charBorder, charInner) => {
    console.log("\nCuadrado con borde:") 
    for (var i = 0; i < n; i++){
        var rowChar = "";
        for (var j = 0; j < n; j++){
            rowChar = i === 0 || i === n - 1 || j === 0 || j === n - 1 ? rowChar += charBorder : rowChar += charInner;            
        } 
        console.log(i, rowChar);
    }
 }

 squareWithBorder(5,"B", "A");


// Cuadrado Diagonal Left-Right

var squareDiagonalLR = (n, charDiagonal, charUp, charDown) => {
    console.log("\nCuadrado diagonal L-R:")
    for (var i = 0; i < n; i++){
        var rowChar = "";
        for (var j = 0; j < n; j++){
            if (i === j) {
                rowChar += charDiagonal;
            } else {
                rowChar = i > j ? rowChar + charDown : rowChar + charUp;
            }
        }
        console.log(rowChar);
    }
}

squareDiagonalLR(5, "\\", "A", "B");


// Cuadrado Diagonal Right-Left

var squareDiagonalRL = (n, charDiagonal, charUp, charDown) => {
    console.log("\nCuadrado diagonal R-L:")
    for (var i = 0; i < n; i++){
        var rowChar = "";
        for (var j = 0; j < n; j++){
            if (i + j === n - 1) {
                rowChar += charDiagonal;
            } else {
                rowChar = i + j > n - 1 ? rowChar + charDown : rowChar + charUp;
            }
        } 
        console.log(rowChar);
    }
 }

 squareDiagonalRL(5, "/", "A", "B");


// Medio Diamante

var halfDiamond = (n, char) => {
    console.log("\nMedio diamante:")
    var rowChar = "";
    for (var i = 0; i < n * 2 - 1; i++){
        rowChar = i < n ? rowChar + char : rowChar.slice(0, -1);
        console.log(rowChar);
    }
}

halfDiamond(5, "*");


// Pirámide

var pyramid = (n, char) => {
    console.log("\nPirámide:")
    for (var i = 0; i < n; i++){
        var rowChar = "";
        for (var j = 0; j < n + i; j++){
            rowChar = j + 1 < n - i ? rowChar + " " : rowChar + char;
        }
        console.log(rowChar);
    }
}

pyramid(5, "*");


// Diamante

var diamond = (n, char) => {
    console.log("\nDiamante:")
    for (var i = 0; i < n * 2 - 1; i++){
        var rowChar = "";
        for (var j = 0; j < n * 2 - 1; j++){
            if (i < n) {
                rowChar = (j < n - i - 1 || j > n + i - 1) ? rowChar + " " : rowChar + char;
            } else {
                rowChar = (j < i - n + 1 || j > n * 3 - i - 3) ? rowChar + " " : rowChar + char;
            }
        }
        console.log(rowChar);
    }
}

diamond(5, "*");

