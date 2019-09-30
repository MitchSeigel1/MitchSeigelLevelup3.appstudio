let response = prompt("Would you like to use the Home Payment Calculatoor or Car Payment Calculator?")

calculatorLoop (resopnse = "yes") {

let choice = prompt("Which loan calculator would you like to use? (Car or Home)")
let value = Number(prompt("What is the book value of the " + (choice) + "? (enter the raw number)"))
let intrest = Number(prompt("What is the rate of intrest on the loan? (enter in decimal form)"))
let term = Number(prompt("what is the term on the loan? (raw number)"))

intrest = intrest + 1

if (choice == "car") {
function carLoanPayment(value, intrest, term) {
const carPay = (value * intrest) / term
return carPay
  }
alert("The monthly payment on your car will be " + (carLoanPayment(value, intrest, term)))

} 
else if (choice == "home") {
function homeLoanPayment(value, intrest, term) {
const homePay = (value * intrest) / (term * 12)
return homePay
  }
alert("Your monthly house payment will be " + (homeLoanPayment(value, intrest, term)))

} else {
  alert("Calculator Terminated. Have a nice day!")
  break calculatorLoop;
  }
}