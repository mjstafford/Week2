let secondsHand = document.querySelector("#seconds")
let minutesHand = document.querySelector("#minutes")
let hourHand = document.querySelector("#hour")

function getSecondsSinceStartOfDay() {
  return new Date().getSeconds() +
    new Date().getMinutes() * 60 +
    new Date().getHours() * 3600;
}

setInterval(function () {
  var time = getSecondsSinceStartOfDay();
  console.log(time);
  // your code here
  let secondsDegree = 180 + (time % 60) * 6         //add 180 to get the rotation to start based off of 12
  let minutesDegree = 180 + ((time / 60) % 60) * 6  // time/60 represents minutes, %60 represents current minute, 6 represents 1 minute movement in degrees
  let hourDegree = 180 + ((time / 3600) % 12) * 30   // time/3600 gives total hours, %12 gives current hour, 30 is how much the hour hand moves in a given hour
  secondsHand.style.transform = `rotate(${secondsDegree}deg)`
  minutesHand.style.transform = `rotate(${minutesDegree}deg)`
  hourHand.style.transform = `rotate(${hourDegree}deg)`
}, 1000);
