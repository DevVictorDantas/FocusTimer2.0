import { controls } from "./elements.js"
import { buttonSounds } from "./elements.js"
import * as actions from "./actions.js"

export function registerControls() {
  controls.addEventListener("click", event => {
    const action = event.target.dataset.action //action recebe o nome do click que a função actions fornece
    if (typeof actions[action] != "function") {
      return
    } // se o tipo da ação executada não for uma function então ele "retorna" e para a aplicação.
    actions[action]() // Se o tipo da ação executada for uma function então ele executa a ação.
  })
}

export function registerSounds() {
  buttonSounds.addEventListener("click", event => {
    console.log(event.target)
  })
}
