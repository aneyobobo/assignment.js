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