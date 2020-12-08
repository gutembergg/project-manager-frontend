import React, { createContext, useCallback, useState } from 'react'
import ICredentialsDev from '../interfaces/ICredentialsDev'
import api from '../services/api'

interface IUser {
  name: string
  email: string
  id: string
  created_at: Date | string
  updated_at: Date | string
}

interface IContextState {
  user: IUser
  signInDev(credentialsDev: ICredentialsDev): Promise<void>
}

interface IAuthState {
  token: string
  user: IUser
}

export const AuthContext = createContext<IContextState>({} as IContextState)

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@ProjectManager:token')
    const user = localStorage.getItem('@ProjectManager:user')

    if (token && user) {
      return { token, user: JSON.parse(user) }
    }

    return {} as IAuthState
  })
  const signInDev = useCallback(async (credentialsDev: ICredentialsDev) => {
    const response = await api.post('/session', credentialsDev)

    const { token, user } = response.data

    localStorage.setItem('@ProjectManager:token', token)
    localStorage.setItem('@ProjectManager:user', JSON.stringify(user))

    setData({
      token,
      user
    })
  }, [])

  return (
    <AuthContext.Provider value={{ signInDev, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}
