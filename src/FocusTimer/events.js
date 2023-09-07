import { controls } from "./elements.js"
import * as actions from "./actions.js"

export function registerControls() {
  controls.addEventListener("click", event => {
    const action = event.target.dataset.action
    if (typeof actions[action] != "function") {
      return
      // event.target se refere ao evento de clickar e dataset refere-se ao acesso do evento no data definido no HTMl e action o atributo, por isso dataset.action
    }
    actions[action]()
  })
}
