
import Store from '../store/store'

const store = new Store

export default class BaseComponent {
  constructor() {
    this.store = store
    this.loading = ''
  }

  /**
   * Update tree every changed state
   */
  update() {
    let subscription;
    subscription = this.store.events.subscribe('stateChanged', (loading) => {
      console.log(`UPDATE: Component "${this.element.id}"`)
      
      this.loading = loading
      this.render()
      subscription.unsubscribe()
    })
  }

  /**
   * Render method return template
   */
  render() {}
}