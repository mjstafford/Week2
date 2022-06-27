// var count = 4

// part 1: (no "this" used in part 1)
// function increaseLikes() {
//   let likesTag = document.querySelector("#likes")
//   likesTag.innerText = `${count} like(s)`
//   count++
// }

let counts = [4, 12, 9]

//part 2:
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