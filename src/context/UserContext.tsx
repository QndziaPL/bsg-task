import { createContext, FC } from "react"
import useUserData from "../api/hooks/useUserData"

const UserContext = createContext({
  ClientRoles: [],
  FullName: "",
  Id: 0,
  UserName: "",
  refreshUserData: () => {},
})

const UserContextProvider: FC = ({ children }) => {
  const userData = useUserData()

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  )
}

export { UserContext, UserContextProvider }
