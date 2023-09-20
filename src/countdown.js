import { minutes, seconds } from "./elements.js"
import { playPause, stoper, updateDisplay } from "./actions.js"

export let timerTimeOut
export function countdown() {
  timerTimeOut = setTimeout(function () {
    let min = Number(minutes.innerHTML)
    let sec = Number(seconds.innerHTML)

    seconds.textContent = String(sec - 1).padStart(2, "0")

    if (min == 0 && sec <= 1) {
      playPause()
      stoper()
      updateDisplay()
      document.title = "Focus Timer"

      return
    }

    if (sec <= 0) {
      sec = 59

      minutes.textContent = String(min - 1).padStart(2, "0")
    }

    seconds.textContent = String(sec - 1).padStart(2, "0")

    document.title = `Focus Timer ${String(min).padStart(2, "0")}:${String(
      sec - 1
    ).padStart(2, "0")}`

    countdown()
  }, 1000)
}
