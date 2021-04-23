var result;

function addition() {
    var fno = document.getElementById("fno").value;
    var sno = document.getElementById("sno").value;
    result = Number(fno) + Number(sno);
    document.getElementById("final").innerHTML = result;
    console.log(result);


}

function subtract() {
    var fno = document.getElementById("fno").value;
    var sno = document.getElementById("sno").value;
    result = Number(fno) - Number(sno)
    document.getElementById("final").innerHTML = result;
}

function mult() {
    var fno = document.getElementById("fno").value;
    var sno = document.getElementById("sno").value;
    result = Number(fno) * Number(sno)
    document.getElementById("final").innerHTML = result;
}

function divi() {
    var fno = document.getElementById("fno").value;
    var sno = document.getElementById("sno").value;
    result = Number(fno) / Number(sno)
    document.getElementById("final").innerHTML = result;
}

