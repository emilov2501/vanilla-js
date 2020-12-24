export const getters = {
  hobbies: (state) => (userId) => {
    return state[userId].hobbies
  }
}