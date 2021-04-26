var result;
var operatorglobal;
var one;
var two;
// var third;
// var fourth;
// var fifth;
var searchtoggle = 0
var key;
function assignoperator(operator) {
    operatorglobal = operator
    one = Number(document.getElementById("one").value);
    two = Number(document.getElementById("two").value);
    // third = Number(document.getElementById("third").value);
    // fourth = Number(document.getElementById("fourth").value);
    // fifth = Number(document.getElementById("fifth").value);
    operate();
}
function operate() {
    var operators = { '+': function (a, b) { return a + b }, '-': function (a, b) { return a - b }, '/': function (a, b) { return a / b }, '*': function (a, b) { return a * b } };
    result = operators[operatorglobal](one, two);
    if (isNaN(result)) {
        document.getElementById("final").innerHTML = "Please enter a valid value (Hint : Do not enter alphabets and do not leave the first two values empty before pressing the operators.)";
    } else {
        document.getElementById("final").innerHTML = "The answer is " + Number(result);
        console.log("The answer is = " + Number(result))
    }
}
function clearfields() {
    document.getElementById("one").value = "";
    document.getElementById("two").value = "";
    // document.getElementById("third").value = "";
    // document.getElementById("fourth").value = "";
    // document.getElementById("fifth").value = "";
    document.getElementById("final").innerHTML = "";
}
function showsearch() {
    if (searchtoggle == 0) {
        document.getElementById("search").style.display = "block";
        document.getElementById("searchbtn").style.display = "block";
        ++searchtoggle
    } else {
        document.getElementById("search").style.display = "none";
        document.getElementById("searchbtn").style.display = "none";
        searchtoggle = 0
    }

}
function uniKeyCode(event) {
    key = event.keyCode;
    // console.log("The Unicode KEY code is: " + key);
    if (key == 81) {
        showsearch()
    } else if (key == 187) {
        assignoperator('+');
    } else if (key == 189) {
        assignoperator('-');
    } else if (key == 191) {
        assignoperator('/');
    } else if (key == 88) {
        assignoperator('*');
    } else if (key == 46) {
        clearfields();
    }
}