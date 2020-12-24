import HobbyItem from './HobbyItem'
import BaseComponent from './BaseComponent'
import { FAKE_USER_ID, FAKE_USER_ID_NOT_ME } from '../constants'

class HobbyList extends BaseComponent {
    constructor (element, userId) {
      super()
      this.userId = userId
      this.element = element
    }

    get hobbies () {
      return this.store.getters.hobbies(this.userId)
    }

    get isLoading() {
      return !this.loading || this.userId !== FAKE_USER_ID
    }

    handleEvent(item, index) {
      let icon = item.previousElementSibling

      switch (this.userId) {

        case FAKE_USER_ID:
          this.store.mutations.removeHobby({ userId: this.userId, payload: index })
          break

        case FAKE_USER_ID_NOT_ME:
          if (!icon.classList.contains('shared')) {
            this.store.mutations.shareHobby({ userId: this.userId, payload: index })
          }

          this.toggleShareClass(index, icon)
          break
      }

      this.store.events.publish('stateChanged')
    }

    toggleShareClass(index) {
      setTimeout(() => {
        this.store.state[this.userId].hobbies[index].shared = false
        this.store.events.publish('stateChanged')
      }, 700)
    }

    handleComplainEvent(index) {
      const complainMessage = prompt(`Пожаловаться на ${this.hobbies[index].title}`)
      
      if (complainMessage) {
        alert('Спасибо за отзыв')
      }
    }
    
    
    render () {
      this.element.innerHTML = `
        <div class="categories">
          ${ 
            this.isLoading ? `
              ${
                this.hobbies.map(item => new HobbyItem(item, this.userId).render()).join('')
              }
              ${
                this.userId === FAKE_USER_ID ?
                '<div class="category__collapse category__collapse--hover">Еще 8 увлечений</div>'
                : ''
              } 
            `
            : 'Загрузка...' 
          }
        </div>
      `

      this.element.querySelectorAll('.title').forEach((item, index) => {
        item.addEventListener('click', () => this.handleEvent(item, index))
      })
      
      this.element.querySelectorAll('.category__complain').forEach((item, index) => {
        item.addEventListener('click', () => this.handleComplainEvent(index))
      })
      
      this.update()
    }
}

export default HobbyList
