// ATM
// *******
  
// let accountName = "Moyosore Folarin"
// let accountNumber = "1234567890"
// let balance = 0.00

// function getCustomerDetails() {
// let accountDetails = `Account Name: ${accountName} \nAccountNumber: ${accountNumber}`

//   return accountDetails
  
// }

// function deposit(amountToDeposit){
//   let newBalance = balance + amountToDeposit
//   balance = newBalance


//   return `Balance: #${newBalance}`
// }

// function withdrawal(amountToWithdraw){
  
//   if(balance > amountToWithdraw ){
//   let Newbalance = balance - amountToWithdraw
//     balance = Newbalance
    
//     console.log(`Thanks for Banking with us, pls take ur cash: #${amountToWithdraw}`)
    
//   }else{
    
//     console.log("Kindly Fuck OFF")
    
//   }

//   return `Balance:  #${balance}`
// }

// console.log(getCustomerDetails())
// console.log(deposit(50000))
// console.log(withdrawal(49900))



// TRANSFER
// ***********


// let accountName = "Moyosore Folarin"
// let accountNumber = "1234567890"
// let balance = 100000
// let bank = "GTB"

// let beneficiaryName =  "Olumide Folarin"
// let beneficiaryAccount = "0120683838"
// let beneficiarybank = "UBA"

// function getOriginBank() {
// let sender = `Account Name: ${accountName} \nAccount Number: ${accountNumber} \nBalance: ${balance} \nBank: ${bank}`
//   return sender
// }

// function getBeneficiaryDetails (){
// let receiver = `Beneficiary Name: ${beneficiaryName} \nBeneficiary Account Number: ${beneficiaryAccount} \nBeneficiary Bank: ${beneficiarybank}`

//   return receiver
// }

// function transferFunds(amountToTransfer){
// if(balance > amountToTransfer){
//     let newBalance = balance - amountToTransfer
//     balance = newBalance
  
// console.log("Transfer Successful")
// console.log(`Amount: #${amountToTransfer}`)
  
//   return `Balance: #${balance}` 

// }else{
  
//   console.log("Insufficient Balance")

// }
  
//   return `Balance: ${balance}` 
// }

// console.log(getOriginBank())
// console.log(getBeneficiaryDetails ())
// console.log(transferFunds(20000))



// Assignment
// ***********

// 1. Write a program to check if a year is leap year or not.
// Nb: If a year is divisible by 4, then it is leap year.
// Sample below
// isLeapYear(2000) - True
// isLeapYear(1998) - False


// function isLeapYear(year){
//     if(year % 4 === 0){
    
//       return true
      
//      } else{
//         return false
//       }
    
//     }
  
//     console.log(isLeapYear(2000))


// 2. Write a function that accepts 2 parameters,length and breadth 
// of a rectangle, then checks if it is square or not.
// it should return  "This is a square " if the length and square are equal
// and "This is a rectangle" if they are not
// Sample below
// isSquareOrRectangle(5,9) - This is a rectangle
// isSquareOrRectangle(8,8) - This is a Square

// function findArea(length,breadth){
// if(length > breadth){

//   return "This is a rectangle"
// }else{

//   return "This is a square"
// }
  
// }
// console.log(findArea(10,6))

// 3. Write a function that allows a shop to give a discount of 10% 
// if the cost of purchased quantity is more than 1000.
// The function should take a parameter for the  quantity
// You can assume 1 unit quantity will cost 100 dollars.
// Output the total cost for the user.

// function getDiscount(unit,quantity){
// if(quantity > 1000){
// let unit = (10/100) * 1000
//   let bonus = unit + quantity
  
//   return `Thanks for shopping with us, your Bonus is ${bonus} `
  
// }else{

//   return "You are not eligible"
// }
  
// }

// console.log(getDiscount(10,2000))




// 4.  Profitable Gamble
// Create a function that takes three arguments prob, prize, pay 
// and returns true if prob * prize > pay; otherwise return false.
// sample below
// profitableGamble(0.2, 50, 9) ➞ true
// profitableGamble(0.9, 1, 2) ➞ false
// profitableGamble(0.9, 3, 2) ➞ true

// function profitableGamble(prob, prize, pay){
// if(prob * prize > pay){
  
//   return true
  
// }else{
//   return false
// }

// }

// console.log(profitableGamble(0.9, 1, 2))



// 5. Two Makes Ten
// Create a function that takes two arguments.
//  Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

// sample below
// makesTen(9, 10) ➞ true
// makesTen(9, 9) ➞ false
// makesTen(1, 9) ➞ true

// function makesTen(a,b){
//   if(a+b >= 10){
//   return true
// }else{
//   return false
// }

// }
// console.log(makesTen(9,10))


// 6. Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// Sample below
// comp("AB", "CD") ➞ true
// comp("ABC", "DE") ➞ false
// comp("hello", "edabit") ➞ false

function comp(y,z) {
  let character = y.lenth = z.length
   
if(character  2 ){
  
  return true
}else{
    return false
  }

}
console.log(comp("ABc","de"))

// 7. Movie Theatre Admittance
// Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
// The person is at least 15 years old.
// They have parental supervision.
// The function accepts two parameters, age and isSupervised. Return a boolean.
// Sample below
// acceptIntoMovie(14, true) ➞ true
// acceptIntoMovie(14, false) ➞ false
// acceptIntoMovie(16, false) ➞ true


// function acceptIntoMovie(age,isSupervised){
  
// let acceptance = true
  
// if(age >= 15 || isSupervised === acceptance ){
  
//   return true
//   }else{
//   return false
//   }
// }

// console.log(acceptIntoMovie(14,true))
// console.log(acceptIntoMovie(14,false))
// console.log(acceptIntoMovie(16,false))



// 8. Is the String Odd or Even?
// Given a string, return true if its length is even or false if the length is odd.

// Sample below
// oddOrEven("apples") ➞ true
// // The word "apples" has 6 characters.
// // 6 is an even number, so the program outputs true.

// oddOrEven("pears") ➞ false
// // "pears" has 5 letters, and 5 is odd.
// // Therefore the program outputs false.

// oddOrEven("cherry") ➞ true


// function oddOrEven (x){
//  let fruit = x.length
// if(fruit % 2 === 0){
  
// return true
  
//   }else{
//   return false
//   }
// }
// console.log(oddOrEven ("pears"))

// 9. Is the Last Character an "N"?
// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

// Sample below
// isLastCharacterN("Aiden") ➞ true
// isLastCharacterN("Piet") ➞ false
// isLastCharacterN("Bert") ➞ false
// isLastCharacterN("Dean") ➞ true

// function isLastCharacterN(mrN){
//   let Aiden 

  
// 