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
    var operators = { '+': function (a, b, c, d, e) { return a + b + c + d + e }, '-': function (a, b, c, d, e) { return a - b - c - d - e }, '/': function (a, b, c, d, e) { return a / b / c / d / e }, '*': function (a, b, c, d, e) { return a * b * c * d * e}};
    document.getElementById("final").innerHTML = operators[operatorglobal](one, two, third, fourth, fifth);
}