import state from "./state.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")
  // Nesse caso estamos pegando um documentElement que se refere ao HTML e com o classList estamos adicionando ou retirando a classe running com por meio do toggle.
  console.log(document.documentElement)
}

export function stop() {
  console.log("stop")
}
