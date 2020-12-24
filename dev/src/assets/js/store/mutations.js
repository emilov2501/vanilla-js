import { FAKE_USER_ID } from '~/src/assets/js/constants'

export const mutations = {
  removeHobby (state, { userId, payload }) {
    state[userId].hobbies.splice(payload, 1);
    return state;
  },

  addHobby(state, { id, title, userId }) {

    const hobby = {
      id,
      title
    }

    state[userId].hobbies.push(hobby)
    return state
  },

  shareHobby(state, { userId, payload }) {
    const hobby = state[userId].hobbies.find((item, index) => index === payload)
    state[FAKE_USER_ID].hobbies.push(hobby)
    toShared(hobby, state, userId, payload)
  }
}

function toShared(hobby, state, userId, payload) {
  state[userId].hobbies.splice(payload, 1, { ...hobby, shared: true })  
}