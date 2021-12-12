
var polyNum= prompt("Sly Observant Fox would like your polygon number: ");
document.write('<img src="images/fox-clipart_1_400x150.png">');

//function to prompt user for polygon number and validate that it is a number
function numValidation() {
    
    if (isNaN(polyNum) || polyNum<1 || polyNum>10 ) {
        prompt("ERROR: Sly Observant Fox would like your polygon number, number has to be between 1 and 10: ")

    } else{
        prompt("We thank you for your number!")
    }
    return polyNum;
}

numValidation();

function getShape() {

    if(polyNum = "1") {
        document.write("Your polygon is a henagon")
    }

    else if (polyNum ="2") {
        document.write("Your polygon is a digon")
    }

    else if (polyNum = "3") {
        document.write("Your polygon is a trigon")
    }

    else if (polyNum = "4") {
        document.write("Your polygon is a tetragon")
    }

    else if (polyNum = "5") {
        document.write("Your polygon is a pentagon")
    }

    else if (polyNum = "6") {
        document.write("Your polygon is a hexagon")
    }

    else if (polyNum = "7") {
        document.write("Your polygon is a heptagon")
    }

    else if (polyNum = "8") {
        document.write("Your polygon is an octagon")
    }

    else if (polyNum = "9") {
        document.write("Your polygon is a nonagon")
    }

    else if (polyNum = "10") {
        document.write("Your polygon is a decagon")
    }
}