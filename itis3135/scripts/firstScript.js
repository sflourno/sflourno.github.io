var userName = prompt("What is your name?");
var userMessage= prompt(" How are you doing today?");
var today = new Date(); 
document.write("Today is "+ today.toDateString()+". The time is "+today.getHours() 
+":"+ today.getMinutes()+". The Sly Observant Fox welcomes you, "+userName+"!"
+" We're glad you are doing "+ userMessage+"!")

document.write('<img src="images/fox-clipart_1_400x150.png">');

function callPhone () {

    var phoneNum = "487-985-0531";
    document.write(phoneNum)
}

function getQuote () {
    var service = prompt("What service do you want: marital, blackmail, or background check? ")
    if (service= "marital") {
        document.write("$50/hr")
    }

    else if (service= "blackmail") {
        document.write("$150/hr")
    }

    else if (service= "background check") {
        document.write("$100/hr")
    }
}

function sendEmail () {
    var email = "privateinvest@slyobservantfox.com"
    document.write(email)
}

function getAddress () {
    var address = "266 Sneaky Lane, Spy City, NY, 36781"
    document.write(address)
}

function createSpyName () {
    var spyName = prompt("Type this alias you want to use to secretly contact us with!")
    document.write("Hi! thank you for creating your alias: "+ spyName)
}
