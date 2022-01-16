import React from "react"
import RouterWrapper from "./routes/RouterWrapper"
import { AppContainer } from "./App.styled"
import { UserContextProvider } from "./context/UserContext"

function App() {
  return (
    <AppContainer>
      <UserContextProvider>
        <RouterWrapper />
      </UserContextProvider>
    </AppContainer>
  )
}

export default App
