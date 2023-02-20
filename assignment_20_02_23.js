// 1. Return the Sum of Two Numbers. 
// Write a function that takes two numbers as 
// arguments and returns their sum.
// samples below
// addition(3, 2) ➞ 5
// addition(-3, -6) ➞ -9
// addition(7, 3) ➞ 10

function sumOfTwoNumbers(firstNumber, secondNumber) {
    let sum = firstNumber + secondNumber
    return sum

}

//2. Return the Next Number from the Integer Passed
// Write a function that takes a number as an argument, increases the number by 1 and returns the result.
// samples below
// nextNumber(0) ➞ 1
// nextNumber(9) ➞ 10
// nextNumber(-3) ➞ -2 

function nextNumber(number) {
    let result = number + 1
    return result
}


// 3. Convert Age to Days
// Write a function that takes the age in years and returns the age in days.
// samples below
// calcAge(65) ➞ 23725
// calcAge(0) ➞ 0
// calcAge(20) ➞ 7300

function calcAge(ageInYear) {
    //ageInYear * 365
    let noOfDaysInAYear = 365
    let ageInDays =  ageInYear * noOfDaysInAYear
    
    return ageInDays

}

// 4. Power Calculator
// Write a function that takes voltage and current and returns the calculated power. NB: power = voltage * current
// samples below
// circuitPower(230, 10) ➞ 2300
// circuitPower(110, 3) ➞ 330
// circuitPower(480, 20) ➞ 9600

function powerCalculator(voltage, current) {
    let power = voltage * current
    return power
}


// 5. Return Something to Me!
// Write a function that returns the string "something" joined with a space " " and the given argument a.
// sample below
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"
// giveMeSomething("Bob Jane") ➞ "something Bob Jane"
// giveMeSomething("something") ➞ "something something"

function giveMeSomething(something) {
    let result =  "something " + something
    return result
}


// 6. Concatenate First and Last Name into One String
// Write a function that takes 2 parameters firstName and lastName, return a single string in the format "last, first."
// sample below
// concatName("Johnny", "Bravo") ➞ "Last, First"
// concatName("John", "Doe") ➞ "Doe, John"
// concatName("Mary", "Jane") ➞ "Jane, Mary"

function concatName(firstName, lastName) {
    let response = " \" " + lastName + ", " + firstName + " \" "
    
    return response
}

// 7. Return the Remainder from Two Numbers
// Write a function that takes two numbers as arguments and returns the remainder of the first number divided by the second number.
// sample below
// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9

function remainder(num1, num2) {

    let res = num1 % num2
    return res
}


// 8. Return Negative
// Write a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.
// sample below
// returnNegative(4) ➞ -4
// returnNegative(15) ➞ -15
// returnNegative(-4) ➞ -4
// returnNegative(0) ➞ 0

function returnNegative(number) {
    //todo : later
}

// 9. String and Number Conversions
// Write a function that takes a string and returns it as an integer.
// sample below
// intToString(4) ➞ "4"
// stringToInt("4") ➞ 4

function intToString(number){
    
    let result = String(number)
    return result
}



function stringToInt(valueInString){
    
    let result = Number(valueInString)   
    return result
}

// 10. Four Passengers and a Driver 
//(Here a bit problem solving, you have to think of the solution before you code)
// A typical car can hold four passengers and one driver, allowing five 
//people to travel around.Given n number of people, return how many cars are needed 
//to seat everyone comfortably.
// sample below

// carsNeeded(5) ➞ 1
// carsNeeded(11) ➞ 3
// carsNeeded(0) ➞ 0



function carsNeeded(numberOfPassenger) {
    let result = Math.ceil(numberOfPassenger / 5)
    return result
}



// 11. Return the Total Number of Parameters (Here's another bit of problem solving)
// Write a function that returns the total number of parameters passed in.
// sample below
// numberArgs("a", "b", "c") ➞ 3
// numberArgs(10, 20, 30, 40, 50) ➞ 5
// numberArgs(x, y) ➞ 2
// numberArgs() ➞ 0


function numberArgs() {
    let result = arguments.length
    return result
}