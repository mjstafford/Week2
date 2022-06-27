function uploadPup(element) {
  console.log(element)
  element.innerText = "Uploaded! Thank you!"
}

function removeElement(element) {
  element.remove()
}

function pauseVideo(element) {
  element.pause()
}
function playVideo(element) {
  element.play()
}

function removeCookie() {
  let elementToRemove = document.querySelector("#cookie-box")
  elementToRemove.remove()
}