
var randomPick = () => {
    var num = document.getElementById("num").value;
    var min = document.getElementById("min").value;
    var max = document.getElementById("max").value;
    
    var numRange = Math.floor(Math.random() * (parseInt(max) + 1));
    console.log(numRange);

}

document.getElementById("generate-btn").addEventListener("click", randomPick);