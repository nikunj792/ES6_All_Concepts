//In javascript we have only global and local scope but using let we will have block scoping.

//Incase of var keyword.
/* if(1){
	var age = 25;
	console.log("var age is ",age);
}
console.log("var age is outside block",age); // Will print the age as 25 */

//Incase of let keyword.
/* if(1){
	let age = 26;
	console.log("let age is ",age);
}
console.log("let age is outside block",age); //Will give error as age is not defined. */

//Destructuring of array

let a = [1,2,3,4,5,6,7,8];
let [c,d] = [1,2,...a];
let b = [c,d,...a];
console.log("Value of C",c);
console.log("Value of D",d);
console.log("Value of B",b);

			
	