import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { ACTION_TYPES } from '../types/types'

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return {
    logged: !!user,
    user
  }
}

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init)

  const login = (name = '') => {
    const action = {
      type: ACTION_TYPES.LOGIN,
      payload: {
        id: 'ABC',
        name: name
      }
    }

    localStorage.setItem('user', JSON.stringify(action.payload))

    dispatch(action)
  }

  const logout = () => {
    localStorage.removeItem('user')

    const action = {
      type: ACTION_TYPES.LOGOUT
    }

    dispatch(action)
  }

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
