//.........................keys and values..................
let content = {Name:"blackflux",
number:"9597465677"}
var x = "";
var y = "";  
myfunction(); 
function myfunction(){
x = Object.keys(content);
y = Object.values(content);
}
console.log("The value of x is: " + x);
console.log("The value of y is: " + y);

//.........................palindrome or not..................
let  word='madam';
checkPalindrome(word);
function checkPalindrome(word) {
 let  x = word.split('');
 let y = x.reverse();
 let z = y.join('');
(word===z)?console.log("true"):console.log("false");
}