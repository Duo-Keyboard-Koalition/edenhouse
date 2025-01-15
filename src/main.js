import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
console.log("Starting main.js")
class Veggie {
  // constructor have color and weight
  constructor(color, weight) {
    this.color = color
    this.weight = weight
  }
  // method to get color
  getColor() {
    return this.color
  }
  // method to get weight
  getWeight() {
    return this.weight
  }
}

class Mushroom extends Veggie {
  #deadly; // private field declaration

  constructor(color, weight, isDeadly) {
      super(color, weight);
      this.#deadly = isDeadly; // use # to access private field
  }

  // method to get deadly
  getDeadly() {
      return this.#deadly; // use # to access private field
  }

  // method to set deadly
  setDeadly(isDeadly) {
      this.#deadly = isDeadly; // use # to access private field
  }
}


// make a mushroom object
let mushroom1 = new Mushroom("white", 10, true)
mushroom1.#deadly = false