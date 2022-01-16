import client from "./client"

export const post = (endpoint: string, postData: any) => {
  const queryUrl = `/${endpoint}`
  return client.post(queryUrl, postData).then(({ data }) => data)
}
