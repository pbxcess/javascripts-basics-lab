let studentName = 'Princess';

let studentAge = 23;

let isEnrolled = true;

console.log(studentName);
console.log(studentAge);
console.log(isEnrolled);

let isLearning = true;//Boolean

let student = {
    firstName: "Princess Krish Anne",//string
    lastName: "Bernardino",//string
    age: 23 //number
}; //object

let sports = ["basketball", "soccer", "badminton"] //array

let message = `Hello, my name is ${student.firstName} and I enjoy playing sports like ${sports[0]}, ${sports[1]}, and ${sports[2]}.`;//String Interpretation

console.log(message)

let favFruit = 'My favourite fruit is Mango!';//string
console.log(favFruit);

//Arithmetic Operators
console.log(23 * 5); //Multiplication
console.log(23 - 5); //Subtraction
console.log(20/4); //Division
console.log(67 + 24); //Addition
console.log(89 % 3); //Modulus

console.log('The following are logs for comparison operators')
//Comparison Operators
console.log(56 > 89); //Greater than - should print false
console.log(345 < 789); //Less than - should print true
console.log(890 === 809); //equal to - should print false
console.log(780 !== 300); //Not equal - should print true

let x = 300
let y = 600

console.log("300" !== y)//Ineqality - true
console.log("300" === 3)// Strict equality - false

console.log(x < y)//Less than - true
console.log(y > x)//Greater than - true

console.log('The following are logs for logical operators')
//Logical Operators
let a = true;
let b = false;
let c = false;
console.log( a || b) //Logical OR - true
console.log(a && b)//Logical AND - false
console.log(b && c)// Logical AND - false
console.log(!a)// Logical  NOT - false
