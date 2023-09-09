import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as musics from "./sounds.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")

  timer.countdown()
}

export function stop() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  timer.updateDisplay()
}

export function increaseTime() {}
