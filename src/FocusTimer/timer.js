import state from "./state.js"
import * as el from "./elements.js"
import { stop } from "./actions.js"
// função pra atualizar o contador

export function countdown() {
  clearTimeout(state.countdownId)

  if (!state.isRunning) {
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if (seconds < 0) {
    seconds = 59
    minutes--
  }

  if (minutes < 0) {
    stop()
    return
  }

  updateDisplay(minutes, seconds)

  state.countdownId = setTimeout(() => countdown(), 1000) //setTimeout ele executa uma função  depois de um determinado tempo
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes // se minutes for null, então ele vai pegar o state.minutes (estado os minutos)
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart("2", 0)
  el.seconds.textContent = String(seconds).padStart("2", 0)
}
