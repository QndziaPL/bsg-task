import React, { useState } from "react"
import {
  ErrorStyled,
  LogoStyled,
  SplashScreenStyled,
} from "./styled/SplashScreen.styled"
import { Credentials, login } from "../../api/auth"
import { useNavigate } from "react-router-dom"
import { privateRoutes } from "../../routes/routes"
import { SinglePageContainer } from "../../App.styled"
import LoginForm from "./LoginForm"

const SplashScreen = () => {
  const [loading, setLoading] = useState(false)
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate()
  const handleLogin = (credentials?: Credentials) => {
    setLoading(true)
    setError("")
    login(credentials)
      .then(() => navigate(privateRoutes.MAIN_SCREEN))
      .catch(({ response }) => setError(response?.data?.Message))
      .finally(() => setLoading(false))
  }

  return (
    <SinglePageContainer>
      <SplashScreenStyled>
        <LogoStyled />
        <LoginForm
          password={password}
          setPassword={setPassword}
          setUserName={setUserName}
          userName={userName}
          handleLogin={handleLogin}
          loading={loading}
        />
        <ErrorStyled>{error}</ErrorStyled>
      </SplashScreenStyled>
    </SinglePageContainer>
  )
}

export default SplashScreen
