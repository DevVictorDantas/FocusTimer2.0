import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")

  timer.countdown()
}

export function toggleSound() {
  const buttonSound = document.querySelectorAll(".ph")
  for (let i = 0; i < buttonSound.length; i++) {
    buttonSound[i].addEventListener("click", event => {
      buttonSound[i].classList.toggle("press")
    })
  }
}

export function stop() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  timer.updateDisplay()
}
