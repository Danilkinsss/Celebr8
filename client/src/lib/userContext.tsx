import { Usertype } from '@/types'
import React, { createContext, useState } from 'react'

type UserContextType = {
  user?: Usertype
  login: (user: Usertype) => void
  logout: () => void
}

export const userContext = createContext<UserContextType>({
  login: () => {
    throw new Error('context is not provided')
  },
  logout() {
    throw new Error('context is not provided')
  },
})

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<Usertype>()

  function login(user: Usertype) {
    setUser(user)
  }

  function logout() {
    setUser(undefined)
  }

  return (
    <userContext.Provider
      value={{
        login,
        logout,
        user,
      }}
    >
      {children}
    </userContext.Provider>
  )
}
