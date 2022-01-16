import client from "./client"
import { setAccessToken, setUserDataToStore } from "./tokenStorage"
import { v4 as uuid } from "uuid"

export interface Credentials {
  Username: string
  Password: string
}
export const login = (credentials?: Credentials) => {
  return client
    .post(`/Authorization/SignIn`, {
      ...credentials,
      Device: {
        PlatformCode: "WEB",
        Name: uuid(),
      },
    })
    .then(({ data }) => {
      setAccessToken({ token: data.AuthorizationToken.Token })
      setUserDataToStore({ ...data.User })
    })
}
