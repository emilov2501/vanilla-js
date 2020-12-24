import { FAKE_USER_ID } from '~/src/assets/js/constants.js'
import { FAKE_USER_ID_NOT_ME } from '~/src/assets/js/constants.js'

export const state = () => (
  {
    [FAKE_USER_ID]: {
      hobbies: [
        {
          id: 1,
          title: 'dubstep'
        },
        {
          id: 2,
          title: 'Music'
        }
      ]
    },
    [FAKE_USER_ID_NOT_ME]: {
      hobbies: [
        {
          id: 324,
          title: 'dubstep'
        },
        {
          id: 534,
          title: 'Electronica'
        },
        {
          id: 546,
          title: 'Jazz'
        },
        {
          id: 674,
          title: 'Lo-Fi'
        }
      ]
    }
  }
)