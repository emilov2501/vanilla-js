import { uuid } from '~/src/utils/uuid'
import BaseComponent from './BaseComponent'

class HobbyForm extends BaseComponent {
  constructor (element, userId) {
    super()
    this.element = element
    this.userId = userId
    this.loading = false
  }

  setValue(evt) {
    evt.target.setAttribute('value', evt.target.value)
  }

  onFocus() {
    this.btn.classList.add('button--show')
  }

  onBlur() {
    setTimeout(() => {
      if (!this.input.value) {
        this.btn.classList.remove('button--show')
      }
    }, 150)
  }
  
  inValid(message) {
    this.input.classList.add('form--invalid')
    return alert(message)
  }

  onClick() {
    if (!this.input.value) return this.inValid('Введите значение')
    this.input.classList.remove('form--invalid')

    this.loading = true
    this.store.events.publish('stateChanged', this.loading)
    setTimeout(() => {

      this.store.mutations.addHobby({
        id: uuid(),
        title: this.input.value,
        userId: this.userId
      })
      
      this.loading = false
      this.store.events.publish('stateChanged', this.loading)

      this.clearInput()
      this.onBlur()
    }, 500)

  }

  clearInput() {
    this.input.setAttribute('value', '')
    this.input.value = ''
  }

  render () {
    this.element.innerHTML = `
      <input placeholder="Добавьте любимую музыку" class="input input--remove-placeholder"></input>
      <button class="category__button btn ml-1">Добавить</button>
    `
    this.btn = this.element.querySelector('.btn')
    this.input = this.element.querySelector('.input')

    this.btn.addEventListener('click', (e) => this.onClick(e))
    
    this.input.addEventListener('focus', (e) => this.onFocus(e))
    this.input.addEventListener('blur', (e) => this.onBlur(e))

  }
}

export default HobbyForm