export const setAccessToken = ({ token }: { token: string }) => {
  localStorage.setItem("accessToken", token)
}

export const getAccessToken = () => localStorage.getItem("accessToken")

export const clearTokens = () => localStorage.clear()

export const setUserDataToStore = (userData: {}) =>
  localStorage.setItem("userData", JSON.stringify(userData))
