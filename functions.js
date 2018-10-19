function name(argument){
	console.log("Hello! My name is " + argument + "! How are you doing today?");
}

function calc(number1, number2){
	console.log(number1 + " times " + number2 + " equals " + number1 * number2)
}

function capitalize(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = prompt("What is your favorite city?");
var capital = capitalize(city);
var yourCity = "Your favorite city is " + capital;

alert(yourCity);