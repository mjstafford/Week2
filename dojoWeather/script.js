
let hideBox = () => {
  document.querySelector("#cookie").remove()    //completely removes the cookie div
}

let functionFactory = {
  "F": (temp) => Math.round((temp * (9 / 5) + 32)),
  "C": (temp) => Math.round((temp - 32) * 5 / 9)
}

function refactoredUpdateTemp(element) {
  let allTempElements = document.querySelectorAll(".low-temp, .high-temp")
  allTempElements.forEach(item => {
    if (element.value === "F") {
      item.innerHTML = functionFactory["F"](item.innerHTML)
    } else {
      item.innerHTML = functionFactory["C"](item.innerHTML).toPrecision(2)
    }
  })
}

// function updateTemp(element) {
//   debugger
//   let allHighElements = document.querySelectorAll(".high-temp")
//   let allLowElements = document.querySelectorAll(".low-temp")

//   if (element.value === "F") {
//     allHighElements.forEach(element => {
//       let oldHotTemp = element.innerText.split(" ")[0]
//       element.innerHTML = `${Math.round((oldHotTemp * 9 / 5) + 32)} <span class="hot-degree">&deg;</span>`
//     })

//     allLowElements.forEach(element => {
//       let oldColdTemp = element.innerText.split(" ")[0]
//       element.innerHTML = `${Math.round((oldColdTemp * 9 / 5) + 32)} <span class="cold-degree">&deg;</span>`
//     })
//   } else {
//     //convert back to C
//     allHighElements.forEach(element => {
//       let oldHotTemp = element.innerText.split(" ")[0]
//       element.innerHTML = `${Math.round((oldHotTemp - 32) * (5 / 9))} <span class="hot-degree">&deg;</span>`
//     })

//     allLowElements.forEach(element => {
//       let oldColdTemp = element.innerText.split(" ")[0]
//       element.innerHTML = `${Math.round((oldColdTemp - 32) * (5 / 9))} <span class="cold-degree">&deg;</span>`
//     })
//   }
// }