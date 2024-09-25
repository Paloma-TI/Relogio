const hoursElement = document.getElementById("hours")
const minutesElement = document.getElementById("minutes")
const secondsElement = document.getElementById("seconds")

const date = new Date();

const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()

hoursElement.textContent = hours
minutesElement.textContent = minutes
secondsElement.textContent = seconds

console.log(hours, minutes, seconds)

