import { ACTION_TYPES } from '../types/types'

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return {
        ...state,
        logged: true,
        user: action.payload
      }

    case ACTION_TYPES.LOGOUT:
      return {
        logged: false
      }

    default:
      return state
  }
}
