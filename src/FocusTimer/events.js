import { controls } from "./elements.js"
import { buttonSounds } from "./elements.js"

export function registerControls() {
  controls.addEventListener("click", event => {
    const action = event.target.dataset.action
    if (action === undefined) {
      return
    }
  })
}

export function registerSounds() {
  buttonSounds.addEventListener("click", event => {
    console.log(event.target)
  })
}
