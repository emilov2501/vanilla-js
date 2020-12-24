import { getters, state, mutations } from '.'
import PubSub from '../lib/pubsub'
class Store {
    static registerGetters (target, src) {
      Object.keys(getters).forEach((getter) => {
        Object.assign(target, { [getter]: getters[getter](src) })
      })
    }

    static registerMutations (target, src) {
      Object.keys(mutations).forEach((mutation) => {
        Object.assign(target, { [mutation]: (payload) => mutations[mutation](src, payload) })
      })
    }

    constructor () {
      const self = this
      self.state = state()
      self.getters = {}
      self.mutations = {}

      self.events = new PubSub()
      
      // Register getters, mutations
      Store.registerGetters(self.getters, self.state)
      Store.registerMutations(self.mutations, self.state) 
      
    }

    updateTree(component) {
      component.render()
    }
}

export default Store
