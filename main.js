import {
  play,
  pause,
  stop,
  increase,
  decrease,
  minutes,
  seconds
} from "./src/elements.js"
import { countdown, timerTimeOut } from "./src/countdown.js"
import { updateDisplay, stoper, playPause } from "./src/actions.js"

pause.disabled = true
export let timeSeted = String(minutes.textContent).padStart(2, "0")

play.addEventListener("click", () => {
  if (seconds.textContent == "00" && minutes.textContent == "00") {
    seconds.textContent = "00"
    minutes.textContent = "00"
  } else {
    playPause()
    countdown()
    increase.disabled = true
    decrease.disabled = true
    pause.disabled = false
  }
})

stop.addEventListener("click", () => {
  playPause()
  updateDisplay(timerTimeOut)
})

increase.addEventListener("click", () => {
  if (minutes.textContent >= "95") {
    minutes.textContent = "95"
  } else {
    timeSeted = Number(timeSeted) + 5
    minutes.innerHTML = String(timeSeted).padStart(2, "0")
  }
})

decrease.addEventListener("click", () => {
  minutes.innerHTML = String(timeSeted).padStart(2, "0")
  if (minutes.textContent == "00" && seconds.textContent == "00") {
    minutes.textContent = "05"
    seconds.textContent = "00"
  } else {
    timeSeted -= 5
  }
})
