import React from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { privateRoutes, publicRoutes } from "./routes"
import { getAccessToken } from "../api/tokenStorage"
import MainScreen from "../pages/MainScreen/MainScreen"
import PlayerScreen from "../pages/PlayerScreen/PlayerScreen"
import SplashScreen from "../pages/SplashScreen/SplashScreen"

const allowedPathsWithoutToken = [publicRoutes.INDEX]

const MainRouting = () => {
  const token = getAccessToken()
  const navigate = useNavigate()

  const allowedPathWithoutToken = !allowedPathsWithoutToken.includes(
    window.location.pathname,
  )

  if (!token && allowedPathWithoutToken) {
    navigate(publicRoutes.INDEX)
  }

  return (
    <Routes>
      {token && (
        <>
          <Route path={privateRoutes.MAIN_SCREEN} element={<MainScreen />} />
          <Route
            path={privateRoutes.PLAYER_SCREEN}
            element={<PlayerScreen />}
          />
        </>
      )}
      <Route path={publicRoutes.INDEX} element={<SplashScreen />} />
      <Route path="*" element={<Navigate to={publicRoutes.INDEX} />} />
    </Routes>
  )
}

export default MainRouting
