export default class PubSub {
  constructor () {
    this.events = {}
  }

  /**
   * 
   * @param {String} eventName 
   * @param {Function} callback 
   */
  subscribe (eventName, callback) {
    let self = this
    if (!this.events.hasOwnProperty(eventName)) {
      this.events[eventName] = []
    }

    this.events[eventName].push(callback)
    
    return {
      unsubscribe () {
        self.events[eventName] = self.events[eventName].filter(cb => {
          if (cb === callback) {
            return false
          }
          return true
        })
      }
    };
  }

  /**
   * 
   * @param {String} eventName 
   * @param {any} data 
   */
  publish (eventName, data) {
    if (!this.events[eventName]) return

    this.events[eventName].forEach(fn => fn(data))
  }
}