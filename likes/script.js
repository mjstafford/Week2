var count = 4

function increaseLikes() {
  let likesTag = document.querySelector("#likes")
  likesTag.innerText = `${count} like(s)`
  count++
}