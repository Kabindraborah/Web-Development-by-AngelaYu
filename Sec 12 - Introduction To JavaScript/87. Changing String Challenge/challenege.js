var name = prompt("What is your name?");

var firstChar = name.slice(0,1);
var upperCaseF = firstChar.toUpperCase();

var rest = name.slice(1,name.length);
var lowerCaseRest = rest.toLowerCase();

var capitalizedName = upperCaseF + lowerCaseRest;

alert("Hello, "+ capitalizedName);