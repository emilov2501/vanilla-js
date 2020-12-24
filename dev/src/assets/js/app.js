import Store from "./store/store"

class App {
  constructor ({ store, components = [] }) {
    this.store = store
    this.components = components

    this.initialize()
  }

  initialize () {
    this.components.forEach((component) => {
      component.render()
    })
  }
}

export  default App;