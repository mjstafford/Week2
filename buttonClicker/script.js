let loggedOut = true;

function addDefButton(element) {
  element.className += " hidden"
}

function logButton(element) {
  if (loggedOut) {
    element.value = "Sign Out"
  } else {
    element.value = "Login"
  }
  loggedOut = !loggedOut
}