import {
  play,
  pause,
  stop,
  increase,
  decrease,
  minutes,
  seconds
} from "./elements.js"

export function playPause() {
  if (seconds.textContent != "00") {
    play.classList.toggle("running")
    pause.classList.toggle("running")
    stop.classList.remove("running")
  } else {
    play.classList.toggle("running")
    stop.classList.toggle("running")
  }
}

export function stoper() {
  play.classList.remove("running")
  pause.classList.remove("running")
  stop.classList.add("running")
}

export function updateDisplay() {
  minutes.innerHTML = String().padStart(2, "0")
  seconds.innerHTML = "00"

  increase.disabled = false
  decrease.disabled = false
  pause.disabled = true
}
