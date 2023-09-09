import { PropsWithChildren, createContext, useState } from 'react'
import { DEV_BOOKS_SESSION_KEY } from '../../constants/storage'
import { useSignIn } from '../../hooks/useSignIn'
import { useSignUp } from '../../hooks/useSignUp'

interface User {
  id: number
  name: string
  email: string
}

interface SignInUser {
  email: string
  password: string
}

interface SignUpUser {
  name: string
  email: string
  password: string
}

export interface Session {
  user: User
  accessToken: string
  refreshToken: string
}

interface AuthContextType {
  isAuthenticated: boolean
  user?: User
  signIn: (user: SignInUser) => Promise<void>
  signUp: (user: SignUpUser) => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(() => {
    const session = localStorage.getItem(DEV_BOOKS_SESSION_KEY)

    if (session) {
      return JSON.parse(session)
    }

    return null
  })
  const signInMutation = useSignIn()
  const signUpMutation = useSignUp()

  const signIn = async (user: SignInUser): Promise<void> => {
    await signInMutation.mutateAsync(user, {
      onSuccess: (session) => {
        setSession(session)

        localStorage.setItem(DEV_BOOKS_SESSION_KEY, JSON.stringify(session))
      }
    })
  }

  const signUp = async (user: SignUpUser): Promise<void> => {
    await signUpMutation.mutateAsync(user)
  }

  const signOut = async (): Promise<void> => {
    console.log('logout')
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: Boolean(session),
        user: session?.user,
        signIn,
        signUp,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
