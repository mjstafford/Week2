console.log("page loaded...");

function playVideo(element) {
  element.play()
  console.log(element)
}

function pauseVideo(element) {
  element.pause()
  // element.currentTime = 0
  console.log(element)
}