import {
  controls,
  increase,
  decrease,
  minutes,
  seconds,
  buttonSounds
} from "./elements.js"
import * as actions from "./actions.js"
import { updateDisplay } from "./timer.js"

export function registerControls() {
  controls.addEventListener("click", event => {
    const action = event.target.dataset.action //action recebe o evento do click que a função actions fornece
    if (typeof actions[action] != "function") {
      return
    } // se o tipo da ação executada não for uma function então ele "retorna" e para a aplicação.
    actions[action]() // Se o tipo da ação executada for uma function então ele executa a ação.
  })
}

export function addTime() {
  increase.addEventListener("click", event => {
    let min = Number(minutes.textContent)
    let sec = Number(seconds.textContent)

    min += 5

    if (min > 60) {
      min = 60
    }

    updateDisplay(min, sec)
  })
}

export function decTime() {
  decrease.addEventListener("click", event => {
    let min = Number(minutes.textContent)
    let sec = Number(seconds.textContent)

    min -= 5
    if (min < 0) {
      min = 0
    }

    updateDisplay(min, sec)
  })
}

export function toggleSounds() {
  buttonSounds.addEventListener("click", event => {
    event.target.classList.toggle("press")
  })
}
