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


let accountName = "Moyosore Folarin"
let accountNumber = "1234567890"
let balance = 100000
let bank = "GTB"

let beneficiaryName =  "Olumide Folarin"
let beneficiaryAccount = "0120683838"
let beneficiarybank = "UBA"

function getOriginBank() {
let sender = `Account Name: ${accountName} \nAccount Number: ${accountNumber} \nBalance: ${balance} \nBank: ${bank}`
  return sender
}

function getBeneficiaryDetails (){
let receiver = `Beneficiary Name: ${beneficiaryName} \nBeneficiary Account Number: ${beneficiaryAccount} \nBeneficiary Bank: ${beneficiarybank}`

  return receiver
}

function transferFunds(amountToTransfer){
if(balance > amountToTransfer){
    let newBalance = balance - amountToTransfer
    balance = newBalance
  
console.log("Transfer Successful")
console.log(`Amount: #${amountToTransfer}`)
  
  return `Balance: #${balance}` 

}else{
  
  console.log("Insufficient Balance")

}
  
  return `Balance: ${balance}` 
}

console.log(getOriginBank())
console.log(getBeneficiaryDetails ())
console.log(transferFunds(20000))


