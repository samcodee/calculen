var result;

function addition() {
    var fno = document.getElementById("fno").value;
    var sno = document.getElementById("sno").value;
    result = Number(fno) + Number(sno);
    console.log(result);


}

function subtract() {
    var fno = document.getElementById("fno").value;
    var sno = document.getElementById("sno").value;
    result = Number(fno) - Number(sno)
}

function mult() {
    var fno = document.getElementById("fno").value;
    var sno = document.getElementById("sno").value;
    result = Number(fno) * Number(sno)
}

function divi() {
    var fno = document.getElementById("fno").value;
    var sno = document.getElementById("sno").value;
    result = Number(fno) / Number(sno)
}

function equalsFunction() {
    document.getElementById("final").innerHTML = result;

};

