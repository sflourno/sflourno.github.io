var startNum= parseInt(prompt("Enter in number: "));

//functions to add, subtract, multiply, and divide 
function addNum() {
    var otherNum = parseInt(prompt("Enter in number: "));
    var total= startNum + otherNum;
    return document.write("Total: "+ total)
}

function subtractNum() {
    var otherNum = parseInt(prompt("Enter in number: "));
    var total= startNum - otherNum;
    return document.write("Total: "+ total)
}

function multiplyNum() {
    var otherNum = parseInt(prompt("Enter in number: "));
    var total= startNum * otherNum;
    return document.write("Total: "+ total)
}

function divideNum() {
    var otherNum = parseInt(prompt("Enter in number: "));
    var total= startNum / otherNum;
    return document.write("Total: "+ total)
}

