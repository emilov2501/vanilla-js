import { FAKE_USER_ID } from '../constants'
import BaseComponent from './BaseComponent'

class HobbyItem extends BaseComponent {
    constructor (item, userId) {
      super()
      this.userId = userId
      this.item = item
    }

    get classes () {
      return this.userId === FAKE_USER_ID ? 'close-icon' : 'add-icon'
    }

    get isShare () {
      return this.item.shared && this.userId !== FAKE_USER_ID ? 'shared' : ''
    }

    render () {
      const template = `
        <div class="category__item">
          <div>
            <div class="icon ${this.classes} ${this.isShare}"></div>
            <span class="title">${this.item.title}</span>
          </div>
          ${this.userId !== FAKE_USER_ID ? 
            `
            <div class="category__complain">
            <span class="complain"></span>
              Пожаловаться
            </div>
            ` : ''   
          }
        </div>
      `
      
      return template
    }
}

export default HobbyItem
