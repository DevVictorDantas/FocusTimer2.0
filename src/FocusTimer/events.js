import { controls } from "./elements.js"
import { buttonSounds } from "./elements.js"

export function registerControls() {
  controls.addEventListener("click", event => {
    console.log(event.target)
  })
}

export function registerSounds() {
  buttonSounds.addEventListener("click", event => {
    console.log(event.target)
  })
}
