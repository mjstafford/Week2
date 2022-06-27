console.log("page loaded...");

function changeName() {
  let newName = prompt("Please enter new profile name:")
  let profileNameTag = document.querySelector(".card-body h1")
  if (newName === null) {
    alert("canceled")
  } else if (!newName || newName.trim().length === 0) {
    alert("need to add a real name!")
  } else {
    profileNameTag.innerHTML = newName
  }
}

function approveConnection(element) {
  //decrease requests connections #
  let numConnectionsRequestsElement = document.getElementsByClassName("badge")[0]
  let numConnectionsRequests = parseInt(numConnectionsRequestsElement.innerHTML)
  numConnectionsRequestsElement.innerHTML = numConnectionsRequests - 1

  //increase connections
  let numConnectionsElement = document.getElementsByClassName("badge")[1]
  let numConnections = parseInt(numConnectionsElement.innerHTML)
  numConnectionsElement.innerHTML = numConnections + 1

  //remove element
  element.parentElement.parentElement.remove()
}

function removeConnection(element) {
  let numConnectionsElement = document.getElementsByClassName("badge")[0]
  let numConnections = parseInt(numConnectionsElement.innerHTML)
  numConnectionsElement.innerHTML = numConnections - 1
  element.parentElement.parentElement.remove()
}