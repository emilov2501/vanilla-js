import App from './app'
import HobbyList from './components/HobbyList'
import HobbyForm from './components/HobbyForm'
import Store from './store/store'

import { FAKE_USER_ID, FAKE_USER_ID_NOT_ME } from './constants'

export const store = new Store()

new App({
  store,
  components: [
    new HobbyForm(document.querySelector('#form-block'), FAKE_USER_ID),
    new HobbyList(document.querySelector('#categories'), FAKE_USER_ID),
    new HobbyList(document.querySelector('#friend-categories'), FAKE_USER_ID_NOT_ME),
  ]
})