var result;
var operatorglobal;
var one;
var two;
var third;
var fourth;
var fifth;
function assignoperator(operator) {
    operatorglobal = operator
    one = Number(document.getElementById("one").value);
    two = Number(document.getElementById("two").value);
    third = Number(document.getElementById("third").value);
    fourth = Number(document.getElementById("fourth").value);
    fifth = Number(document.getElementById("fifth").value);
    operate();
}
function operate() {
    var operators = { '+': function (a, b, c, d, e) { return a + b + c + d + e }, '-': function (a, b, c, d, e) { return a - b - c - d - e }, '/': function (a, b, c, d, e) { return a / b / c / d / e}, '*': function (a, b, c, d, e) { return a * b * c * d * e } };
    result = operators[operatorglobal](one, two, third, fourth, fifth);
    if (isNaN(result)) {
        document.getElementById("final").innerHTML = "Please enter a valid value (Hint : Do not enter alphabets and do not leave the first two values empty before pressing the operators.)";
    }else{
        document.getElementById("final").innerHTML = "The answer is " + Number(result);
        console.log("The answer is = " + Number(result))
    }
}
function clearfields() {
    document.getElementById("one").value = "";
    document.getElementById("two").value = "";
    document.getElementById("third").value = "";
    document.getElementById("fourth").value = "";
    document.getElementById("fifth").value = "";
    document.getElementById("final").innerHTML = "";
}