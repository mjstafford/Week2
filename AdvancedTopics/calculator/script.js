let num1 = ""
let num2 = ""
let opperator = ""
let isOperating = false
let total
let display = document.querySelector("#display")

let opperatorFunctions = {
  "*": (num1, num2) => num1 * num2,
  "+": (num1, num2) => num1 + num2,
  "-": (num1, num2) => num1 - num2,
  "/": (num1, num2) => num1 / num2
}

function press(num) {
  if (!isOperating) {
    num1 += num
    display.innerText = num1
  } else {
    num2 += num
    display.innerText = `${num1} ${opperator} ${num2}`
  }
}

function setOP(opp) {
  opperator = opp
  display.innerText = `${num1} ${opperator}`
  isOperating = true
}

function calculate() {
  total = opperatorFunctions[opperator](num1, num2)
  display.innerText = total
  num1 = ""
  num2 = ""
  isOperating = false
}

function clr() {
  num1 = ""
  num2 = ""
  isOperating = false
  display.innerText = "0"
}