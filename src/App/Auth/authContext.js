import { createContext, useState, useEffect } from "react"
import * as auth from "../Auth/authHelper"
// import axios from "axios"
const AuthContext = createContext()

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const getCurrentUser = async () => {
    try {
      const user = await auth.getCurrentUser()
      
      // const baseUrl = "https://zjixv0m4di.execute-api.us-east-1.amazonaws.com/non-prod"
      // const userInfoPath = `<todo>`
      // const requestURL = baseUrl + userInfoPath
      // const response = await axios.get(requestURL)
      // user.userData = response.data
      setUser(user)
    } catch (err) {
      // not logged in
      console.log(err)
      setUser(null)
    }
  }

  useEffect(() => {
    getCurrentUser()
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false))
  }, [])

  const signIn = async (username, password) => {
    await auth.signIn(username, password)
    await getCurrentUser()
  }
  const signOut = async () => {
    await auth.signOut()
    setUser(null)
  }
  const getSession = async () => {
    const session = await auth.getSession()
  
    return session
  }

  const authValue = {
    user,
    isLoading,
    signIn,
    signOut,
    getSession
  }

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
