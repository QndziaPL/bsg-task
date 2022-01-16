import { useEffect, useState } from "react"

const initialData = {
  ClientRoles: [],
  FullName: "",
  Id: 0,
  UserName: "",
}

const useUserData = () => {
  const [data, setData] = useState({
    ClientRoles: [],
    FullName: "",
    Id: 0,
    UserName: "",
  })

  useEffect(() => {
    refreshUserData()
  }, [])

  const refreshUserData = () => {
    const userData = localStorage.getItem("userData")
    if (userData) {
      setData(JSON.parse(userData))
    } else {
      setData(initialData)
    }
  }

  return { ...data, refreshUserData }
}

export default useUserData
