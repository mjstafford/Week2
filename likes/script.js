// part 1: (no "this" used in part 1)
// var count = 4
// function increaseLikes() {
//   let likesTag = document.querySelector("#likes1")
//   likesTag.innerText = `${count} like(s)`
//   count++
// }

//part 2 covers all updates to likes:
let counts = [4, 12, 9]

function increaseLikes(element) {
  //find sibling of current element clicked
  let previousSibling = element.previousElementSibling
  console.log(previousSibling)
  //modifying that element
  if (previousSibling.id === "likes1") {
    counts[0] += 1
    previousSibling.innerText = `${counts[0]} like(s)`
  } else if (previousSibling.id === "likes2") {
    counts[1] += 1
    previousSibling.innerText = `${counts[1]} like(s)`
  } else {
    counts[2] += 1
    previousSibling.innerText = `${counts[2]} like(s)`
  }
}